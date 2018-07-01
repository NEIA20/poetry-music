var VF = Vex.Flow;

var div = document.getElementById("boo")
console.log("DIV", div);
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)
console.log("RENDERER", renderer)
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed")


var stave = new VF.Stave(10, 40, 400)

stave.addClef("treble").addTimeSignature("4/4")
stave.setContext(context).draw()


