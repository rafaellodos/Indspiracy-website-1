"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    containerRef.current.appendChild(renderer.domElement)

    // Create wave net geometry
    const geometry = new THREE.PlaneGeometry(60, 60, 40, 40)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = Math.PI / 3
    scene.add(mesh)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Update vertices to create wave effect
      const positions = geometry.attributes.position.array
      const time = Date.now() * 0.0005

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const distance = Math.sqrt(x * x + y * y)

        positions[i + 2] = Math.sin(distance * 0.5 + time) * 2
      }

      geometry.attributes.position.needsUpdate = true

      // Slowly rotate the mesh
      mesh.rotation.z += 0.001

      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0" />
}

