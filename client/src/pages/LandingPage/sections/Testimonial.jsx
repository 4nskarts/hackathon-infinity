import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import "../styles/testimonial.css";
import shape2 from '../styles/assets/Group 1(2).svg'

const TestimonialItem = ({ text, author, imageUrl }) => (
  <div className="text-center container-test flex flex-col items-center justify-center  relative">
    <img
      src={imageUrl}
      className="h-24 w-24 border-4 border-black object-cover rounded-full my-3"
      alt="nope"
    />

    <div className="font-bold text-left">{author}</div>
    <div
      className="text-grey overflow-auto mx-2 align-left"
      style={{ maxHeight: "150px", width: "100%", overflowY: "auto" }}
    >
      '{text}'
    </div>
  </div>
);

export default function Testimonial() {
  const slider = useRef(null);

  const testimonialData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "━━━━━━   Simohammed Nassim   ━━━━━━",
      imageUrl:
        "https://i.pinimg.com/originals/f7/03/af/f703af92214c1f8787d386dab6d5e7b5.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "━━━━━━   Gojo Satoru   ━━━━━━",
      imageUrl:
        "https://i.pinimg.com/originals/f7/03/af/f703af92214c1f8787d386dab6d5e7b5.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "━━━━━━   Sukuna kadirou   ━━━━━━",
      imageUrl:
        "https://i.pinimg.com/originals/7a/0c/d7/7a0cd70f4ddc2230661f6d9793dc5f77.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "━━━━━━   Luffy OnePiece   ━━━━━━",
      imageUrl:
        "https://i.pinimg.com/originals/d0/46/9a/d0469aa7401e6114bb19eb6cfb6b6401.png",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ligula.",
      author: "━━━━━━   Simohammed Nassim   ━━━━━━",
      imageUrl:
        "https://i.pinimg.com/originals/f7/03/af/f703af92214c1f8787d386dab6d5e7b5.jpg",
    },
    // ... (other testimonial items)
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
    <div className="carousel" id="testimonial">
      <Slider ref={slider} {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index}>
            <TestimonialItem {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
