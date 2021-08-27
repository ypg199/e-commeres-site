import Product from "./products.json"
import React, { Component } from 'react'
import "./homepage.css"
import {Link} from "react-router-dom"
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemes:Product,
      cart:JSON.parse(localStorage.getItem("cart")) || [],
      itemincart: 0,
      modal:false,
      modalText:""
    }; 
  }
  
save=(c) => {
  this.setState({
    cart: [...this.state.cart, c],
    itemincart :this.state.itemincart+1
  });
  localStorage.setItem("cart", JSON.stringify([...this.state.cart,c]));
      localStorage.setItem("itemcount", this.state.itemincart+1);
      console.log(this.state.cart);
}

   add=e=>{
    e.preventDefault();
     const id=e.target.id;
     const c = this.state.itemes.find(item=> item.id === parseInt(id, 10));
     const inCart = this.state.cart.find(item=> item.id === parseInt(id, 10));
     if(!inCart){
      this.setState({modalText:c.title})
      this.setState({modal:!this.state.modal})
      this.save(c)
     }
     
  }
  handlemodal=()=>{
    this.setState({modal:!this.state.modal})
  }
  componentDidMount() {
    this.setState({
      itemincart: this.state.cart.length || 0,
    });
  }
  render() {
    
    return (<html>
    
      <div style={{background:"white"}}>
      <Button variant="primary">
        Launch demo modal
      </Button>

      <Modal show={this.state.modal} >
        <Modal.Header closeButton onClick={this.handlemodal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.modalText} is added to your cart</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handlemodal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        <nav class="nav">
    <div class="nav__center container">
      <div class="nav__logo">
        <h1>YASH</h1>
      </div>

      <ul class="nav__list">
        
        <div class="cart__icon">
        <Link to="/cart">
          <h2>cart</h2>
          </Link>
          <span class="item__total">{this.state.itemincart}</span>
        </div>
      </ul>

      <div class="hamburger" >
        <img src="./images/sprite.svg" alt="conot load"/>
        
      </div>
    </div>
  </nav>
      <section class="products">
      <div className="product__center">
        {this.state.itemes.map((data , index) => {
            return(
                <div className="product">
        <div className="image__container">
          <img src={data.image} alt="cannot display" />
        </div>
        <div className="product__footer">
          <h1>{data.title}</h1>
          <div className="price"><h1>₹{data.price}</h1></div>
          <div className="bottom">
            
              <button className="btn " disabled={this.state.cart.find(item=> item.id === parseInt(data.id, 10))} id= {data.id} onClick={this.add}  >Add to Cart</button>
          </div>
        </div>
      </div>
      )}
            )}
        </div>
        </section>
        </div>
        </html>
        
    )
  }
}

export default HomePage

