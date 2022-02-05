import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics({count}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/1")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  }, {});
// Component rendering-render-useEffect-useEffect called-setState-render

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;
