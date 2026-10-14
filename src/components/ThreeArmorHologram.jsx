import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useStarkMode } from '../context/StarkModeContext';
import { playHudBeep, playTargetLock } from '../audio/soundSynth';

export default function ThreeArmorHologram({ className = "w-full h-full" }) {
  const mountRef = useRef(null);
  const { isIronManMode } = useStarkMode();
  const [exploded, setExploded] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const explodedRef = useRef(exploded);
  explodedRef.current = exploded;

  const telemetryNodes = [
    { id: "optics", label: "Multi-Spectral Ocular Sensors", detail: "Thermal, ultraviolet, and kinetic targeting tracking. 120 FPS latency-free projection." },
    { id: "nanite", label: "Sub-Dermal Nanotech Injectors", detail: "Liquid-metal nanoparticle reservoirs for real-time armor regeneration." },
    { id: "comms", label: "Quantum Entanglement Uplink", detail: "Sub-orbital satellite comms and direct JARVIS / FRIDAY neural handshake." },
    { id: "alloy", label: "Gold-Titanium Exoskeleton", detail: "Anti-icing metallurgy rated for exo-atmospheric re-entry and kinetic shielding." }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const wireColor = isIronManMode ? 0xff3333 : 0x00f0ff;
    const faceColor = isIronManMode ? 0xffd700 : 0x00a3ff;
    const glowColor = isIronManMode ? 0xff7700 : 0x38bdf8;

    // Build Stylized 3D Iron Man Helmet Shell
    const helmetGroup = new THREE.Group();
    mainGroup.add(helmetGroup);

    // 1. Cranium / Crown dome
    const domeGeo = new THREE.SphereGeometry(1.6, 24, 20, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const wireMat = new THREE.MeshBasicMaterial({
      color: wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const fillMat = new THREE.MeshStandardMaterial({
      color: 0x050b14,
      emissive: wireColor,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8
    });
    const domeWire = new THREE.Mesh(domeGeo, wireMat);
    const domeFill = new THREE.Mesh(domeGeo, fillMat);
    domeWire.position.y = 0.3;
    domeFill.position.y = 0.3;
    helmetGroup.add(domeWire);
    helmetGroup.add(domeFill);

    // 2. Iconic Faceplate (Golden Brow & Jaw)
    const faceGroup = new THREE.Group();
    helmetGroup.add(faceGroup);

    // Faceplate Brow
    const browGeo = new THREE.CylinderGeometry(1.45, 1.25, 0.9, 16, 4, true, -Math.PI * 0.35, Math.PI * 0.7);
    const faceMat = new THREE.MeshStandardMaterial({
      color: isIronManMode ? 0xcc9900 : 0x0066aa,
      wireframe: true,
      emissive: faceColor,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.85
    });
    const brow = new THREE.Mesh(browGeo, faceMat);
    brow.position.set(0, 0.4, 0.4);
    faceGroup.add(brow);

    // Jaw / Chin plate
    const jawGeo = new THREE.ConeGeometry(1.2, 1.5, 12, 4, true, -Math.PI * 0.35, Math.PI * 0.7);
    const jaw = new THREE.Mesh(jawGeo, faceMat);
    jaw.rotation.x = Math.PI;
    jaw.position.set(0, -0.65, 0.45);
    faceGroup.add(jaw);

    // 3. Glowing Ocular Eye Slits
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    const eyeGeo = new THREE.BoxGeometry(0.48, 0.08, 0.15);

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.48, 0.25, 1.5);
    leftEye.rotation.z = -0.15;
    faceGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.48, 0.25, 1.5);
    rightEye.rotation.z = 0.15;
    faceGroup.add(rightEye);

    // 4. Ears / Comm Pods
    const earGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 16);
    const leftEar = new THREE.Mesh(earGeo, wireMat);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.position.set(-1.65, 0.2, 0.1);
    helmetGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, wireMat);
    rightEar.rotation.z = Math.PI / 2;
    rightEar.position.set(1.65, 0.2, 0.1);
    helmetGroup.add(rightEar);

    // 5. Surrounding Holographic Gyro HUD Rings (Territory Studio style)
    const hudRing1Geo = new THREE.RingGeometry(2.4, 2.45, 64);
    const hudRingMat1 = new THREE.MeshBasicMaterial({
      color: wireColor,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const hudRing1 = new THREE.Mesh(hudRing1Geo, hudRingMat1);
    scene.add(hudRing1);

    const hudRing2Geo = new THREE.RingGeometry(2.7, 2.73, 48);
    const hudRingMat2 = new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    const hudRing2 = new THREE.Mesh(hudRing2Geo, hudRingMat2);
    hudRing2.rotation.x = Math.PI / 3;
    scene.add(hudRing2);

    // 6. Floating Telemetry Point Cloud
    const pCount = 300;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const radius = 2.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = radius * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: wireColor,
      size: 0.04,
      transparent: true,
      opacity: 0.6
    });
    const pPoints = new THREE.Points(pGeo, pMat);
    scene.add(pPoints);

    // Ambient & Point light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(wireColor, 2, 8);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);

    // Mouse control
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.01;
        targetRotX += deltaY * 0.01;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth rotation lerp
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;

      // Idle auto gentle oscillation if not dragging
      if (!isDragging) {
        mainGroup.rotation.y += 0.008;
      }

      // HUD rings rotation
      hudRing1.rotation.z = elapsed * 0.2;
      hudRing2.rotation.y = elapsed * 0.15;
      pPoints.rotation.y = -elapsed * 0.05;

      // Exploded View Interpolation
      const targetZ = explodedRef.current ? 1.4 : 0.4;
      const targetEarOffset = explodedRef.current ? 2.4 : 1.65;
      const targetDomeY = explodedRef.current ? 0.9 : 0.3;

      faceGroup.position.z += (targetZ - faceGroup.position.z) * 0.08;
      leftEar.position.x += (-targetEarOffset - leftEar.position.x) * 0.08;
      rightEar.position.x += (targetEarOffset - rightEar.position.x) * 0.08;
      domeWire.position.y += (targetDomeY - domeWire.position.y) * 0.08;
      domeFill.position.y += (targetDomeY - domeFill.position.y) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

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
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      scene.clear();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isIronManMode]);

  return (
    <div className={`relative ${className} select-none group flex flex-col items-center justify-center`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Exploded View Toggle Button */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => {
            playTargetLock();
            setExploded(!exploded);
          }}
          className={`px-3 py-1.5 text-xs font-tech tracking-wider uppercase rounded border backdrop-blur-md transition-all ${
            exploded
              ? isIronManMode
                ? 'bg-iron-red text-white border-iron-gold shadow-arc-red'
                : 'bg-stark-blue text-black border-cyan-400 shadow-arc-cyan'
              : 'bg-black/60 text-slate-300 border-white/20 hover:border-current'
          }`}
        >
          {exploded ? "■ Reassemble Armor" : "☷ Exploded Schematic"}
        </button>
      </div>

      {/* Telemetry Hotspots */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 justify-center">
        {telemetryNodes.map((node) => (
          <button
            key={node.id}
            onClick={() => {
              playHudBeep(1600);
              setSelectedNode(selectedNode?.id === node.id ? null : node);
            }}
            className={`px-2.5 py-1 text-[11px] font-tech tracking-wider rounded border transition-all ${
              selectedNode?.id === node.id
                ? isIronManMode
                  ? 'bg-iron-red/80 text-white border-iron-gold'
                  : 'bg-stark-blue/80 text-black border-cyan-300'
                : 'bg-black/50 text-slate-300 border-white/10 hover:border-current'
            }`}
          >
            ● {node.label.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Selected Node Tooltip */}
      {selectedNode && (
        <div className={`absolute top-16 left-4 right-4 md:left-auto md:right-4 md:w-80 p-3 rounded border backdrop-blur-lg z-30 transition-all ${
          isIronManMode
            ? 'bg-black/85 border-iron-red text-rose-100 shadow-arc-red'
            : 'bg-black/85 border-stark-blue text-cyan-100 shadow-arc-cyan'
        }`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-orbitron font-bold text-white uppercase">{selectedNode.label}</span>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs text-muted-foreground hover:text-white px-1"
            >
              ✕
            </button>
          </div>
          <p className="text-xs font-tech leading-relaxed text-slate-300">{selectedNode.detail}</p>
        </div>
      )}

      {/* Footer hint */}
      <div className="absolute bottom-1 text-[10px] font-tech text-slate-500 uppercase tracking-widest pointer-events-none">
        [ Territory Studio // Holographic Wireframe Telemetry ]
      </div>
    </div>
  );
}
