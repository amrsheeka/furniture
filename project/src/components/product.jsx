import React, { Component } from "react";

import { Link } from "react-router-dom";

class Product extends Component {
  // state = {
  //   name: this.props.product.name,
  //   count: this.props.product.count
  // };
    // ده بيغير لون المربع بتاع الارقام
  getClasses() {
    return this.props.product.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  //1.
  // renderNames() {
  //   if (this.state.names.length === 0) {
  //     return <h2>No Names</h2>;
  //   }

  //   return (
  //     <ul>
  //       {this.state.names.map(name => (
  //         <li key={name}>{name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   //1. rebind this
  //   this.clickHandler = this.clickHandler.bind(this);
  // }

  //2. rebind this

  //1.
  // increment = () => {
  //   this.IncrementHandler(2);
  // };

  componentWillUnmount() {
    console.log("Product ==> UNMOUNT");
  }

  render() {
    const { product, onIncrement, onDelete ,onDecreas} = this.props;
    return (
      // ال col  دي علشان تخلي البرودكت في كولم بعيد عن بعض
      <div className="row">
        <div className="col-2">
          <span>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </span>
        </div>
        <div className="col">
          <span className={this.getClasses()}>{product.count}</span>
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>

          {/* الزرار اللي بينقص */}
          <button
            onClick={() => onDecreas(product)}
            className="btn btn-primary btn-sm m-2"
          >
            -
          </button>
          {/* دي الحته بتاعت السله */}
          <span style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
            <i className="fas fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
