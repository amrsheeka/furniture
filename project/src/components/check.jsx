import React, { Component } from 'react';
    class check extends React.Component {
        render() { 
            return(    
            
            <React.Fragment> 
            
            
    <div className="row">
    <div className="col-75">
        <div className="containe">
        <form >
        
            <div className="row">
            <div className="col-50">
                <h3>Billing Address</h3>
                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                <input className='form-control' type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                <input className='form-control' type="text" id="email" name="email" placeholder="john@example.com"/>
                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input className='form-control' type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                <input className='form-control' type="text" id="city" name="city" placeholder="New York"/>

                <div className="row">
              <div className="col-50">
                <label htmlfor="state">State</label>
                <input className='form-control' type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label htmlfor="zip">Zip</label>
                <input className='form-control' type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
                
                </div>
                
                <div className="col-50">
            <h3>Payment</h3>
            <label htmlfor="fname">Accepted Cards</label>
           
            <label htmlfor="cname">Name on Card</label>
            <input className='form-control' type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label htmlfor="ccnum">Credit card number</label>
            <input className='form-control' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label htmlfor="expmonth">Exp Month</label>
            <input className='form-control' type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div className="col-50">
                <label htmlfor="expyear">Exp Year</label>
                <input className='form-control' type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label htmlfor="cvv">CVV</label>
                <input className='form-control' type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
        </label>
        <hr/>
 
        <input  type="submit"  className="btn btn-primary"  />
      </form>
    </div>
  </div>

  </div>
            </React.Fragment>

        );
        }
    }
    
    export default check;
