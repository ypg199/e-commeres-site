import React, { Component } from 'react'
import './cart.css'
import {Link} from "react-router-dom"

export class Carkt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart:JSON.parse(localStorage.getItem("cart")),
             itemcount:0,
             total:0
        }
    }
    saveCart=(cart)=>{
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("itemcount",cart.length)
      
    }
    
    delete=(id)=>{
    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({
      cart:cart,
      itemcount:cart.length,

    }
    );
    console.log(this.state.itemcount)
    this.saveCart(cart);
    }
    decrement=(e)=>{
      const id=parseInt(e.target.id ,10)
      console.log(id)
      const count=this.state.cart.find(item=> item.id === id);
      if(count){
      if(count.count===1){
      this.delete(id)
      }
      else{
        const data = [...this.state.cart];
      const index = data.findIndex(obj => obj.id === id)
      console.log(index)
        data[index].count = data[index].count-1;
        this.setState(
          {cart:this.state.cart}
        )
        
      }}
    }
    increment=(e)=>{
      const id=parseInt(e.target.id ,10)
      console.log(id)
      const count = this.state.cart.find(item=> item.id === id);
      console.log(count)
      if(count){
      const data = [...this.state.cart];
      const index = data.findIndex(obj => obj.id == parseInt(id,10))
      console.log(index)
      data[index].count = data[index].count+1;
      this.setState(
        {cart:this.state.cart}
      );
      
      this.saveCart(this.state.cart) 
    }
    }
    
    removeItem=e=>{
      const id=parseInt(e.target.id, 10);
      this.delete(id)
      
    }
    

    componentDidMount() {
      this.setState({
        itemcount: this.state.cart.length || 0,
      });
      
    }
        
    render() {
      let total=0
      this.state.cart.forEach(item => {
        total+=item.count*item.price;
        
      });
      
        return (
            <div className="bag">
              <nav class="nav">
    <div class="nav__center container">
      <div class="nav__logo">
      <Link to="/home">
        <h1>YASH</h1>
        </Link>
      </div>

      <ul class="nav__list">
        
        <div class="cart__icon">
        
          <h2>cart</h2>
          <span class="item__total">{this.state.itemcount}</span>
        </div>
      </ul>

      <div class="hamburger" >
        <img src="./images/sprite.svg" alt="conot load"/>
        
      </div>
    </div>
  </nav>
               <div class="shopping-cart">
  
  <div class="title">
    Shopping Bag
  </div>
            
              {this.state.cart.map((Item) => {
                return (<>
                <div class="item">
                <div class="buttons">
                <button class="delete-btn" type="button" id= {Item.id} name="button" onClick={this.removeItem.bind(this)}>
                    <img src="./images/icons8-delete.svg" alt="" id= {Item.id} className="delete-btn" />
                  </button>
                  
                </div>
             
                <div class="image">
                  <img src={Item.image} alt="" />
                </div>
             
                <div class="description">
                  <span>{Item.title}</span>
                  
                </div>
             
                <div class="quantity">
                  <button class="plus-btn" type="button" name="button" id= {Item.id} onClick={this.increment}>
                    <img src="./images/plus.svg" alt="" id= {Item.id} />
                  </button>
                  <input type="text" name="name" value={Item.count}/>
                  <button class="minus-btn" type="button" name="button" id= {Item.id} onClick={this.decrement}>
                    <img src="./images/minus.svg" alt="" id= {Item.id}  />
                  </button>
                </div>
             
                <div class="total-price">₹{Item.price*Item.count}</div>
              </div>
              </>
              ) 
              })}
            
          </div>
         
    
          <div class="cart__footer">
        <h3>Total: ₹ <span class="cart__total">{total}</span></h3>
        <Link to="/check">
        <button class="clear__cart btn">Clear Cart</button>
        </Link>
      </div>
      
      
        </div>

        
        )
    }
}

export default Carkt
