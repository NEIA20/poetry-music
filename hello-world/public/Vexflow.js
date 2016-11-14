


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

renderer.resize(1300, 10000);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed")




//process notes below 


const ipaOfWords = [ { IPA: 'ɪˈf', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'kiˈp', syllables: 1, note: 'k', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'hɛˈd', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: 'wɛˈn', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ɔˈl', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'ʌbawˈt', syllables: 2, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'luˈzɪŋ', syllables: 2, note: 'l', endOfVerse: false },
  { IPA: 'ðɛˈɹz', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'blejˈmɪŋ', syllables: 2, note: 'b', endOfVerse: false },
  { IPA: 'ɪˈt', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'ɑˈn', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'tɹʌˈst', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'jɚsɛˈlf', syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'wɛˈn', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ɔˈl', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'mɛˈn', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'dawˈt', syllables: 1, note: 'd', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'mejˈk', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'ʌlawˈʌns', syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: 'ðɛˈɹ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'dawˈtɪŋ', syllables: 2, note: 'd', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 't', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'wejˈt', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'nɑˈt', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'biˈ', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'tajˈɚd', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'bajˈ', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'w', endOfVerse: false },
  { IPA: 'biˈɪŋ', syllables: 2, note: 'b', endOfVerse: false },
  { IPA: 'lajˈd', syllables: 1, note: 'l', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'd', endOfVerse: false },
  { IPA: 'diˈl', syllables: 1, note: 'd', endOfVerse: false },
  { IPA: 'ɪn', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'l', endOfVerse: false },
  { IPA: 'biˈɪŋ', syllables: 2, note: 'b', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'h', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'd', endOfVerse: false },
  { IPA: 'gɪˈv', syllables: 1, note: 'g', endOfVerse: false },
  { IPA: 'wejˈ', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'h', endOfVerse: false },
  { IPA: 'jɛˈt', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'd', endOfVerse: false },
  { IPA: 'lʊˈk', syllables: 1, note: 'l', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'g', endOfVerse: false },
  { IPA: 'nɔˈɹ', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'tɔˈk', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'w', endOfVerse: false },
  { IPA: 'wɑˈʧ', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'θɪˈŋz', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'gejˈv', syllables: 1, note: 'g', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'lajˈf', syllables: 1, note: 'l', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'b', endOfVerse: false },
  { IPA: 'stuˈp', syllables: 1, note: 's', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'bɪˈld', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'e', endOfVerse: false },
  { IPA: 'ʌˈp', syllables: 1, note: 'u', endOfVerse: false },
  { IPA: 'wɪˈð', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'w', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 't', endOfVerse: false }, 
//2
  { IPA: 'ɪˈf', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'd', endOfVerse: false },
  { IPA: 'nɑˈt', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'mejˈk', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'dɹiˈmz', syllables: 1, note: 'd', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'm', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 't', endOfVerse: false },
  { IPA: 'nɑˈt', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'mejˈk', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'θɔˈts', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'miˈt', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'wɪˈð', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'tɹajˈʌmf', syllables: 2, note: 't', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'd', endOfVerse: false },
  { IPA: 'tɹiˈt', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ðowˈz', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ɪmpɔˈstɚz', syllables: 2, note: 'i', endOfVerse: false },
  { IPA: 'ʤʌˈst', syllables: 1, note: 'j', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'bɛˈɹ', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'hiˈɹ', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'tɹuˈθ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
  { IPA: 'bajˈ', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'nejˈvz', syllables: 1, note: 'k', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'mejˈk', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'ʌ', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'tɹæˈp', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'f', endOfVerse: false }, 

//3

 { IPA: 'ɪˈf', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'mejˈk', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'wʌˈn', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'hiˈp', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: 'ʌˈv', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'ɔˈl', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'w', endOfVerse: false },
  { IPA: 'ɹɪˈsk', syllables: 1, note: 'r', endOfVerse: false },
  { IPA: 'ɪˈt', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'ɑˈn', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'wʌˈn', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'tɚˈn', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ʌˈv', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'p', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'l', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'stɑˈɹt', syllables: 1, note: 's', endOfVerse: false },
  { IPA: 'ʌgɛˈn', syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'æˈt', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'b', endOfVerse: false },
  { IPA: 'nɛˈvɚ', syllables: 2, note: 'n', endOfVerse: false },
  { IPA: 'bɹiˈð', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'ʌ', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'wɚˈd', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ʌbawˈt', syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'l', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'fɔˈɹs', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'hɑˈɹt', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'nɚˈv', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
  { IPA: 'sɚˈv', syllables: 1, note: 's', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'tɚˈn', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'lɔˈŋ', syllables: 1, note: 'l', endOfVerse: false },
  { IPA: 'æˈftɚ', syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'ðejˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ɑˈɹ', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'g', endOfVerse: false },
  { IPA: 'sowˈ', syllables: 1, note: 's', endOfVerse: false },
  { IPA: 'howˈld', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: 'ɑˈn', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'wɛˈn', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ðɛˈɹ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ɪˈz', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'nʌˈθɪŋ', syllables: 2, note: 'n', endOfVerse: false },
  { IPA: 'ɪn', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'wɪˈl', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'wɪˈʧ', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'sɛˈz', syllables: 1, note: 's', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'h', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'o', endOfVerse: false }, 


  //4

{ IPA: 'ɪˈf', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'tɔˈk', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'wɪˈð', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'kɹawˈdz', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'kiˈp', syllables: 1, note: 'k', endOfVerse: false },
  { IPA: 'jɔˈɹ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'v', endOfVerse: false },
  { IPA: 'wɔˈk', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'wɪˈð', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'k', endOfVerse: false },
  { IPA: 'luˈz', syllables: 1, note: 'l', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'kɑˈmʌn', syllables: 2, note: 'c', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 't', endOfVerse: false },
  { IPA: 'niˈðɚ', syllables: 2, note: 'n', endOfVerse: false },
  { IPA: 'fowˈz', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: 'nɔˈɹ', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'lʌˈvɪŋ', syllables: 2, note: 'l', endOfVerse: false },
  { IPA: 'fɹɛˈndz', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'hɚˈt', syllables: 1, note: 'h', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
  { IPA: 'ɔˈl', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'mɛˈn', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'kawˈnt', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'wɪˈð', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'bʌˈt', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'nʌˈn', syllables: 1, note: 'n', endOfVerse: false },
  { IPA: 'tuˈ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'm', endOfVerse: false },
  { IPA: 'juˈ', syllables: 1, note: 'y', endOfVerse: false },
  { IPA: 'kæˈn', syllables: 1, note: 'c', endOfVerse: false },
  { IPA: 'fɪˈl', syllables: 1, note: 'f', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ʌnfɚgɪˈvɪŋ', syllables: 2, note: 'u', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'm', endOfVerse: false },
  { IPA: 'sɪˈksti', syllables: 2, note: 's', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
  { IPA: 'wɚˈθ', syllables: 1, note: 'w', endOfVerse: false },
  { IPA: 'ʌˈv', syllables: 1, note: 'o', endOfVerse: false },
  { IPA: 'dɪˈstʌns', syllables: 2, note: 'd', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'r', endOfVerse: false },
  { IPA: 'ɪˈz', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ɚˈθ', syllables: 1, note: 'e', endOfVerse: false },
  { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: 'ɛˈvɹiθɪˌŋ', syllables: 2, note: 'e', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
  { IPA: 'ɪn', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'i', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'a', endOfVerse: false },
  { IPA: 'ɪˈz', syllables: 1, note: 'i', endOfVerse: false },
  { IPA: undefined, syllables: 2, note: 'm', endOfVerse: false },
  { IPA: 'biˈ', syllables: 1, note: 'b', endOfVerse: false },
  { IPA: 'ʌ', syllables: 1, note: 'a', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 'm', endOfVerse: false },
  { IPA: 'majˈ', syllables: 1, note: 'm', endOfVerse: false },
  { IPA: undefined, syllables: 1, note: 's', endOfVerse: false }

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


// const ipaOfWords = [ { IPA: 'bɪkɔˈz', syllables: 2, note: 'b', endOfVerse: false },
//   { IPA: 'ajˈ', syllables: 1, note: 'i', endOfVerse: false },
//   { IPA: 'kʊˈd', syllables: 1, note: 'c', endOfVerse: false },
//   { IPA: 'nɑˈt', syllables: 1, note: 'n', endOfVerse: false },
//   { IPA: 'stɑˈp', syllables: 1, note: 's', endOfVerse: false },
//   { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'dɛˈθ', syllables: 1, note: 'd', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'kajˈndli', syllables: 2, note: 'k', endOfVerse: false },
//   { IPA: 'stɑˈpt', syllables: 1, note: 's', endOfVerse: false },
//   { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'miˈ', syllables: 1, note: 'm', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'kæˈɹɪʤ', syllables: 2, note: 'c', endOfVerse: false },
//   { IPA: 'hɛˈld', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'bʌˈt', syllables: 1, note: 'b', endOfVerse: false },
//   { IPA: 'ʤʌˈst', syllables: 1, note: 'j', endOfVerse: false },
//   { IPA: 'awɚsɛˈlvz', syllables: 2, note: 'o', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'i', endOfVerse: false },
//   { IPA: 'slowˈli', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'dɹowˈv', syllables: 1, note: 'd', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'j', endOfVerse: false },
//   { IPA: 'hiˈ', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'nuˈ', syllables: 1, note: 'k', endOfVerse: false },
//   { IPA: 'nowˈ', syllables: 1, note: 'n', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'h', endOfVerse: false },
//   { IPA: 'ajˈ', syllables: 1, note: 'i', endOfVerse: false },
//   { IPA: 'hæˈd', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'pʊˈt', syllables: 1, note: 'p', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'a', endOfVerse: false },
//   { IPA: 'lejˈbɚ', syllables: 2, note: 'l', endOfVerse: false },
//   { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: 'majˈ', syllables: 1, note: 'm', endOfVerse: false },
//   { IPA: 'lɛˈʒɚ', syllables: 2, note: 'l', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'hɪˈz', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'sʌvɪˈlʌti', syllables: 2, note: 'c', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: 'wiˈ', syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'pæˈst', syllables: 1, note: 'p', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 's', endOfVerse: false },
//   { IPA: 'wɛˈɹ', syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'ʧɪˈldɹʌn', syllables: 2, note: 'c', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'ɹɪsɛˈs', syllables: 2, note: 'r', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: 'ɪn', syllables: 1, note: 'i', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'ɹɪˈŋ', syllables: 1, note: 'r', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'pæˈst', syllables: 1, note: 'p', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'fiˈldz', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'ʌˈv', syllables: 1, note: 'o', endOfVerse: false },
//   { IPA: 'gejˈzɪŋ', syllables: 2, note: 'g', endOfVerse: false },
//   { IPA: 'gɹejˈn', syllables: 1, note: 'g', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: '', endOfVerse: false },
//   { IPA: 'wiˈ', syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'pæˈst', syllables: 1, note: 'p', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'sɛˈtɪŋ', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'sʌˈn', syllables: 1, note: 's', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'e', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'r', endOfVerse: false }, 
//   { IPA: 'ɔˈɹ', syllables: 1, note: 'o', endOfVerse: false },
//   { IPA: 'ɹæˈðɚ', syllables: 2, note: 'r', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'd', endOfVerse: false },
//   { IPA: 'hiˈ', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'pæˈst', syllables: 1, note: 'p', endOfVerse: false },
//   { IPA: 'ʌˈs', syllables: 1, note: 'u', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'duˈz', syllables: 1, note: 'd', endOfVerse: false },
//   { IPA: 'dɹuˈ', syllables: 1, note: 'd', endOfVerse: false },
//   { IPA: 'kwɪˈvɚɪŋ', syllables: 2, note: 'q', endOfVerse: false },
//   { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: 'ʧɪˈl', syllables: 1, note: 'c', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'o', endOfVerse: false },
//   { IPA: 'fɔˈɹ', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'owˈnli', syllables: 2, note: 'o', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'g', endOfVerse: false },
//   { IPA: 'majˈ', syllables: 1, note: 'm', endOfVerse: false },
//   { IPA: 'gawˈn', syllables: 1, note: 'g', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'a', endOfVerse: false },
//   { IPA: 'majˈ', syllables: 1, note: 'm', endOfVerse: false },
//   { IPA: 'tɪˈpʌt', syllables: 2, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'i', endOfVerse: false },
//   { IPA: 'owˈnli', syllables: 2, note: 'o', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'pɔˈzd', syllables: 2, note: 'p', endOfVerse: false },
//   { IPA: 'bɪfɔˈɹ', syllables: 2, note: 'b', endOfVerse: false },
//   { IPA: 'ʌ', syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: 'hawˈs', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: 'ðæˈt', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'swɛˈlɪŋ', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'ʌˈv', syllables: 1, note: 'o', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'gɹawˈnd', syllables: 1, note: 'g', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'ɹuˈf', syllables: 1, note: 'r', endOfVerse: false },
//   { IPA: 'wɑˈz', syllables: 1, note: 'w', endOfVerse: false },
//   { IPA: 'skɛˈɹsli', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'vɪˈzʌbʌl', syllables: 2, note: 'v', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'c', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: '', endOfVerse: false },
//   { IPA: 'ɪn', syllables: 1, note: 'i', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'gɹawˈnd', syllables: 1, note: 'g', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 's', endOfVerse: false },
//   { IPA: 'ðɛˈn', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'n', endOfVerse: false },
//   { IPA: undefined, syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'sɛˈnʧɚiz', syllables: 2, note: 'c', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'n', endOfVerse: false },
//   { IPA: 'ʌnd', syllables: 1, note: 'a', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'y', endOfVerse: false },
//   { IPA: 'ʃɔˈɹtɚ', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'ðæˈn', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'd', endOfVerse: false },
//   { IPA: 'fɚˈst', syllables: 1, note: 'f', endOfVerse: false },
//   { IPA: 'sɚmajˈzd', syllables: 2, note: 's', endOfVerse: false },
//   { IPA: 'ðʌ', syllables: 1, note: 't', endOfVerse: false },
//   { IPA: 'hɔˈɹsɪz', syllables: 1, note: 'h', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'h', endOfVerse: false },
//   { IPA: 'tʌwɔˈɹd', syllables: 2, note: 't', endOfVerse: false },
//   { IPA: 'ɪtɚˈnʌti', syllables: 2, note: 'e', endOfVerse: false },
//   { IPA: undefined, syllables: 2, note: 'k', endOfVerse: false } 
//   ]


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

const totalNotes = ipaOfWords.length;
console.log("TOTAL_NOTES", totalNotes);
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
    // console.log("musicNote-----", musicNote)
    

    // if(ipaOfWords[i].endOfVerse === false){
    //     notesPackage.push(new VF.StaveNote({keys: ["b/4"], duration: 'qr'}));
    //     notesPackage.push(new VF.StaveNote({keys: ["b/4"], duration: 'qr'}));
    //     numNotes +=16;
    // }

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
//     console.log("NOTESPACKAGE", notesPackage)
// console.log("NOTESPACKAGEARRAY", notePackageArray)
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
        stavesArray.push(new VF.Stave(10, y, 400));
        stavesArray[i].addClef("treble").addTimeSignature("4/4")
        stavesArray[i].setContext(context).draw()
        // console.log("STAVESARRAY[0]", stavesArray, i)
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notePackageArray[i]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
       voice.draw(context, stavesArray[i]);
    }
    // }else if (i%2 ===0){
    //     y+=150;
    //     stavesArray.push(new VF.Stave(10, y, 400));
    //     stavesArray[i].setContext(context).draw()
    //     // console.log("STAVESARRAYEVEN", stavesArray, i)
    //      var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
    //     voice.addTickables(notePackageArray[i]);
    //     var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    //    voice.draw(context, stavesArray[i]);
    // }
    else {
        if(x === 870){
            x = 10; 
            y +=150;
        }else {
            x+=430;
        }
        stavesArray.push(new VF.Stave(x, y, 400));
        stavesArray[i].setContext(context).draw()
        // console.log("STAVESARRAYEVEN", stavesArray, i)
         var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notePackageArray[i]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
       voice.draw(context, stavesArray[i]);
    }

    
}

// console.log("STAVESARRAY", stavesArray)



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


