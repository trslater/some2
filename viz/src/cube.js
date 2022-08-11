import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";

const makeCube = () => {
    const geometry = new BoxGeometry(2, 2, 2)
    const material = new MeshLambertMaterial({
        color: 0x888888,
        shininess: 100
    })
    const mesh = new Mesh(geometry, material)
    
    return mesh
}

export { makeCube }
