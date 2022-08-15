import { PerspectiveCamera } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const fov = 45
const initCameraDistance = 15

const make3DView = viewport => {
    const canvas = document.createElement("canvas")
    const camera = new PerspectiveCamera(fov)
    const controls = new OrbitControls(camera, canvas)

    viewport.appendChild(canvas)

    camera.position.set(initCameraDistance, initCameraDistance, initCameraDistance)
    
    const update = () => {
        controls.update()
    }
    
    const resize = () => {
        const width = viewport.offsetWidth
        const height = viewport.offsetHeight

        camera.aspect = width/height
        camera.updateProjectionMatrix()

        return [width, height]
    }

    return { canvas, camera, update, resize }
}

export { make3DView }
