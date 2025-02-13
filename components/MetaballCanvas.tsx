"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders";

const NUM_BLOBS = 16;

const Metaballs = () => {
  useEffect(() => {
    console.log("Metaballs mounted");
    return () => {
      console.log("Metaballs unmounted");
    };
  }, []);
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const [resolution, setResolution] = useState(
    new THREE.Vector2(window.innerWidth, window.innerHeight)
  );

  // **Blobs with controlled speed, less curvy motion**
  const blobs = useRef(
    Array.from({ length: NUM_BLOBS }, () => {
      const aspect = window.innerWidth / window.innerHeight;
      return {
        position: new THREE.Vector2(
          (Math.random() * 2 - 1) * aspect * 1.2, // Spread out
          (Math.random() * 2 - 1) * 1.2
        ),
        velocity: new THREE.Vector2(
          (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.002 + 0.0005),
          (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.002 + 0.0005)
        ),
        drift: Math.random() * 0.002,
        radius: Math.random() * 0.02 + 0.065,
      };
    })
  );

  useEffect(() => {
    const handleResize = () => {
      const newResolution = new THREE.Vector2(
        window.innerWidth,
        window.innerHeight
      );
      setResolution(newResolution);

      if (shaderRef.current) {
        shaderRef.current.uniforms.u_resolution.value.set(
          newResolution.x,
          newResolution.y
        );
      }

      const newAspect = newResolution.x / newResolution.y;
      const oldAspect = resolution.x / resolution.y;

      blobs.current.forEach((blob) => {
        blob.position.x *= newAspect / oldAspect;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resolution]);

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.u_time.value = state.clock.getElapsedTime();

      // Update metaball positions and handle collisions
      blobs.current.forEach((blob, i) => {
        blob.position.add(blob.velocity);

        // **Smoother, less curvy drift**
        blob.position.x +=
          Math.sin(state.clock.elapsedTime * 0.2 + i) * blob.drift;
        blob.position.y +=
          Math.cos(state.clock.elapsedTime * 0.2 + i) * blob.drift;

        // **Bounce off walls (DVD effect)**
        const aspect = window.innerWidth / window.innerHeight;
        if (blob.position.x > aspect || blob.position.x < -aspect) {
          blob.velocity.x *= -1;
          blob.position.x = Math.max(
            -aspect,
            Math.min(aspect, blob.position.x)
          );
        }
        if (blob.position.y > 1 || blob.position.y < -1) {
          blob.velocity.y *= -1;
          blob.position.y = Math.max(-1, Math.min(1, blob.position.y));
        }

        // **Bounce off other metaballs**
        for (let j = i + 1; j < blobs.current.length; j++) {
          const otherBlob = blobs.current[j];
          const dx = otherBlob.position.x - blob.position.x;
          const dy = otherBlob.position.y - blob.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = blob.radius + otherBlob.radius;

          if (dist < minDist) {
            // Collision detected - bounce the metaballs
            const angle = Math.atan2(dy, dx);

            // Calculate overlap
            const overlap = minDist - dist;

            // Move metaballs apart based on overlap
            const moveX = (overlap / 2) * Math.cos(angle);
            const moveY = (overlap / 2) * Math.sin(angle);

            blob.position.x -= moveX;
            blob.position.y -= moveY;
            otherBlob.position.x += moveX;
            otherBlob.position.y += moveY;

            // Calculate new velocities (elastic collision)
            const v1 = new THREE.Vector2(blob.velocity.x, blob.velocity.y);
            const v2 = new THREE.Vector2(
              otherBlob.velocity.x,
              otherBlob.velocity.y
            );
            const n = new THREE.Vector2(dx, dy).normalize(); // Normal vector

            // Relative velocity
            const vRel = v1.clone().sub(v2);

            // Velocity along the normal
            const vn = vRel.dot(n);

            // Only bounce if moving towards each other
            if (vn < 0) {
              const impulse =
                (-2.0 * vn) / (1 / blob.radius + 1 / otherBlob.radius);

              // Apply impulse
              blob.velocity.add(
                n.clone().multiplyScalar(impulse / blob.radius)
              );
              otherBlob.velocity.sub(
                n.clone().multiplyScalar(impulse / otherBlob.radius)
              );
            }
          }
        }
      });

      // Pass updated metaball positions and radii to the shader
      const blobPositions = blobs.current.flatMap((b) => [
        b.position.x,
        b.position.y,
      ]);
      const blobRadii = blobs.current.map((b) => b.radius);

      shaderRef.current.uniforms.u_blobs.value.set(
        new Float32Array(blobPositions)
      );
      shaderRef.current.uniforms.u_radius.value.set(
        new Float32Array(blobRadii)
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={shaderRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          u_resolution: { value: resolution },
          u_blobs: { value: new Float32Array(NUM_BLOBS * 2) },
          u_radius: { value: new Float32Array(Array(NUM_BLOBS).fill(0.065)) },
          u_time: { value: 0.0 },
        }}
      />
    </mesh>
  );
};

const MetaballsCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Metaballs />
    </Canvas>
  );
};

export default MetaballsCanvas;
