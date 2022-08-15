import { Scene, WebGLRenderer } from 'three'


const makeEnvironment = viewport => {
    const scene = new Scene()
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true
    })

    const add = obj => {
        scene.add(obj)
    }

    const start = (width, height) => {
        resize(width, height)
        viewport.appendChild(renderer.domElement)
        animate()
    }

    const animate = () => {
        controls.update()
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    
    const resize = (width, height) => {
        renderer.setSize(width, height)
    }
    
    return { add, start, resize }
}

export { makeEnvironment }
