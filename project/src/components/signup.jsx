import React, { Component } from "react";
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
        username: "",
        password: "",
        firstname:"",
        lastname: "",
        confirm_password:"",
        errors: {}
        };
    }
    
    username =(event)=>{
        this.setState({username: event.target.value})
        console.log(event.target.value); 
    }
    password =(event)=>{
        this.setState({password: event.target.value})
        console.log(event.target.value); 
    }
    confirm_password =(event)=>{
        this.setState({confirm_password: event.target.value})
        console.log(event.target.value); 
    }
    firstname =(event)=>{
        this.setState({firstname: event.target.value})
        console.log(event.target.value); 
    } 
    lastname =(event)=>{
        this.setState({lastname: event.target.value})
        console.log(event.target.value); 
    }
    
    onSubmit = ()=>{
        console.log(this.state);
        fetch('http://localhost:3000/users/signup',{
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            firstname: this.state.firstname,
            lastname: this.state.lastname
            })
        })
        .then((response)=>response.json())
        .then((user)=>{
            if(user){
                console.log("submit");
            }
        })
    }


    render() {
        return (
            <div>
                

                <div className="form-group">
                <h3>Sign Up</h3>
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.firstname} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={this.lastname} />
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.username}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.password}/>
                </div>
                <div className="form-group">
                    <label>cofirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.confirm_password}/>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Sign Up</button>

                </div>

                <p className="forgot-password text-right">
                    Already registered <a href="./login">sign in?</a>
                </p>
            </div>
        );
    }
}
export default SignUp;
