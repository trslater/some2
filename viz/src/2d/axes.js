import { GridHelper, Group } from "three";

const make2DAxes = size => {
    const axes = new Group()

    const grid = new GridHelper(size, size, 0, 0)

    grid.rotation.x += Math.PI/2    // Rotate to lie on x-y plane
    grid.position.z -= size/2       // Position with center at (0, 0, 0)

    grid.material.transparent = true
    grid.material.opacity = 0.25

    axes.add(grid)

    return axes
}

export { make2DAxes }
