import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./navbar";
import ShoppingCart from "./shoppingCart";
import Home from "./home";
import ProductDetails from "./productDetails";
import Menu from "./menu";
import Login from "./login";
import signup from "./signup";
import Admin from "./admin";
import ProductForm from "./ProductForm";
import sereer from "./sereer";
import dolab from "./dolab";
import salon from "./salon";
import check from "./check";
import about from "./about";

class App extends Component {
  state = {
    products: [
      {name: "",
        id:"",
        price: "",
        count: 0,
        isInCart: false,
        section: "",
        imagePath: "",
        description: ""
      }
    ]
  };
  
  
async componentDidMount() {
  //Call Backend
  let { data } = await axios.get(
    "http://localhost:3000"
    
  );
  //Set State
  this.setState({ products: data });
}
  
  onSubmit = ()=>{
  console.log(this.state);
  
  fetch('http://localhost:3000/insertproduct',{
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
        imagePath: this.state.imagePath,
        description: this.state.description,
        section: this.state.section
      })
  })
}

  handleDelete = async (product) => {
    
    const oldProducts = [...this.state.products];

    //State
    //Clone
    //Edit
    const products = this.state.products.filter((p) => p.Id !== product.Id);
    //Set state
    this.setState({ products });

    try {
      //Call B
      await axios.delete(
        "http://localhost:3000" + product.Id
      );
    } catch (ex) {
      toast("Cant Delete");
      this.setState({ products: oldProducts });
    }
  };

  handleEdit = () => {
    console.log("edit");
  };

  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  decrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count--;
    //Set State
    this.setState({ products });
  };

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Switch>
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/productform/:id"
              render={(props) => (
                <ProductForm {...props} products={this.state.products} />
              )}
            />
            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={signup} />
            <Route path="/check" exact component={check} />
            <Route path="/about" component={about} />


            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleInCartChange}
                  onReset={this.handleReset}
                  onDecreas={this.decrementHandler}
                  {...props}
                />
              )}
            />
            {/* <Route path="/notfound" component={NotFound} /> */}
            {/* //2. Add Route */}
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                  {...props}
                />
              )}
            />
          
            <Redirect to="/notfound" />
          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
        <main>
          <Route path="/home" exact component={Home} />
          <Redirect from="/" to="/home" />
          <Route path="/sereer" exact component={sereer} />
          <Route path="/dolab" exact component={dolab} />
          <Route path="/salon" exact component={salon} />
          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
