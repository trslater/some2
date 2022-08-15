import { GridHelper, Group, MeshBasicMaterial, Mesh, ShapeGeometry } from "three";

const make3DAxes = size => {
    const axes = new Group()

    const xyGrid = new GridHelper(size, size, 0x000000, 0x000000)
    const xzGrid = new GridHelper(size, size, 0x000000, 0x000000)
    const yzGrid = new GridHelper(size, size, 0x000000, 0x000000)

    // const xLabels = [...Array(1).keys()].map(async i => {
    // })

    xyGrid.material.transparent = true
    xyGrid.material.opacity = 0.25
    xzGrid.material.transparent = true
    xzGrid.material.opacity = 0.25
    yzGrid.material.transparent = true
    yzGrid.material.opacity = 0.25

    xyGrid.rotation.x += Math.PI/2
    xyGrid.position.z -= size/2

    xzGrid.position.y -= size/2

    yzGrid.rotation.z += Math.PI/2
    yzGrid.position.x -= size/2

    // xLabels.forEach((label, i) => {
    //     label.position.x = i
    // })

    axes.add(xyGrid)
    axes.add(xzGrid)
    axes.add(yzGrid)
    // xLabels.forEach(label => { axes.add(label) })

    return axes
}

export { make3DAxes }
