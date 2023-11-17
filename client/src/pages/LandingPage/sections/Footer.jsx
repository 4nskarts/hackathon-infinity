import React from "react";

const FooterLink = ({ href, text }) => (
  <a href={href} className="font-semibold text-caption">
    {text}
  </a>
);

const FooterImage = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
    className="h-16 w-16 object-cover rounded-full my-3"
    alt="nope"
  />
);

function Footer() {
  const footerLinks1 = [
    { href: "#", text: "Product" },
    { href: "#", text: "Features" },
    { href: "#", text: "Resources" },
  ];

  const footerLinks2 = [
    { href: "#", text: "About" },
    { href: "#", text: "Features" },
    { href: "#", text: "Resources" },
  ];

  return (
    <section className="flex flex-col bg-white-grey text-blue">
      <div className="flex justify-center gap-7 items-center p-5">
        <div className="flex flex-wrap gap-4">
          {footerLinks1.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
        <div className="p-5 font-semibold text-h5">
          <FooterLink href="#" text="TRADE" />
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks2.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="grid place-items-center">
        <hr className="w-1/2 border-t-2 border-dark-grey" />
      </div>
      {/* <div className="flex justify-center gap-5 p-4">
        {[...Array(4)].map((_, index) => (
          <FooterImage key={index} />
        ))}
      </div> */}
      <div className="text-center text-caption p-4">
        © 2010 — 2020 Privacy — Terms
      </div>
    </section>
  );
}

export default Footer;
