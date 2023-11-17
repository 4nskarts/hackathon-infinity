import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import "../styles/testimonial.css";

export default function Testimonial() {
  const slider = useRef(null);

  const testimonialData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "-no one-",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "-no one-",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "-no one-",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "-no one-",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "-no one-",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    },
    
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 1500,
    autoplay: true,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            adaptiveHeight: true,
            lazyLoad: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            adaptiveHeight: true,
            lazyLoad: true,
          },
        },
      ],
  };

  return (
    <div className="carousel ">
      <Slider ref={slider} {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index}>
            <div className="text-center container-test flex flex-col items-center justify-center bg-transparent">
              <div className="text-grey overflow-auto mx-2" style={{ maxHeight: '150px', width: '100%', overflowY: 'auto' }}>
                {testimonial.text}
              </div>
              <img src={testimonial.imageUrl} className="h-16 w-16 object-cover rounded-full my-3" alt="nope" />
              <div className="font-bold text-primaryGreen">{testimonial.author}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}