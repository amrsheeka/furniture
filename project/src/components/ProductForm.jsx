import React, { Component } from "react";
import axios from "axios";

class ProductForm extends Component {
  state = { 
      name: "",
      id:"",
      price: "",
      count: 0,
      isInCart: false,
      section: "",
      imagePath: "",
      description: ""  
};

id =(event)=>{
  this.setState({id: event.target.value})
  console.log(event.target.value); 
}
name =(event)=>{
  this.setState({name: event.target.value})
  console.log(event.target.value); 
}

price =(event)=>{
  this.setState({price: event.target.value})
  console.log(event.target.value); 
}
section =(event)=>{
  this.setState({section: event.target.value})
  console.log(event.target.value); 
}
imagePath =(event)=>{
  this.setState({imagePath: event.target.value})
  console.log(event.target.value); 
}
description =(event)=>{
  this.setState({description: event.target.value})
  console.log(event.target.value); 
}
count =(event)=>{
  this.setState({count: event.target.value})
  console.log(event.target.value); 
}
isInCart =(event)=>{
  this.setState({isInCart: event.target.value})
  console.log(event.target.value); 
}

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get(
        "http://localhost:3000" + id
      );
      console.log(data);
      //Clone
      const state = { ...this.state };
      //Edit
      state.section = data.section;
      state.imagePath = data.imagePath;
      state.isInCart = data.isInCart;
      state.description = data.description;
      state.count = data.count;
      state.name = data.name;
      state.price = data.price;
      state.id = data.id;
      //Set state
      this.setState(state);
    }
  }

  onSubmit = ()=>{
    console.log(this.state);
    fetch('http://localhost:3000/insertproduct',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: this.state.id,
          price: this.state.price,
          section: this.state.section,
          imagePath: this.state.imagePath,
          description: this.state.description,
          name:this.state.name
        })
    })
    
}

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
    console.log(state);

  };

  render() {
    return (
      <React.Fragment>
        
        <div >
        <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
          </h1>
        
          <div className="form-group">

          
        <label htmlFor="name">id</label>
            <input
              className="form-control"
              onChange={this.id}
              
              id="name"
              name="name"
              type="text"
            />
          
          

          
            
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              onChange={this.name}
              
              id="name"
              name="name"
              type="text"
            />
          
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              onChange={this.price}
              
              id="price"
              name="price"
              type="text"
            />

              <label htmlFor="name">Describtion</label>
              <input
              className="form-control"
              onChange={this.description}
              
              id="price"
              name="price"
              type="text"
            />
            <select className="selectpicker" data-live-search="true">
            <option data-tokens="bed"  onChange={this.section}>bed</option>
            <option data-tokens="Living Room" onChange={this.section}>Living Room</option>
            <option data-tokens="Wardrobe" onChange={this.section}>Wardrobe</option>
            </select>
          <label htmlFor="name">Upload imgs</label>
          <div>
          <div className="custom-file">
            <input type="text"  id="customFile" onChange={this.imagePath}/>
          
          <div className="invalid-feedback">Example Upload Prouduct imgs</div>
          </div>
          </div>
      
          <button type="submit" className="btn btn-primary"  onClick={this.onSubmit}>
            {this.props.match.params.id === "new" ? "Add" : "Edit"}
          </button>

          </div>
          
        </div>
        
      </React.Fragment>
    );
  }
}

export default ProductForm;
