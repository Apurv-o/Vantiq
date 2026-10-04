import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const EvolvingSculptureCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x20211E, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Atmospheric Key & Rim Lighting
    const ambientLight = new THREE.AmbientLight(0xF4F0E8, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xF4F0E8, 2.2);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0xE66C3A, 3.2, 10, 1.6);
    pointLight.position.set(-2, -1, 2);
    scene.add(pointLight);

    // Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Core Morphing Torus Knot Geometry
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.38, 128, 32, 2, 3);
    const torusKnotMat = new THREE.MeshStandardMaterial({
      color: 0x272824,
      roughness: 0.22,
      metalness: 0.85,
    });
    const torusMesh = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    sculptureGroup.add(torusMesh);

    // 2. Translucent Kinetic Wireframe Shell
    const shellGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0xF4F0E8,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.88,
      ior: 1.4,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    sculptureGroup.add(shellMesh);

    // 3. Orbital Filament Rings (Glowing Accent)
    const ringGeo = new THREE.TorusGeometry(2.6, 0.015, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xE66C3A,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 2.5;
    sculptureGroup.add(ring1, ring2);

    // 4. Subtle Floating Additive Particle Field
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xE66C3A,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Continuous Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Slow majestic multi-axis organic rotation
      torusMesh.rotation.x += delta * 0.12;
      torusMesh.rotation.y += delta * 0.18;

      shellMesh.rotation.y -= delta * 0.09;
      shellMesh.rotation.z += delta * 0.06;

      ring1.rotation.z += delta * 0.14;
      ring2.rotation.y += delta * 0.11;

      // Gentle floating breathing oscillation
      sculptureGroup.position.y = Math.sin(time * 0.8) * 0.12;
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);

      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  const [webGLAvailable] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  });

  if (!webGLAvailable) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: '100%',
          height: '420px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#181916',
          border: '1px solid var(--color-border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(230, 108, 58, 0.12), transparent 70%)',
        }}
      >
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" opacity="0.45">
          <circle cx="110" cy="110" r="90" stroke="#F4F0E8" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="110" cy="110" r="60" stroke="#E66C3A" strokeWidth="1.5" />
          <rect x="75" y="75" width="70" height="70" stroke="#F4F0E8" strokeWidth="1" transform="rotate(45 110 110)" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        width: '100%',
        height: '420px',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-subtle)',
        backgroundColor: '#181916',
      }}
    />
  );
};
