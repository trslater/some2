import { GridHelper, Group, MeshBasicMaterial, Mesh, ShapeGeometry } from "three";

const makeAxes = size => {
    const axes = new Group()

    const xyGrid = new GridHelper(size, size)
    const xzGrid = new GridHelper(size, size)
    const yzGrid = new GridHelper(size, size)

    // const xLabels = [...Array(1).keys()].map(async i => {
    // })

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

export { makeAxes }
