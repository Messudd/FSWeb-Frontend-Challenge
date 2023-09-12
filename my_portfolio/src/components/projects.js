import React, { useContext } from "react";
import Slider from "react-slick";
import Proje from "../components/proje";
import { dataContext } from "../context/dataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const myState = useContext(dataContext);
  const { projects } = myState.data;
  const switchThema = myState.mode;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: !switchThema ? "block" : "none",
          color: "#fff",
          backgroundColor: !switchThema && "rgb(37, 33, 40)",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Slider {...settings}>
        {projects.map((content, index) => {
          return <Proje key={index} projeData={content} />;
        })}
      </Slider>
    </>
  );
};

export default Projects;
