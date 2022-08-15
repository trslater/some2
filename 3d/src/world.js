import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, AmbientLight } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const lightDistance = 10
const fov = 45
const physicallyCorrectLights = true
const initCameraDistance = 15

const makeWorld = (root) => {
    const scene = new Scene()
    const light = new PointLight(0xffffff, 3)
    const ambientLight = new AmbientLight(0xffffff, 1)
    const camera = new PerspectiveCamera(fov)
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
    })
    const controls = new OrbitControls(camera, renderer.domElement)

    light.position.set(8, 10, 5)
    
    camera.position.set(initCameraDistance, initCameraDistance, initCameraDistance)
    
    renderer.physicallyCorrectLights = physicallyCorrectLights
    
    scene.add(light)
    scene.add(ambientLight)
    
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
