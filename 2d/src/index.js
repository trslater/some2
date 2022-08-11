import { GUI } from "dat.gui"
import { makeWorld } from "./world.js"
import { makeCube } from "./cube.js"
import { makeAxes } from "./axes.js"

const gui = new GUI()
const world = makeWorld(document.body)
const cube = makeCube()
const axes = makeAxes(10)

world.add(axes)
world.add(cube)

gui.add(cube.scale, "x").min(0.01).max(4)
gui.add(cube.scale, "y").min(0.01).max(4)

window.onresize = () => world.resize(window.innerWidth, window.innerHeight)

world.start(window.innerWidth, window.innerHeight)
