import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useStarkMode } from '../context/StarkModeContext';
import { playReactorPulse } from '../audio/soundSynth';

export default function ThreeArcReactor({ className = "w-full h-full", interactive = true }) {
  const mountRef = useRef(null);
  const { isIronManMode, suitOverdrive } = useStarkMode();
  const sceneRef = useRef(null);
  const coreRef = useRef(null);
  const ringsRef = useRef([]);
  const coilsRef = useRef([]);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDown: false, lastMouseX: 0, lastMouseY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for entire Arc Reactor
    const arcGroup = new THREE.Group();
    scene.add(arcGroup);

    // Color definitions based on mode
    const primaryColor = isIronManMode ? 0xff3b30 : 0x00f0ff;
    const secondaryColor = isIronManMode ? 0xffd700 : 0x0088ff;
    const coreColor = isIronManMode ? 0xffffff : 0xe0ffff;

    // 1. Outer Titanium Bezel
    const outerRingGeo = new THREE.TorusGeometry(2.3, 0.18, 24, 72);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: isIronManMode ? 0x221115 : 0x111d2e,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    arcGroup.add(outerRing);

    // 2. Middle Ring with glowing notches
    const midRingGeo = new THREE.TorusGeometry(1.85, 0.08, 16, 64);
    const midRingMat = new THREE.MeshStandardMaterial({
      color: isIronManMode ? 0xb8860b : 0x1e3a5f,
      metalness: 0.95,
      roughness: 0.3
    });
    const midRing = new THREE.Mesh(midRingGeo, midRingMat);
    arcGroup.add(midRing);

    // 3. Inner Glowing Ring
    const innerGlowRingGeo = new THREE.TorusGeometry(1.35, 0.05, 16, 64);
    const innerGlowRingMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.85
    });
    const innerGlowRing = new THREE.Mesh(innerGlowRingGeo, innerGlowRingMat);
    arcGroup.add(innerGlowRing);

    // 4. Ten Radial Copper / Energy Coils around the ring
    const coilCount = 10;
    const coilGroup = new THREE.Group();
    arcGroup.add(coilGroup);
    coilsRef.current = [];

    for (let i = 0; i < coilCount; i++) {
      const angle = (i / coilCount) * Math.PI * 2;
      const radius = 1.85;

      const subCoilGroup = new THREE.Group();
      subCoilGroup.position.x = Math.cos(angle) * radius;
      subCoilGroup.position.y = Math.sin(angle) * radius;
      subCoilGroup.rotation.z = angle + Math.PI / 2;

      // Small coil block
      const coilBlockGeo = new THREE.BoxGeometry(0.38, 0.22, 0.28);
      const coilBlockMat = new THREE.MeshStandardMaterial({
        color: isIronManMode ? 0xd4af37 : 0xcc7722, // Copper / Gold
        metalness: 0.8,
        roughness: 0.35
      });
      const coilMesh = new THREE.Mesh(coilBlockGeo, coilBlockMat);
      subCoilGroup.add(coilMesh);

      // Light emitter bar on each coil
      const coilEmitterGeo = new THREE.BoxGeometry(0.28, 0.06, 0.32);
      const coilEmitterMat = new THREE.MeshBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: 0.95
      });
      const emitterMesh = new THREE.Mesh(coilEmitterGeo, coilEmitterMat);
      subCoilGroup.add(emitterMesh);

      coilGroup.add(subCoilGroup);
      coilsRef.current.push(emitterMesh);
    }

    // 5. Center Arc Core (Triangular / Multilayered Palladium Lens)
    const coreGroup = new THREE.Group();
    arcGroup.add(coreGroup);
    coreRef.current = coreGroup;

    // Glowing core disc
    const coreDiscGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.15, 32);
    const coreDiscMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      emissive: primaryColor,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85,
      metalness: 0.3,
      roughness: 0.1
    });
    const coreDisc = new THREE.Mesh(coreDiscGeo, coreDiscMat);
    coreDisc.rotation.x = Math.PI / 2;
    coreGroup.add(coreDisc);

    // Inner triangular / segmented aperture
    const triShape = new THREE.Shape();
    const triSize = 0.55;
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(a) * triSize;
      const py = Math.sin(a) * triSize;
      if (i === 0) triShape.moveTo(px, py);
      else triShape.lineTo(px, py);
    }
    triShape.closePath();

    const triGeo = new THREE.ShapeGeometry(triShape);
    const triMat = new THREE.MeshBasicMaterial({
      color: coreColor,
      wireframe: true,
      wireframeLinewidth: 2
    });
    const triMesh = new THREE.Mesh(triGeo, triMat);
    triMesh.position.z = 0.1;
    coreGroup.add(triMesh);

    // 6. Rotating inner wireframe reticle
    const reticleGeo = new THREE.RingGeometry(0.95, 1.05, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const reticle = new THREE.Mesh(reticleGeo, reticleMat);
    arcGroup.add(reticle);
    ringsRef.current.push(reticle);

    // 7. Swirling energy particles around reactor
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const angleArray = new Float32Array(particleCount);
    const radiusArray = new Float32Array(particleCount);
    const speedArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.0 + Math.random() * 1.5;
      const z = (Math.random() - 0.5) * 0.4;
      posArray[i * 3] = Math.cos(a) * r;
      posArray[i * 3 + 1] = Math.sin(a) * r;
      posArray[i * 3 + 2] = z;

      angleArray[i] = a;
      radiusArray[i] = r;
      speedArray[i] = 0.02 + Math.random() * 0.03;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: primaryColor,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    arcGroup.add(particlePoints);
    particlesRef.current = { points: particlePoints, angleArray, radiusArray, speedArray };

    // 8. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(primaryColor, 3, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Interactive mouse drag / tilt
    const handleMouseDown = (e) => {
      mouseRef.current.isDown = true;
      mouseRef.current.lastMouseX = e.clientX;
      mouseRef.current.lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.45;

      if (mouseRef.current.isDown) {
        const deltaX = e.clientX - mouseRef.current.lastMouseX;
        const deltaY = e.clientY - mouseRef.current.lastMouseY;
        arcGroup.rotation.y += deltaX * 0.01;
        arcGroup.rotation.x += deltaY * 0.01;
        mouseRef.current.lastMouseX = e.clientX;
        mouseRef.current.lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    const handleClick = () => {
      playReactorPulse();
      // temporary burst
      if (coreDisc.material) {
        coreDisc.material.emissiveIntensity = 2.5;
        setTimeout(() => {
          if (coreDisc.material) coreDisc.material.emissiveIntensity = 0.8;
        }, 400);
      }
    };

    if (interactive) {
      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('click', handleClick);
    }

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp tilt to mouse
      if (!mouseRef.current.isDown) {
        arcGroup.rotation.y += (mouseRef.current.targetX - arcGroup.rotation.y) * 0.05;
        arcGroup.rotation.x += (-mouseRef.current.targetY - arcGroup.rotation.x) * 0.05;
      }

      // Continuous subtle rotation
      coilGroup.rotation.z = elapsedTime * 0.15;
      reticle.rotation.z = -elapsedTime * 0.35;
      triMesh.rotation.z = elapsedTime * 0.5;

      // Pulse core scale
      const pulse = Math.sin(elapsedTime * 4) * 0.04 + 1.0;
      coreGroup.scale.set(pulse, pulse, pulse);

      // Overdrive effect when repulsor fired
      if (suitOverdrive) {
        coreDisc.material.emissiveIntensity = 3.0;
        pointLight.intensity = 6;
      } else {
        coreDisc.material.emissiveIntensity = 0.8 + Math.sin(elapsedTime * 3) * 0.2;
        pointLight.intensity = 3;
      }

      // Orbit particles
      if (particlesRef.current) {
        const { points, angleArray, radiusArray, speedArray } = particlesRef.current;
        const positions = points.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          angleArray[i] += speedArray[i];
          positions[i * 3] = Math.cos(angleArray[i]) * radiusArray[i];
          positions[i * 3 + 1] = Math.sin(angleArray[i]) * radiusArray[i];
        }
        points.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        container.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('click', handleClick);
      }
      renderer.dispose();
      scene.clear();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isIronManMode, suitOverdrive, interactive]);

  return (
    <div className={`relative ${className} flex items-center justify-center cursor-grab active:cursor-grabbing select-none group`}>
      <div ref={mountRef} className="w-full h-full" />
      {/* HUD Reticle Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className={`w-[85%] h-[85%] rounded-full border border-dashed transition-all duration-700 ${
          isIronManMode ? 'border-iron-red/30' : 'border-stark-blue/30'
        } animate-spin-slow`} />
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase font-tech px-2 py-0.5 rounded bg-black/60 border border-current pointer-events-none text-muted-foreground opacity-75 group-hover:opacity-100 transition-opacity">
        [ Click Core // Drag to Rotate ]
      </div>
    </div>
  );
}
