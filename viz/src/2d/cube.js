import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const makeCube = () => {
    const geometry = new BoxGeometry(2, 2, 2)
    const material = new MeshBasicMaterial({ color: 0x22cc88 })
    const mesh = new Mesh(geometry, material)
    
    return mesh
}

export { makeCube }
