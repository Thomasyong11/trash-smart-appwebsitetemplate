import React, { Component } from "react";
import Card from "./cardui";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/slider2.jpg";
class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {/* import the image you want to use and
              insert it  here */}
            <Card imgsrc={img1} title="CARD TITLE" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="CARD TITLE" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="CARD TITLE" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
