import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SystemLayer3D {
  id: string;
  label: string;
  yPos: number;
}

interface ArchitectureCanvasProps {
  layers: SystemLayer3D[];
  selectedIndex: number;
  onSelectLayer: (index: number) => void;
}

export const ArchitectureCanvas: React.FC<ArchitectureCanvasProps> = ({
  layers,
  selectedIndex,
  onSelectLayer,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const selectedIndexRef = useRef(selectedIndex);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

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
    scene.fog = new THREE.FogExp2(0x20211E, 0.04);

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(4.5, 2, 7.5);

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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xF4F0E8, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xF4F0E8, 1.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const accentLight = new THREE.PointLight(0xE66C3A, 2.5, 10, 1.5);
    scene.add(accentLight);

    // Architectural Slab Monoliths (Layers)
    const slabGroup = new THREE.Group();
    scene.add(slabGroup);

    const slabMeshes: THREE.Mesh[] = [];
    const slabBeacons: THREE.Mesh[] = [];

    const slabGeo = new THREE.BoxGeometry(3.6, 0.22, 2.2);
    const wireGeo = new THREE.EdgesGeometry(slabGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xF4F0E8,
      transparent: true,
      opacity: 0.15,
    });

    layers.forEach((layer, idx) => {
      // Slab material
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x272824,
        roughness: 0.35,
        metalness: 0.6,
      });

      const mesh = new THREE.Mesh(slabGeo, slabMat);
      mesh.position.set(0, layer.yPos, 0);
      mesh.userData = { index: idx };
      slabGroup.add(mesh);
      slabMeshes.push(mesh);

      // Edge accent line wireframe
      const wire = new THREE.LineSegments(wireGeo, wireMat);
      mesh.add(wire);

      // Beacon status dot on corner
      const beaconGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: idx === selectedIndexRef.current ? 0xE66C3A : 0x85877E,
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(1.6, 0.18, 0.9);
      mesh.add(beacon);
      slabBeacons.push(beacon);
    });

    // Connecting Data Conduit Pillars
    const conduitGeo = new THREE.CylinderGeometry(0.02, 0.02, 9, 8);
    const conduitMat = new THREE.MeshBasicMaterial({
      color: 0xE66C3A,
      transparent: true,
      opacity: 0.3,
    });
    const c1 = new THREE.Mesh(conduitGeo, conduitMat);
    c1.position.set(-1.4, 0, -0.8);
    const c2 = new THREE.Mesh(conduitGeo, conduitMat);
    c2.position.set(1.4, 0, -0.8);
    slabGroup.add(c1, c2);

    // Flowing Energy Packet Rings
    const ringGeo = new THREE.TorusGeometry(0.08, 0.015, 6, 16);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xE66C3A });
    const packetRings: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      packetRings.push(ring);
      scene.add(ring);
    }

    // Raycaster for clicking slabs directly in 3D
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(slabMeshes);

      if (intersects.length > 0) {
        const clickedIndex = intersects[0].object.userData.index;
        if (typeof clickedIndex === 'number') {
          onSelectLayer(clickedIndex);
        }
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const targetCameraY = { current: 2 };
    const targetCameraLookY = { current: 0 };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Dynamic Camera transition tracking current selected layer
      const activeLayerY = layers[selectedIndexRef.current]?.yPos ?? 0;
      targetCameraY.current += (activeLayerY + 1.2 - targetCameraY.current) * 0.06;
      targetCameraLookY.current += (activeLayerY - targetCameraLookY.current) * 0.06;

      camera.position.y = targetCameraY.current;
      camera.position.x = 4.2 + Math.sin(time * 0.2) * 0.3;
      camera.position.z = 6.8 + Math.cos(time * 0.2) * 0.3;
      camera.lookAt(0, targetCameraLookY.current, 0);

      accentLight.position.set(0, activeLayerY + 0.6, 1.2);

      // Update slab highlights
      slabMeshes.forEach((mesh, idx) => {
        const isSelected = idx === selectedIndexRef.current;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.color.setHex(isSelected ? 0x363832 : 0x222320);
        mat.roughness = isSelected ? 0.2 : 0.45;

        // Subtle levitation offset on selected layer
        const targetElevation = isSelected ? 0.08 : 0;
        mesh.position.x += ((isSelected ? 0.3 : 0) - mesh.position.x) * 0.1;

        if (slabBeacons[idx]) {
          const beaconMat = slabBeacons[idx].material as THREE.MeshBasicMaterial;
          beaconMat.color.setHex(isSelected ? 0xE66C3A : 0x595B53);
          slabBeacons[idx].position.y = 0.18 + targetElevation;
        }
      });

      // Flowing packets along vertical conduits
      packetRings.forEach((ring, idx) => {
        const speed = 1.6;
        const offset = idx * 2.2;
        const y = 4.2 - ((time * speed + offset) % 8.4);
        ring.position.set(idx % 2 === 0 ? -1.4 : 1.4, y, -0.8);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);

      slabGeo.dispose();
      wireGeo.dispose();
      conduitGeo.dispose();
      ringGeo.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [layers, onSelectLayer]);

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
        style={{
          width: '100%',
          height: '480px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#181916',
          border: '1px solid var(--color-border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
          SYSTEM TOPOLOGY STACK // STATIC FALLBACK
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {layers.map((l, i) => (
            <div
              key={l.id}
              onClick={() => onSelectLayer(i)}
              style={{
                padding: '8px 12px',
                backgroundColor: i === selectedIndex ? 'var(--color-accent-subtle)' : 'var(--color-bg-card)',
                border: '1px solid',
                borderColor: i === selectedIndex ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: i === selectedIndex ? 'var(--color-accent-primary)' : 'var(--color-fg-primary)',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span>0{i + 1} // {l.label}</span>
              <span>{i === selectedIndex ? 'ACTIVE' : 'READY'}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-dim)' }}>
          CLICK ANY STRATUM ABOVE TO INSPECT
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '480px',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-subtle)',
        backgroundColor: '#181916',
      }}
    />
  );
};
