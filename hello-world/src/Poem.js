import React, { Component } from 'react';
// import * as syllable from 'syllable';
// console.log("SYLLABLE", syllable('coffee'))
// import * as AlchemyAPI from 'alchemy-api'
// const alchemy = new AlchemyAPI('a10a8e5080713a556c86cdc2d101b4c4690350f8');
// console.log('ALCHEMY', alchemy)

// const snippet = 'If you can dream—and not make dreams your master';  
// const natural = require('natural');
// import * as natural from 'natural';
// const metaphone = natural.Metaphone;

// alchemy.sentiment_targeted('hello', {}, function(err, response) {
//   if (err) throw err;

//   // See http://www.alchemyapi.com/api/ for format of returned object
//   var sentiment = response.docSentiment;
//   console.log('SENTIMENT', sentiment)
//   // Do something with data
// });

class Poem extends Component {

    render(){
        console.log("POEMPROPS", this.props)
        return(
            <div>{this.props.contents}</div>
        )
            
        
    }
}


export default Poem;