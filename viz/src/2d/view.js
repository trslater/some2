import { OrthographicCamera, MOUSE } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const pad = 0.1


const make2DView = viewport => {
    const canvas = document.createElement("canvas")
    const camera = new OrthographicCamera()
    const controls = new OrbitControls(camera, canvas)

    viewport.appendChild(canvas)
    
    controls.enableRotate = false
    controls.mouseButtons = {
        LEFT: MOUSE.PAN,
        MIDDLE: MOUSE.DOLLY,
    }

    const update = () => {
        controls.update()
    }
    
    const resize = () => {
        const width = viewport.offsetWidth
        const height = viewport.offsetHeight
        
        const bottom = 10*(1 + pad)/2
        const aspect = width/height
        
        camera.top = -bottom
        camera.bottom = bottom
        camera.left = -bottom*aspect
        camera.right = bottom*aspect
        camera.updateProjectionMatrix()

        return [width, height]
    }

    return { canvas, camera, update, resize }
}

export { make2DView }
