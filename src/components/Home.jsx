import React from "react";
import { useContext } from "react";
import PixabayContext from "../context/pixabayContext";
import "../index.css";
import Button from "./button";
const Home = () => {
  const { imageApiData } = useContext(PixabayContext);
  return (
    <>
      <Button />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          margin: "40px 9px",
        }}
      >
        {imageApiData.map((image) => (
          <div key={image.id} style={{ cursor: "pointer" }}>
            <img id="image" src={image.largeImageURL} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
