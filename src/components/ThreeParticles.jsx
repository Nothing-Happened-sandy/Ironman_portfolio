import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useStarkMode } from '../context/StarkModeContext';

export default function ThreeParticles() {
  const mountRef = useRef(null);
  const { isIronManMode, suitOverdrive } = useStarkMode();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(isIronManMode ? '#e62429' : '#00f0ff');
    const color2 = new THREE.Color(isIronManMode ? '#ffd700' : '#38bdf8');
    const color3 = new THREE.Color(isIronManMode ? '#ff7700' : '#ffffff');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

      velocities[i * 3] = (Math.random() - 0.5) * 0.4;
      velocities[i * 3 + 1] = isIronManMode ? Math.random() * 0.9 + 0.2 : (Math.random() - 0.5) * 0.3;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      const mixed = Math.random();
      const col = mixed < 0.5 ? color1 : (mixed < 0.8 ? color2 : color3);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isIronManMode ? 3.5 : 2.5,
      vertexColors: true,
      transparent: true,
      opacity: isIronManMode ? 0.75 : 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.08;
      mouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth camera sway
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (-mouseY - camera.position.y) * 0.04;

      const pos = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around boundaries
        if (pos[i * 3 + 1] > 600) pos[i * 3 + 1] = -600;
        if (pos[i * 3 + 1] < -600) pos[i * 3 + 1] = 600;
        if (pos[i * 3] > 600) pos[i * 3] = -600;
        if (pos[i * 3] < -600) pos[i * 3] = 600;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Rotate whole field gently
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      scene.clear();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isIronManMode, suitOverdrive]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
    />
  );
}
