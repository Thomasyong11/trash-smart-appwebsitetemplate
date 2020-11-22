import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/slider2.jpg";
import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="img1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title}</h4>
        <p className="class-text text-secondary">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque elit nibh, a pharetra neque fermentum sed. In gravida
          molestie felis rhoncus aliquam. Pellentesque at vulputate erat, ac
          interdum sapien. Duis sit amet{" "}
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default Card;
