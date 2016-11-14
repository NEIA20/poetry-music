import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Music from './Music'


// import natural from 'natural'



class App extends Component {
 
  constructor(){
    super()
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.gotFileContents = this.gotFileContents.bind(this);
    this.state = {poemContents: '', file: {}}
  }

  handleFileSelect(evt){
    const files = evt.target.files; 
    console.log("FILES", typeof files[0])// FileList object
     const file = evt.target.files[0];
    this.setState({file: files[0]})
    console.log("FILEON STATE", this.state.file)
   
        const reader = new FileReader();
        reader.onload = (evt) => {
          // The file's text will be printed here
          console.log(typeof evt.target.result)
          this.gotFileContents(evt.target.result)
         
        };

        reader.readAsText(file);
  }

  gotFileContents(contents){

     this.setState({poemContents: contents});
     console.log("POEMCONENTS", this.state.poemContents);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.handleFileSelect} type="file" id="files" name="files[]" multiple />
         <output id="list"></output>



      </div>
    );
  }
}


// $.get('ipadict2.txt', function(data) {
//   console.log(data);
// });

// readFile('server/ipadict2.txt')
// .then(buffer => console.log(buffer.toString()))
// .catch(err => console.error(err.message));

// fs.readFile('ipadict2.txt', function (err, buffer) {
// 			if (err) console.error(err);
// 			else console.log(buffer.toString());
// 		});


export default App;
