import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HomePage from './home_page';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';


import './index.css';
import Product from "./products.json"
import Carkt from './carkt';
import Checkoutpage from './Checkoutpage';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemincart: 0
    };

    

    
  }
cartcount=e=>{
  this.setState(
    {
      itemincart:localStorage.getItem("itemcount")
    }
  )
  return 1
}
  render() {
    return (
      <div>
       
      
  <Router>
  <Switch>
  <Route path="/Home" exact component={HomePage}></Route>
  <Route path="/cart" exact component={Carkt}></Route>
  <Route path="/check" exact component={Checkoutpage}></Route>
  </Switch>
    </Router>
  </div>
    )
  }
}

ReactDom.render(<Index/>, document.getElementById('root'));

