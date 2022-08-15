import { Group, MeshBasicMaterial, Mesh, ShapeGeometry, DoubleSide } from "three";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const loadSvg = async url => {
    const svg = new Group()
    
    const svgLoader = new SVGLoader()

    const svgLoaded = new Promise((resolve, reject) => {
        svgLoader.load(url, data => resolve(data.paths))
    })
    
    const paths = await svgLoaded
    const shapeSets = paths.map(path => SVGLoader.createShapes(path))
    
    shapeSets.forEach(shapeSet => {
        shapeSet.forEach(shape => {
            const geometry = new ShapeGeometry(shape)
            const material = new MeshBasicMaterial({
                color: 0xffffff,
                side: DoubleSide
            })
            const mesh = new Mesh(geometry, material)
            
            svg.add(mesh)
        })
    })

    return svg
}

export { loadSvg }
