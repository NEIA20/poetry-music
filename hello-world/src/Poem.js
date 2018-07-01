import React, { Component } from 'react';

class Poem extends Component {

    render(){
      return <div id="content">{this.props.contents}</div>
    }
}


export default Poem;