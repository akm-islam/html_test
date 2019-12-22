import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Heatmap from './components/Heatmap';
import * as algorithms from "./algorithms/fetch.js"
import {Button,Row,Col,Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Input,Label,Form,FormText,ListGroup,ListGroupItem} from 'reactstrap';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    file:{},
    modal: false,
    xLabels:null,
    yLabels:['Sun', 'Mon', 'Tue'],
    data:null,
    features:null,
  }
};
//-----------------------------------------------------------------Render function starts here  
render() {
  return (
    <div className="maincontainer">
{ /* Navbar starts here */ }
  <Navbar expand="sm" >
  <Row>
      <Col md="1" className="col1"><NavbarBrand href="/">PredictIt</NavbarBrand></Col>
      
      <Col xs="auto" className="col2 checkboxcontainer">
      <label class="container">
        <input type="checkbox"></input> OneOneOne
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>
      <label class="container">
        <input type="checkbox" ></input> One
      </label>
      <label class="container">
        <input type="checkbox" ></input> One
      </label>
      <label class="container">
        <input type="checkbox" ></input> One
      </label>
      </Col>
      <Col sm="auto" className="checkboxcontainer col3">
      <label class="container">
        <input type="checkbox"></input> OneOneOne
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>  
      <label class="container">
        <input type="checkbox" ></input> One
      </label>
      </Col>
  </Row>
  </Navbar>
{ /* File Upload (first column starts here) */ }
  <Row className="row1">
  
  </Row>
{ /* Modal starts here */ }
       
{ /* Modal ends here */ }
    </div>
    );
  }
}
export default App;

