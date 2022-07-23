import { Scene, PerspectiveCamera, WebGLRenderer, PointLight } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const lightDistance = 10
const fov = 45
const physicallyCorrectLights = true
const initCameraDistance = 10

const makeWorld = (root) => {
    const scene = new Scene()
    const lights = [...Array(4).keys()].map(
        // Evenly space hues
        i => new PointLight(`hsl(${i*360/4}, 100%, 70%)`, 50))
    const camera = new PerspectiveCamera(fov)
    const renderer = new WebGLRenderer()
    const controls = new OrbitControls(camera, renderer.domElement)

    // Position in a tetrahedral pattern
    lights.forEach((light, i) => {
        light.position.set(
            Math.pow(-1, i)*lightDistance,
            Math.pow(-1, ((i + 1) >> 1))*lightDistance,
            Math.pow(-1, i >> 1)*lightDistance
        )
        scene.add(light)
    })

    camera.position.z = initCameraDistance

    renderer.physicallyCorrectLights = physicallyCorrectLights
    
    const animate = () => {
        controls.update()
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    
    const start = (width, height) => {
        resize(width, height)
        root.appendChild(renderer.domElement)
        animate()
    }
    
    const add = mesh => {
        scene.add(mesh)
    }

    const resize = (width, height) => {
        camera.aspect = width/height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
    }

    return { start, add, resize }
}

export { makeWorld }
