import React, { Component } from "react";
import img1 from "../components/imgs/p1.jpeg";
import img2 from "../components/imgs/p2.jpeg";
import img3 from "../components/imgs/p3.jpeg";
import img4 from "../components/imgs/p4.jpeg";

class about extends Component {
  state = {};
  render() {
    return (

    <React.Fragment>
    <div className="card1">
      <img className="homefirst" src={img1} alt="" />
      <h2> Abdelfattah Hesham</h2>
      <p className="price">Cairo University</p>
      <p>
      <a href="https://wa.me/201112827510"target="_blank"><i class="fa fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/Abdelfatahelsaqa"target="_blank"><i class="fa fa-facebook"></i></a>
            </p>
    </div>
    <div className="card1">
      <img className="homefirst" src={img3} alt="" />
      <h2> Mustafa Salah</h2>
      <p className="price">Cairo University</p>
      <p>
      <a href="https://wa.me/201118914120"target="_blank"><i class="fa fa-whatsapp lg"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100002398553125"target="_blank"><i class="fa fa-facebook lg"></i></a>
            </p>
    </div>
    <div className="card1">
      <img className="homefirst" src={img4} alt="" />
      <h2> Ahmed Essam</h2>
      <p className="price">Cairo University</p>
      <p>
      <a href="https://wa.me/201122084056"target="_blank"><i class="fa fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/tiger.max.3344"target="_blank"><i class="fa fa-facebook"></i></a>
            </p>
    </div>
    <div className="card1">
      <img className="homefirst" src={img2} alt="" />
      <h2> Mohammed Mustafa</h2>
      <p className="price">Cairo University</p>
      <p>
      <a href="https://wa.me/201019832739"target="_blank"><i class="fa fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/mohamed.haspalla.9"target="_blank"><i class="fa fa-facebook"></i></a>
            </p>
    </div>
    <div className="card1">
      <img className="homefirst" src={img1} alt="" />
      <h2> Amr Sheeka </h2>
      <p className="price">Cairo University</p>
      <p>
      <a href="https://wa.me/201140940686"target="_blank"><i class="fa fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/amr.sheeka.1"target="_blank"><i class="fa fa-facebook"></i></a>
            </p>
    </div>
    
    </React.Fragment>
    )
  }
}
export default about;