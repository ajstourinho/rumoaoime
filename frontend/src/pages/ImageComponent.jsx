import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axiosInstance";

function ImageComponent() {
  const [imageSrc, setImageSrc] = useState("");


  useEffect(() => {
    axiosInstance
      .get("/image", {
        responseType: "arraybuffer", // Important for handling binary data
        headers: {
          Accept: "image/png",
        },
      })
      .then((response) => {
        // Convert the ArrayBuffer to base64
        const base64String = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        // Set the image source to the Data URL
        setImageSrc(`data:image/png;base64,${base64String}`);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return <img src={imageSrc} alt="Fetched Image" />;
}

export default ImageComponent;
