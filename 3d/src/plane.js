import { PlaneGeometry, Mesh, MeshLambertMaterial, DoubleSide } from "three";

const makePlane = color => {
    const geometry = new PlaneGeometry(4, 4)
    const material = new MeshLambertMaterial({ color: color })
    const mesh = new Mesh(geometry, material)

    material.side = DoubleSide
    material.transparent = true
    material.opacity = 0.5
    
    return mesh
}

export { makePlane }
