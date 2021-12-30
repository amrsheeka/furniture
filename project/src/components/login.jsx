import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
    username: "",
    password: "",
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
  onSubmit = ()=>{
    console.log(this.state);
    // fetch('http://localhost:3000/login',{
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   })
    // })
  }
  
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  

  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;
  };

  handleChange = e => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>

        
        
        
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.username}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.password}
              id="password"
              type="text"
              className="form-control"
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}

          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </button>
          
          </div>
         
          
        </form>

      </React.Fragment>
    );
  }
}

export default Login;