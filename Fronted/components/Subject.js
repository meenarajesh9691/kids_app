import React, { useEffect } from "react";
import Slider from "react-slick";
import $ from "jquery";
import Router from "next/router";
import Navbar from "./Navbar";

const Subject = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    $(() => {
      $("#lesson").click(() => {
        Router.push("/english");
      });
    });
  });

  return (
    <>
      <div className="box">
        <Navbar />
        <div className="container-lg mt-4 rounded-5 p-5 bg-danger">
          <h1 className="text-center pb-3 text-warning"> SUBJECTS</h1>

          <Slider {...settings}>
            <div>
              <div id="lesson" className="slide_box">
                <h1 className="english text-center">English</h1>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-vector/children-holding-english-letters_1308-50014.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="slide_box">
                <h1 className="maths text-center">Maths</h1>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-vector/set-different-children-holding-math-number_1308-46512.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="slide_box">
                <h1 className="hindi text-center">Hindi</h1>
                <img
                  className="card-img-top"
                  src="https://www.estudynotes.com/wp-content/uploads/2019/03/estudy-notes-hindi-worksheets.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="slide_box">
                <h1 className="english text-center">EVS</h1>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-vector/children-holding-english-letters_1308-50014.jpg"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Subject;
