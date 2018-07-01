import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Music from './Music'


class App extends Component {
 
  constructor(){
    super()
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.gotFileContents = this.gotFileContents.bind(this);
    this.state = {poemContents: '', file: {}}
  }

  handleFileSelect(evt){
    const files = evt.target.files; 
    const file = evt.target.files[0];
    this.setState({file: files[0]})
   
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

export default App;
