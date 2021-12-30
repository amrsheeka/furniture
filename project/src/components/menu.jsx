import React from "react";
import Cart from "./cart";
import { Link } from "react-router-dom";
import img3 from "../components/imgs/s1.jpeg";
import img4 from "../components/imgs/s2.jpeg";
import img5 from "../components/imgs/s5.jpeg";

//1. Component
const Menu = (props) => {
  return (
    <React.Fragment>
      <h1>All Products</h1>
        
        
        
        
      
          {/* بعرض كل حاجه ل كل منتج ده البدي بتاع المنيو */}
          {props.products.map((product) => (
            
            <div className="card">
              <div>

                <div> <img className="homefirst" src={product.ImagePath}  alt="" /> </div>

                <div>
              <Link to={`/products/${product.id}`}>{product.ProductName}</Link>
                </div>
              
              <div>{product.Price}  $</div>
              <div>{product.Description}</div>

              <div>
                {/* ده اللي بيشوف البرودكت في الشوب ولا لا و لو في الشراي هيغير لونها */}
                <Cart onClick={props.onClick} product={product} />
              </div>
              
              </div>
              </div>

              
          ))}
          
         
        
        
      
    </React.Fragment>
  );
};

export default Menu;