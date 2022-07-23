import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

const makeCube = () => {
    const geometry = new BoxGeometry(2, 2, 2)
    const material = new MeshPhongMaterial({
        color: 0x888888,
        shininess: 100
    })
    const mesh = new Mesh(geometry, material)
    
    return mesh
}

export { makeCube }
