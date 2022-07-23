import { GUI } from "dat.gui"
import { makeWorld } from "./world.js"
import { makeCube } from "./cube.js"

const gui = new GUI()
const world = makeWorld(document.body)
const cube = makeCube()

world.add(cube)

gui.add(cube.scale, "x").min(0.01).max(4)
gui.add(cube.scale, "y").min(0.01).max(4)
gui.add(cube.scale, "z").min(0.01).max(4)

window.onresize = () => world.resize(window.innerWidth, window.innerHeight)

world.start(window.innerWidth, window.innerHeight)
