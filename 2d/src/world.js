import { Scene, OrthographicCamera, WebGLRenderer, PointLight, MOUSE } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const lightDistance = 10
const physicallyCorrectLights = true
const pad = 0.1

const makeWorld = (root) => {
    const scene = new Scene()
    const camera = new OrthographicCamera()
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
    })
    const controls = new OrbitControls(camera, renderer.domElement)

    renderer.physicallyCorrectLights = physicallyCorrectLights
    
    controls.enableRotate = false
    controls.mouseButtons = {
        LEFT: MOUSE.PAN,
        MIDDLE: MOUSE.DOLLY,
    }

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
        const bottom = 10*(1 + pad)/2
        const aspect = width/height
        
        camera.top = -bottom
        camera.bottom = bottom
        camera.left = -bottom*aspect
        camera.right = bottom*aspect
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
    }

    return { start, add, resize }
}

export { makeWorld }
