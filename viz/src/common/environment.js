import { Scene, WebGLRenderer } from 'three'


const makeEnvironment = view => {
    const scene = new Scene()
    const renderer = new WebGLRenderer({
        canvas: view.canvas,
        antialias: true,
        alpha: true
    })

    const add = obj => {
        scene.add(obj)
    }

    const start = () => {
        resize()
        animate()
    }

    const animate = () => {
        view.update()
        requestAnimationFrame(animate)
        renderer.render(scene, view.camera)
    }
    
    const resize = () => {
        const [width, height] = view.resize()
        renderer.setSize(width, height)
    }
    
    return { add, start, resize }
}

export { makeEnvironment }
