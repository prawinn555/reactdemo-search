import React, { PureComponent } from "react";
import Popup from 'react-popup';

class CreateButton extends PureComponent {


 
  render() {
    console.log(`render ${this.props.listData}`);

    
    return (
      <input type="button" value="Test Event" 
         onClick={this.handleClick.bind(this)} ></input>
    );
  }
  
  
  handleClick(e) {
      Popup.alert('Hello');
  }
  

}

export default CreateButton;

    
