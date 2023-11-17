function About() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg",
  ];

  return (
    <div className="font-Quicksand py-7 text-center">
      <div className="text-black text-h4">
        Trusted by the World’s Best Companies
      </div>
      <div className="flex justify-center flex-wrap mt-5">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="h-16 w-24 object-cover rounded-md m-3"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
