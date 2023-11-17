import React from "react";

function Footer() {
  return (
    <section className="flex bg-white-grey flex-col">
      <div className="flex justify-center gap-7 items-center">
        <div className="flex flex-wrap gap-4 p-5">
          <a href="#" className="font-semibold text-caption">
            Product
          </a>
          <a href="#" className="font-semibold text-caption">
            Features
          </a>
          <a href="#" className="font-semibold text-caption">
            Resources
          </a>
        </div>
        <div className="p-5 font-semibold text-h5">
          <a href="#" className="">
            TRADE
          </a>
        </div>
        <div className="flex flex-wrap gap-4 p-5">
          <a href="#" className="font-semibold text-caption">
            About
          </a>
          <a href="#" className="font-semibold text-caption">
            Features
          </a>
          <a href="#" className="font-semibold text-caption">
            Resources
          </a>
        </div>
      </div>
      <div className="grid place-items-center">
        <hr className="w-1/2 border-t-2 border-dark-grey" />
      </div>
      <div className="flex justify-center gap-5 p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
          className="h-16 w-16 object-cover rounded-full my-3"
          alt="nope"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
          className="h-16 w-16 object-cover rounded-full my-3"
          alt="nope"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
          className="h-16 w-16 object-cover rounded-full my-3"
          alt="nope"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
          className="h-16 w-16 object-cover rounded-full my-3"
          alt="nope"
        />
      </div>

      <div className="text-center text-caption p-4">
        © 2010 — 2020 Privacy — Terms
      </div>
    </section>
  );
}

export default Footer;
