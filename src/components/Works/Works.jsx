import React, { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Gomez Mallol & Asociados",
      desc: "Lorem Ipsum is simply dummy text of the printing and typestting industry",
      img: "assets/login.png",
    },
    {
      id: "2",
      icon: "assets/mobile.png",
      title: "TePresto App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typestting industry",
      img: "https://play-lh.googleusercontent.com/eAdTh3oIjQgYl5wYfT6SxkCz9_MGlgNgW_nc4ByVELK7IwCWixCU9ulyOMjWpQsAxg=w1920-h969-rw",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
