


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

//  console.log("!HERE!!!!1", window.poemContents)



// const str1 = 'If you can keep your head when all about you' 
// const str2 = 'Are losing theirs and blaming it on you'   

// var poem = document.getElementById("content").textContent;

var VF = Vex.Flow;

var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)

renderer.resize(1000, 10000);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed")




//process notes below 


const ipaOfWords = [ 
    { IPA: 'ɪˈf', syllables: 1, note: 'i' },
  { IPA: 'juˈ', syllables: 1, note: 'y' },
  { IPA: 'kæˈn', syllables: 1, note: 'c' },
  { IPA: 'kiˈp', syllables: 1, note: 'k' },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y' },
  { IPA: 'hɛˈd', syllables: 1, note: 'h' },
  { IPA: 'wɛˈn', syllables: 1, note: 'w' },
  { IPA: 'ɔˈl', syllables: 1, note: 'a' },
  { IPA: 'ʌbawˈt', syllables: 2, note: 'a' },
  { IPA: undefined, syllables: 2, note: 'y' },
  { IPA: 'luˈzɪŋ', syllables: 2, note: 'l' },
  { IPA: 'ðɛˈɹz', syllables: 1, note: 't' },
  { IPA: 'ʌnd', syllables: 1, note: 'a' },
  { IPA: 'blejˈmɪŋ', syllables: 2, note: 'b' },
  { IPA: 'ɪˈt', syllables: 1, note: 'i' },
  { IPA: 'ɑˈn', syllables: 1, note: 'o' },
  { IPA: undefined, syllables: 2, note: 'y' },
  { IPA: 'juˈ', syllables: 1, note: 'y' },
  { IPA: 'kæˈn', syllables: 1, note: 'c' },
  { IPA: 'tɹʌˈst', syllables: 1, note: 't' },
  { IPA: 'jɚsɛˈlf', syllables: 2, note: 'y' },
  { IPA: 'wɛˈn', syllables: 1, note: 'w' },
  { IPA: 'ɔˈl', syllables: 1, note: 'a' },
  { IPA: 'mɛˈn', syllables: 1, note: 'm' }, //here
  { IPA: 'dawˈt', syllables: 1, note: 'd' },

  { IPA: undefined, syllables: 2, note: 'y' },
  { IPA: 'mejˈk', syllables: 1, note: 'm' },
  { IPA: 'ʌlawˈʌns', syllables: 2, note: 'a' },
  { IPA: 'fɔˈɹ', syllables: 1, note: 'f' },
  { IPA: 'ðɛˈɹ', syllables: 1, note: 't' },
  { IPA: 'dawˈtɪŋ', syllables: 2, note: 'd' }, //problem
    { IPA: 'mɛˈn', syllables: 1, note: 'm' },
  { IPA: 'dawˈt', syllables: 1, note: 'd' },
  { IPA: undefined, syllables: 2, note: 'y' },
  { IPA: 'mejˈk', syllables: 1, note: 'm' },
  { IPA: 'ʌlawˈʌns', syllables: 2, note: 'a' },
  { IPA: 'fɔˈɹ', syllables: 1, note: 'f' },
  { IPA: 'ðɛˈɹ', syllables: 1, note: 't' },
  { IPA: 'dawˈtɪŋ', syllables: 2, note: 'd' },
  { IPA: undefined, syllables: 2, note: 't' },
    { IPA: 'mɛˈn', syllables: 1, note: 'm' },
  { IPA: 'dawˈt', syllables: 1, note: 'd' },
  { IPA: undefined, syllables: 2, note: 'y' },
  { IPA: 'mejˈk', syllables: 1, note: 'm' },
  { IPA: 'ʌlawˈʌns', syllables: 2, note: 'a' },
  { IPA: 'fɔˈɹ', syllables: 1, note: 'f' },
  { IPA: 'ðɛˈɹ', syllables: 1, note: 't' },
  { IPA: 'dawˈtɪŋ', syllables: 2, note: 'd' },
  { IPA: undefined, syllables: 2, note: 't' },
  { IPA: 'juˈ', syllables: 1, note: 'y' },
  { IPA: 'kæˈn', syllables: 1, note: 'c' },
  { IPA: 'wejˈt', syllables: 1, note: 'w' },
  { IPA: 'ʌnd', syllables: 1, note: 'a' },
  { IPA: 'nɑˈt', syllables: 1, note: 'n' },
  { IPA: 'biˈ', syllables: 1, note: 'b' },
  { IPA: 'tajˈɚd', syllables: 1, note: 't' },
  { IPA: 'bajˈ', syllables: 1, note: 'b' },
  { IPA: undefined, syllables: 2, note: 'w' },
  { IPA: 'biˈɪŋ', syllables: 2, note: 'b' },
  { IPA: 'lajˈd', syllables: 1, note: 'l' },
  { IPA: undefined, syllables: 2, note: 'a' },
  { IPA: undefined, syllables: 1, note: 'd' },
  { IPA: 'diˈl', syllables: 1, note: 'd' },
  { IPA: 'ɪn', syllables: 1, note: 'i' },
  { IPA: undefined, syllables: 2, note: 'l' },
  { IPA: 'biˈɪŋ', syllables: 2, note: 'b' },
  { IPA: undefined, syllables: 2, note: 'h' },
  { IPA: undefined, syllables: 1, note: 'd' },
  { IPA: 'gɪˈv', syllables: 1, note: 'g' },
  { IPA: 'wejˈ', syllables: 1, note: 'w' },
  { IPA: 'tuˈ', syllables: 1, note: 't' },
  { IPA: undefined, syllables: 2, note: 'h' }
] 
// const ipaOfWords = [ { IPA: 'ɪˈf', syllables: 1, note: 'i' },
//   { IPA: undefined, syllables: 1, note: 'y' },
//   { IPA: 'kæˈn', syllables: 1, note: 'c' },
//   { IPA: 'kiˈp', syllables: 1, note: 'k' },
//   { IPA: 'jɔˈɹ', syllables: 1, note: 'y' },
//   { IPA: 'hɛˈd', syllables: 1, note: 'h' },
//   { IPA: 'wɛˈn', syllables: 1, note: 'w' },
//   { IPA: 'ɔˈl', syllables: 1, note: 'a' },
//   { IPA: 'ʌbawˈt', syllables: 2, note: 'a' },
//   { IPA: 'juˈ', syllables: 1, note: 'y' },
//   { IPA: 'ɑˈɹ', syllables: 1, note: 'a' }


//  ]


const notesDictionary = {
        'a': "f/3", 
        'b': "g/3",
        'c': "a/3",
        'd': "b/3",
        'e': "c/4",
        'f': "d/4",
        'g': "e/4",
        'h': "f/4",
        'i': 'g/4',
        'j': "a/4",
        'k': "b/4",
        'l': 'c/5',
        'm': 'd/5',
        'n': 'e/5',
        'o': 'f/5',
        'p': 'g/5',
        'q': 'a/5',
        'r': 'b/5',
        's': 'c/6',
        't': 'd/6',
        'u': 'e/6',
        'v': 'f/6',
        'w': 'g/6',
        'x': 'a/6',
        'y': 'b/6',
        'z': 'c/6'
}

const durationDictionary = {
    // 'w': 1,
    1: 'q', 
    2: 'q',
    3: '8',
    4: '16',
    5: '32'
}


let notePackageArray = [];
let totalDuration = 0;
let numberOfStaves = 0;
let numNotes = 0;
let notesPackage = [];

for(let i = 0; i<ipaOfWords.length; i++){
    const char = ipaOfWords[i].note;
    const musicNote = notesDictionary[char];
    const syllables = ipaOfWords[i].syllables;
    const noteDuration = durationDictionary[syllables];
    // console.log(ipaOfWords.length)
    //find number of staves needed based on the 
    //total duration of the words 


    if(numNotes < 32){
        if(noteDuration === 'h') {
            totalDuration+=16;
            numNotes+=16;}
        else if(noteDuration === 'q') {
            totalDuration +=8;
            numNotes +=8;}
        else if(noteDuration === '8') {
            totalDuration +=4;
            numNotes +=4;}
        else if(noteDuration === '16') {
            totalDuration +=2;
            numNotes +=2;}
        else if(noteDuration === '32') {
            totalDuration +=1;
            numNotes +=1;
        }

        notesPackage.push(new VF.StaveNote({keys: [musicNote], duration: 'q'}));
        
        // if(i === ipaOfWords.length - 1){
        //     let diffDuration = 32 - numNotes;
        //     while(diffDuration >0){
        //         notesPackage.push(new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }));
        //         diffDuration -= 2;
        //     }
        //     notePackageArray.push(notesPackage);
        //     notesPackage = [];
        //     numNotes = 0;
        //     console.log("NOTESPACKAGEARRAY", notePackageArray)
        //     break;
        // }
        

    }else{
        notePackageArray.push(notesPackage);
        notesPackage = [];
        numNotes = 0;
        // console.log("NOTESPACKAGEARRAY", notePackageArray)
    }
    // console.log("NOTEDURATION", noteDuration)
    // console.log("NUMNOTES", numNotes);
    console.log("NOTESPACKAGE", notesPackage)
console.log("NOTESPACKAGEARRAY", notePackageArray)
    // console.log(char.charCodeAt(0));
    // const noteCharCode = char.charCodeAt(0) + 2;
    // const musicNote = String.fromCharCode(noteCharCode);
    // console.log(char, musicNote);
    // console.log(musicNote);
    // if(numNotes === 4 ){
    //     notes.push(new Vex.Flow.BarNote());
    //     numNotes = 0;
    // }else{
    //     notes.push(new VF.StaveNote({keys: [musicNote], duration: 'q'}))
    // }
   
}

numberOfStaves = Math.ceil(totalDuration/32);

console.log("STAVES", numberOfStaves);


var notesMeasure1 = [


    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
    
    ];
let stavesArray = [];
let x = 10;
let y = 40;
for(let i = 0; i<notePackageArray.length; i++){
    // if(i === 1){
    //     stavesArray.push(new VF.Stave(x, y, 400));
    //     stavesArray[0].addClef("treble").addTimeSignature("4/4")
    //     stavesArray[0].setContext(context).draw()
    //     console.log("STAVESARRAY[0]", stavesArray, i)
       
    // }else if(i%2 !==0){
    //     y+=110;
    //     stavesArray.push(new VF.Stave(x, y, 400));
    //     stavesArray[i-1].setContext(context).draw()
    //     console.log("STAVESARRAYODD", stavesArray, i)
    // }else{
    //     x+=400;
    //     stavesArray.push(new VF.Stave(x, y, 400));
    //     stavesArray[i-1].setContext(context).draw()
    //     console.log("STAVESARRAYEVEN", stavesArray, i)
    // }
    if(i === 0){
        stavesArray.push(new VF.Stave(x, y, 400));
        stavesArray[i].addClef("treble").addTimeSignature("4/4")
        stavesArray[i].setContext(context).draw()
        // console.log("STAVESARRAY[0]", stavesArray, i)
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notePackageArray[i]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
       voice.draw(context, stavesArray[i]);
    }else if (i%2 ===0){
        y+=150;
        stavesArray.push(new VF.Stave(10, y, 400));
        stavesArray[i].setContext(context).draw()
        // console.log("STAVESARRAYEVEN", stavesArray, i)
         var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notePackageArray[i]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
       voice.draw(context, stavesArray[i]);
    }else {
        // x+=430;
        stavesArray.push(new VF.Stave(430, y, 400));
        stavesArray[i].setContext(context).draw()
        // console.log("STAVESARRAYEVEN", stavesArray, i)
         var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notePackageArray[i]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
       voice.draw(context, stavesArray[i]);
    }

    
}

console.log("STAVESARRAY", stavesArray)



// console.log(numberOfStaves);

//   VF.Formatter.FormatAndDraw(context, stavesArray[0], notesMeasure1)

// var stave = new VF.Stave(10, 60, 400);
// stave.count = 1
// console.log("STAVE", stave)

//         stave.addClef("treble").addTimeSignature("4/4")
//         stave.setContext(context).draw()

//   var notes = [
//   // A quarter-note C.
//   new VF.StaveNote({ keys: ["c/6"], duration: "q" }),

//   // A quarter-note D.
//   new VF.StaveNote({ keys: ["d/4"], duration: "q" }),

//   // A quarter-note rest. Note that the key (b/4) specifies the vertical
//   // position of the rest.
//   new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),

//   // A C-Major chord.
//   new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
// ];

// // Create a voice in 4/4 and add above notes
// var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
//   voice.setStrict(false)
// voice.addTickables(notesMeasure1);

// // Format and justify the notes to 400 pixels.
// var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

// // Render voice
// voice.draw(context, stavesArray[0]);


