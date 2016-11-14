const ipa = require('.');
const syllable = require('syllable');

const str1 = 'If -you can keep your head when all about you are' 
const str2 = 'Are losing theirs and blaming it on you'   

const poem = 'If you can keep your head when all about you' + 
'Are losing theirs and blaming it on you' +
'If you can trust yourself when all men doubt you,' +  
    'But make allowance for their doubting too;' +
'If you can wait and not be tired by waiting,' +
    'Or being lied about, don’t deal in lies,' +
'Or being hated, don’t give way to hating,'; 

const poem2 = 'And yet don’t look too good, nor talk too wise:' +
    'If you can dream—and not make dreams your master;' +
    'If you can think—and not make thoughts your aim;' + 
'If you can meet with Triumph and Disaster' +
    'And treat those two impostors just the same;' +
'If you can bear to hear the truth you’ve spoken' +
    'Twisted by knaves to make a trap for fools,' 

const poem3 = 'Or watch the things you gave your life to, broken,' +  
    'And stoop and build ’em up with worn-out tools:' +
    'If you can make one heap of all your winnings' +
    'And risk it on one turn of pitch-and-toss,' +
'And lose, and start again at your beginnings' +
    'And never breathe a word about your loss;' 

const poem4 = 'If you can force your heart and nerve and sinew' + 
    'To serve your turn long after they are gone,' +   
'And so hold on when there is nothing in you' +
    'Except the Will which says to them: ‘Hold on!’' +
    'If you can talk with crowds and keep your virtue,' +   
    'Or walk with Kings—nor lose the common touch,' +
'If neither foes nor loving friends can hurt you,' 

const poem5 = 'If all men count with you, but none too much;' +
'If you can fill the unforgiving minute' +
    'With sixty seconds’ worth of distance run,' + 
'Yours is the Earth and everything that’s in it,' +   
   ' And—which is more—you’ll be a Man, my son!'




const words = poem.split(" ");

//ipaOfWords is the array that will contain all of the words 
//enocded in IPA as well as any other nonalphabetical characters
//that will influence the sheet music, e.g. "dash, semi", etc. 

//steps: 
//1) get all words 
//2) identify if words have special characters in them 
//3) if they do, push that special 
const ipaOfWords = [];

for(let i = 0; i<words.length; i++){
    let note = '';
    for(let j = 0; j<words[i].length; j++){
            if(/[A-Za-z]/g.test(words[i][j])){
                note = words[i][j].toLowerCase();
                break;
            }
    }

    // if(words[i].indexOf("\n") > -1){
    //     words[i] = words[i].substring(words[i].length-1);
    //     console.log(words[i])
    //     ipaOfWords.push(ipa.ipadict[words[i].toLowerCase()]);
    //     ipaOfWords.push("\n");
    // }
    // if(words[i].indexOf("-") >-1) {
    //           console.log(words[i])
    //     ipaOfWords.push(ipa.ipadict[words[i].toLowerCase()]);
    //     ipaOfWords.push("dash");
    // }
    //  if(words[i].indexOf("!")  >-1){
    //     ipaOfWords.push("bang");
    // }
    //  if(words[i].indexOf(":")  >-1){
    //     ipaOfWords.push("colon");
    // }
    //  if(words[i].indexOf(";")  >-1){
    //     ipaOfWords.push("semi");
    // }
    //  if(words[i].indexOf("'")  >-1){
    //     ipaOfWords.push("apos");
    // }
    //  if(words[i].match(/[.]{2,}/g)){
    //     ipaOfWords.push("ellipsis");
    // }

    ipaOfWords.push({IPA: ipa.ipadict[words[i].toLowerCase()], syllables: syllable(words[i]), note: note})
}

// const ipaOfWords = words.map((word) => {
//     return ipa.ipadict[word.toLowerCase()]
// })

//if the word contains a newline character it'll be at the end of 
//the word --> substring it and push it onto the ipaOfWords: 
    //

console.log(ipaOfWords);