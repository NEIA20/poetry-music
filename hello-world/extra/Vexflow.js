


// const ipa = require('.');



// function handleFileSelect(evt) {
//     const files = evt.target.files; 
//      const file = evt.target.files[0];
   
//         const reader = new FileReader();
//         reader.onload = (evt) => {
//           if (evt.target.readyState == FileReader.DONE) { 
//         document.getElementById('poem').textContent = evt.target.result;
//             poemContents = evt.target.result;  
//             console.log("SETJUST FINE", poemContents.indexOf("\n"));
//         }
//           // The file's text will be printed here
         
         
//         };

//         reader.readAsText(file);
//   }

//   document.getElementById('files').addEventListener('change', handleFileSelect, false);

 console.log("!HERE!!!!1", window.poemContents)


// const str1 = 'If you can keep your head when all about you' 
// const str2 = 'Are losing theirs and blaming it on you'   

// var poem = document.getElementById("content").textContent;

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


