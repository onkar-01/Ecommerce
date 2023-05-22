import React, { useState, useEffect } from "react";

const Main = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const img = [
    "https://res.cloudinary.com/dwceepc2n/image/upload/v1684432068/Our_Products_x9g8k8.jpg",
    "https://res.cloudinary.com/dwceepc2n/image/upload/v1684425073/Home_oy34hr.jpg",
    "https://res.cloudinary.com/dwceepc2n/image/upload/v1684431783/About_Us_l1kvzc.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (imageIndex + 1) % img.length;
      setImageIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const homeStyle = {
    background: `url(${img[imageIndex]}) center center `,
  };

  return (
    <div>
      <main>
        <section className="home" style={homeStyle}></section>
      </main>
    </div>
  );
};

export default Main;
