import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }

  handleFileSelect(evt){
    const files = evt.target.files; 
    console.log("FILES", files[0])// FileList object
    const file = evt.target.files[0];
        const reader = new FileReader();
        reader.onload = function(evt) {
          // The file's text will be printed here
          console.log(evt.target.result)
        };

        reader.readAsText(file);
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



// <script>
//   function handleFileSelect(evt) {
//     var files = evt.target.files; // FileList object
//     var file = event.target.files[0];
//         var reader = new FileReader();
//         reader.onload = function(event) {
//           // The file's text will be printed here
//           console.log(event.target.result)
//         };

//         reader.readAsText(file);
//       }
  

//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
export default App;
