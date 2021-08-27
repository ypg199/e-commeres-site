import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Checkoutpage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart:JSON.parse(localStorage.getItem("cart")),
             fname: "",
            lname :'',
            add:'',
            country:'',
            state:'',
            sameadd:'',
            zip: '',
            remind: false,
            cardname:"",
            cardnumber:"",
            expire:"",
            cvv:""
        }
        this.fnameref=React.createRef();
         this.lnameref=React.createRef();
         this.usernameref=React.createRef();
         this.addref=React.createRef();
         this.countryref=React.createRef();
         this.zipref=React.createRef();
         this.stateref=React.createRef();
         this.cityref=React.createRef();
         this.sameaddref=React.createRef();
         this.cardnameref=React.createRef();
         this.cardnumberref=React.createRef();
         this.expireref=React.createRef();
         this.cvvref=React.createRef();
         this.err=React.createRef();
    }
    handleChage =e =>{
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name] : value
        })
        console.log(this.state[name],name.type)
    }
    vadidation=(arry)=>{
      let valid =true
      for(var arr of arry ){
        if (!this.state[arr]){
          this[arr + "ref"].current.style.border = '2px solid red';
          console.log(arr+"ref")
          valid= false
        }
        if (this.state[arr]){
          this[arr + "ref"].current.style.border = '2px solid blue';
          console.log(arr+"ref")
          
        }
      }
      console.log(valid)
      return valid
      }
      submit = e =>{
        e.preventDefault();
        
        
        let arr=["fname","lname","username","add","country","zip","state","cardname","cardnumber","expire","cvv"]
        let valid =this.vadidation(arr)
        if(valid){
          this.props.history.push("/home")
        }
      }
    render() {
        let total=0
      this.state.cart.forEach(item => {
        total+=item.count*item.price;
        
      });
        return (
            <body class="bg-light">

            <div class="container">
              <div class="py-5 text-center">
                
                <h2>Checkout form</h2>
                
              </div>
        
              <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3">
                  {this.state.cart.map((Item) => {
                return (
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">{Item.title}X{Item.count}</h6>
                        
                      </div>
                      <span class="text-muted">₹{Item.price*Item.count}</span>
                    </li>) 
              })}
                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>₹{total}</strong>
                    </li>
                    <Link to="/cart">
                    <li class="list-group-item d-flex justify-content-between">
                    
                        <span><button type="submit" class="btn btn-primary" style={{marginLeft:" 150px"}}>Edit Cart</button></span></li></Link>
                  </ul>

        
                  
                </div>
                <div class="col-md-8 order-md-1">
                  <h4 class="mb-3">Billing address</h4>
                  <form class="needs-validation" novalidate onSubmit={this.submit}>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder=""  required name="fname" ref={this.fnameref} autoComplete="none" value={this.state.fname}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder=""  required name="lname" ref={this.lnameref} autoComplete="none" value={this.state.lname}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>
        
                    <div class="mb-3">
                      <label for="username">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">@</span>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Username" required name="username" ref={this.usernameref} autoComplete="none" value={this.state.username}  onChange={this.handleChage}/>
                        <div class="invalid-feedback" style={{width: "100%"}}>
                          Your username is required.
                        </div>
                      </div>
                    </div>
        
                    <div class="mb-3">
                      <label for="email">Email <span class="text-muted">(Optional)</span></label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
        
                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required name="add" ref={this.addref} autoComplete="none" value={this.state.add}  onChange={this.handleChage}/>
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
        
                    
        
                    <div class="row">
                      <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required name="country" ref={this.countryref} autoComplete="none" value={this.state.country}  onChange={this.handleChage}>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required name="state" ref={this.stateref} autoComplete="none" value={this.state.state}  onChange={this.handleChage}>
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required name="zip" ref={this.zipref} autoComplete="none" value={this.state.zip}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4"/>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="same-address"/>
                      <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="save-info"/>
                      <label class="custom-control-label" for="save-info">Save this information for next time</label>
                    </div>
                    <hr class="mb-4"/>
        
                    <h4 class="mb-3">Payment</h4>
        
                    <div class="d-block my-3">
                      <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                        <label class="custom-control-label" for="credit">Credit card</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                        <label class="custom-control-label" for="debit">Debit card</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                        <label class="custom-control-label" for="paypal">Paypal</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required name="cardname" ref={this.cardnameref} autoComplete="none" value={this.state.cardname}  onChange={this.handleChage}/>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required name="cardnumber" ref={this.cardnumberref} autoComplete="none" value={this.state.cardnumber}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Credit card number is required 
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required name="expire" ref={this.expireref} autoComplete="none" value={this.state.expire}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required name="cvv" ref={this.cvvref} autoComplete="none" value={this.state.cvv}  onChange={this.handleChage}/>
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4"/>
                    <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={this.submit}>Continue to checkout</button>
                  </form>
                </div>
              </div>
              </div>
              </body>
            
        )
    }
}

export default Checkoutpage
