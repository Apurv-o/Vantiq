import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface IntelligenceCoreSceneProps {
  onLoaded?: () => void;
}

const checkWebGLSupported = (): boolean => {
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
};

export const IntelligenceCoreScene: React.FC<IntelligenceCoreSceneProps> = ({ onLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL] = useState<boolean>(() => checkWebGLSupported());

  useEffect(() => {
    if (!hasWebGL) return;

    const container = containerRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x20211E, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Intelligence Core Main Group
    const coreGroup = new THREE.Group();
    // Position slightly towards right on desktop for balance against left typography
    const isDesktop = window.innerWidth > 900;
    coreGroup.position.set(isDesktop ? 1.6 : 0, 0, 0);
    scene.add(coreGroup);

    // 1. Central Metallic Polyhedron (The Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b2c28,
      roughness: 0.25,
      metalness: 0.9,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // 2. Translucent Glass Cage (Outer Polyhedron)
    const cageGeometry = new THREE.IcosahedronGeometry(1.9, 1);
    const cageMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF4F0E8,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    coreGroup.add(cageMesh);

    // 3. Subtle Glowing Orange Pathways (Neural Pathway Rings)
    const ringGroup = new THREE.Group();
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xE66C3A,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.015, 8, 48), ringMaterial);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.012, 8, 48), ringMaterial);
    ring2.rotation.x = Math.PI / 3;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.01, 8, 48), ringMaterial);
    ring3.rotation.y = Math.PI / 4;

    ringGroup.add(ring1, ring2, ring3);
    coreGroup.add(ringGroup);

    // 4. Interconnected Geometric Nodes (Orbital satellites)
    const nodeGeometry = new THREE.OctahedronGeometry(0.12, 0);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xE66C3A,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xE66C3A,
      emissiveIntensity: 0.4,
    });

    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const nodesCount = isMobile ? 6 : isTablet ? 9 : 14;
    const nodes: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; tilt: number }[] = [];
    const nodeLinesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(nodesCount * 6); // 2 vertices per connection (center to node)
    nodeLinesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xE66C3A,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const connectionLines = new THREE.LineSegments(nodeLinesGeometry, lineMaterial);
    coreGroup.add(connectionLines);

    for (let i = 0; i < nodesCount; i++) {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const orbitRadius = 1.8 + Math.random() * 0.9;
      const speed = (0.2 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1);
      const angle = (i / nodesCount) * Math.PI * 2;
      const tilt = (Math.random() - 0.5) * Math.PI;

      mesh.position.set(
        Math.cos(angle) * orbitRadius,
        Math.sin(tilt) * (orbitRadius * 0.5),
        Math.sin(angle) * orbitRadius
      );
      coreGroup.add(mesh);
      nodes.push({ mesh, orbitRadius, speed, angle, tilt });
    }

    // 5. Floating Particles (Field - scaled down on mobile/tablet)
    const particleCount = isMobile ? 80 : isTablet ? 140 : 280;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const ivoryColor = new THREE.Color(0xF4F0E8);
    const orangeColor = new THREE.Color(0xE66C3A);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 14;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 8;

      const mixedColor = Math.random() > 0.35 ? ivoryColor : orangeColor;
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // 6. Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0xF4F0E8, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xF4F0E8, 1.8);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const accentLight = new THREE.PointLight(0xE66C3A, 3.5, 12, 1.8);
    accentLight.position.set(0, 0, 0); // Inner core pointlight
    coreGroup.add(accentLight);

    const rimLight = new THREE.DirectionalLight(0xE66C3A, 1.2);
    rimLight.position.set(-5, -3, -2);
    scene.add(rimLight);

    // Mouse Parallax & Scroll response variables
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Responsive resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const desktop = window.innerWidth > 900;
      coreGroup.position.x = desktop ? 1.6 : 0;
      coreGroup.position.y = desktop ? 0 : -0.4;
      coreGroup.scale.setScalar(desktop ? 1 : 0.82);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Smooth entrance timer
    let entranceAlpha = 0;
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Entrance animation smoothly elevating scale & opacity
      if (entranceAlpha < 1) {
        entranceAlpha = Math.min(1, entranceAlpha + delta * 1.2);
        coreGroup.scale.setScalar((isDesktop ? 1 : 0.82) * entranceAlpha);
      }

      // Parallax easing
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreMesh.rotation.y += delta * 0.22;
        coreMesh.rotation.x += delta * 0.12;

        cageMesh.rotation.y -= delta * 0.16;
        cageMesh.rotation.z += delta * 0.09;

        ringGroup.rotation.x += delta * 0.1;
        ringGroup.rotation.y += delta * 0.15;

        // Animate satellite nodes along orbital paths
        const posAttr = nodeLinesGeometry.getAttribute('position') as THREE.BufferAttribute;
        const positions = posAttr.array as Float32Array;

        nodes.forEach((node, idx) => {
          node.angle += delta * node.speed;
          const nx = Math.cos(node.angle) * node.orbitRadius;
          const ny = Math.sin(node.angle * 1.5 + node.tilt) * (node.orbitRadius * 0.45);
          const nz = Math.sin(node.angle) * node.orbitRadius;

          node.mesh.position.set(nx, ny, nz);
          node.mesh.rotation.y += delta * 0.5;

          // Update connection line coordinates
          const i6 = idx * 6;
          positions[i6] = 0;
          positions[i6 + 1] = 0;
          positions[i6 + 2] = 0;
          positions[i6 + 3] = nx;
          positions[i6 + 4] = ny;
          positions[i6 + 5] = nz;
        });
        posAttr.needsUpdate = true;

        // Particle field slow drift
        particleField.rotation.y = time * 0.025;
        particleField.rotation.x = time * 0.01;

        // Gentle camera parallax response
        camera.position.x = currentMouse.x * 0.45;
        camera.position.y = currentMouse.y * 0.35 - (scrollY * 0.0018);
        camera.lookAt(coreGroup.position.x * 0.4, coreGroup.position.y, 0);

        // Core responsive reaction to scroll
        coreGroup.rotation.y = scrollY * 0.0015;
      }

      renderer.render(scene, camera);
    };

    animate();
    onLoaded?.();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ringMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeLinesGeometry.dispose();
      lineMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [hasWebGL, onLoaded]);

  if (!hasWebGL) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 75% 50%, rgba(230, 108, 58, 0.12), transparent 70%)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '10%',
          overflow: 'hidden',
        }}
      >
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" opacity="0.35">
          <circle cx="170" cy="170" r="150" stroke="#F4F0E8" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="170" cy="170" r="100" stroke="#E66C3A" strokeWidth="1.5" />
          <polygon points="170,50 270,230 70,230" stroke="#F4F0E8" strokeWidth="1" fill="none" />
          <circle cx="170" cy="170" r="6" fill="#E66C3A" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    />
  );
};
