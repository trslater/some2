import { GUI } from "dat.gui"
import { makeWorld } from "./world.js"
import { makePlane } from "./plane.js"
import { makeAxes } from "./axes.js"

const gui = new GUI()
const world = makeWorld(document.body)
const plane1 = makePlane(0x88FF88)
const plane2 = makePlane(0xFF8888)
const plane3 = makePlane(0x8888FF)
const axes = makeAxes(10)

world.add(plane1)
world.add(plane2)
world.add(plane3)
world.add(axes)

const plane1Folder = gui.addFolder("Plane 1")
const plane2Folder = gui.addFolder("Plane 2")
const plane3Folder = gui.addFolder("Plane 3")

plane1Folder.add(plane1.rotation, "x").min(0).max(2*Math.PI)
plane1Folder.add(plane1.rotation, "y").min(0).max(2*Math.PI)
plane1Folder.add(plane1.rotation, "z").min(0).max(2*Math.PI)

plane2Folder.add(plane2.rotation, "x").min(0).max(2*Math.PI)
plane2Folder.add(plane2.rotation, "y").min(0).max(2*Math.PI)
plane2Folder.add(plane2.rotation, "z").min(0).max(2*Math.PI)

plane3Folder.add(plane3.rotation, "x").min(0).max(2*Math.PI)
plane3Folder.add(plane3.rotation, "y").min(0).max(2*Math.PI)
plane3Folder.add(plane3.rotation, "z").min(0).max(2*Math.PI)

window.onresize = () => world.resize(window.innerWidth, window.innerHeight)

world.start(window.innerWidth, window.innerHeight)
