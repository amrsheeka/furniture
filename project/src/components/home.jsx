import React, { Component } from "react";
import {  Link, NavLink } from "react-router-dom";
import img2 from "../components/imgs/Capture3.PNG";
import img3 from "../components/imgs/Capture2.PNG";
import img4 from "../components/imgs/Capture8.PNG";
import fsce from "../components/imgs/face.png";
import gmail from "../components/imgs/gmail.png";
import inn from "../components/imgs/inn.png";
import instagrag from "../components/imgs/instagram.png";
import tw from "../components/imgs/tw.png";
import youtube from "../components/imgs/youtube.png";
import img12 from "../components/imgs/Capture.PNG";


class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

        <div className="sale" >
          <a href="/">
            <img className="homefirst" src={img12} alt="" />
          </a>
        </div>
        
        <div className="sleeproom">
        
          <h5 className="sleeproom">Bed room</h5>
          
        </div>
        <hr />
        
          <NavLink className="srrrer" to={"./sereer"}>
            <img className="srrrer" src={img2} alt=""  />
            </NavLink>
        
           
        <div className="sleeproom">
          {" "}
          <h5 className="sleeproom">Wardrobe</h5>
        </div>
        <hr />

        <div className="kanaba">
        <NavLink className="kanaba" to={"./dolab"}>
            <img className="kanaba" src={img3} alt=""  />
            </NavLink>
        </div>
        
        <div className="sleeproom">
          {" "}
          <h5 className="sleeproom">Living room</h5>
        </div>
        <hr />
        <div className="salon">
        <NavLink className="kanaba" to={"./salon"} >
            <img className="kanaba" src={img4} alt=""  />
            </NavLink>
        </div>

        <hr></hr>
        {/* الحته السوده اللي تحت  */}
{/*         
        <div className="box">

        <div className="fac">
          <a href="">
            <img className="fac" src={fsce} alt="" />
          </a>
        </div>
        <div className="fac">
          <a href="">
            <img className="fac" src={gmail} alt="" />
          </a>
        </div>
        <div className="fac">
          <a href="">
            <img className="fac" src={inn} alt="" />
          </a>
        </div>
        <div className="fac">
          <a href="">
            <img className="fac" src={instagrag} alt="" />
          </a>
        </div>
        <div className="fac">
          <a href="">
            <img className="fac" src={tw} alt="" />
          </a>
        </div>
        <div className="fac">
          <a href="">
            <img className="fac" src={youtube} alt="" />
          </a>
          
        </div>
        
        <a >Phone: 01006046488 </a>
        <a > Gmail: memosalah553@gamil.com</a>
        <a  herf="#"> فرع الكويت</a>
        <a  herf="#" > فرع السعوديه</a>
    </div> */}

<footer class="bg-white text-dark pt-5 pb-4">

	<div class="container text-center text-md-left">

		<div class="row text-center text-md-left">

			<div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
				<h5 class="text-uppercase mb-4 font-weight-bold text-warning">Modern Store</h5>
				<p>Modern is a store that sells stylish and modern furniture for the home, and the brand will provide a new experience in the world of online shopping, which makes it more convenient to order products and get after-sales support also with the shipping service to the door of the house and the possibility of return within 15 days, we will always be happy when serving you in Modern Store</p>
				
			</div>

			<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 class="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
			<p>
      <NavLink className="text-dark" to={"/sereer"}>Bed room</NavLink>	
			</p>
			<p>
      <NavLink className="text-dark" to={"/salon"}>Living Room</NavLink>	
			</p>
			<p>
      <NavLink className="text-dark" to={"/dolab"}>Wardrobe</NavLink>	
			</p>
			
			
			</div>

			<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 class="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
			<p>
      <NavLink className="text-dark" to={"/signup"}>Sign-Up</NavLink>	
			</p>
			<p>
      <NavLink className="text-dark" to={"/login"}>Log-In</NavLink>	
      		</p>
			<p>
      <NavLink className="text-dark" to={"/about"}>About Us</NavLink>	
			</p>
			
			</div>

			<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
				<h5 class="text-uppercase mb-4 font-weight-bold text-warning" >Contact</h5>
				<p>
					<i class="fas fa-home mr-3"></i>Cairo, Ca 2333, EG
				</p>
				<p>
					<i class="fas fa-envelope mr-3"></i>201927036@std.sci.cu.edu.eg
				</p>
				<p>
					<i class="fas fa-phone mr-3"></i>+02 01112827510
				</p>
				<p>
					<i class="fas fa-print	 mr-3"></i>+02 01008980681
				</p>
			</div>
			
		</div>


		<div class="row align-items-center">

			<div class="col-md-7 col-lg-8">
				<p>	Copyright ©2020 All rights reserved by : 
					<a >
						<strong class="text-warning"> Modern Store</strong>
					</a></p>
				
			</div>

			<div class="col-md-5 col-lg-4">
				<div class="text-center text-md-right">

					<ul class="list-unstyled list-inline">
						<li class="list-inline-item">
							<a href="https://www.facebook.com/Abdelfatahelsaqa"target="_blank" class="btn-floating btn-lg text-dark"><i class="fab fa-facebook"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="https://t.me/Body_Ex"target="_blank" class="btn-floating btn-lg text-dark" ><i class="fab fa-telegram"></i></a>
						</li>
						
						<li class="list-inline-item">
							<a href="https://wa.me/201112827510"target="_blank" class="btn-floating btn-lg text-dark" ><i class="fab fa-whatsapp"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="https://instagram.com/a_b_d_o_e_x"target="_blank" class="btn-floating btn-lg text-dark" ><i class="fab fa-instagram"></i></a>
						</li>
					</ul>
					
				</div>
				
			</div>
			
		</div>

	</div>
	
</footer>
        
      </React.Fragment>
    );
  }
}

export default Home;
