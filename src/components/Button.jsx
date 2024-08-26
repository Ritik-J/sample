import React from "react";
import PixabayContext from "../context/pixabayContext";
import { useContext } from "react";

const Button = () => {
  const { fetchImageByCategory } = useContext(PixabayContext);
  return (
    <div className="my-3 d-flex justify-content-center align-items-center">
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("nature")}
      >
        Nature
      </button>
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("science")}
      >
        Science
      </button>
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("education")}
      >
        Education
      </button>
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("feelings")}
      >
        Feelings
      </button>
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("sports")}
      >
        Sports
      </button>
      <button
        className="btn btn-primary mx-3"
        type="button"
        onClick={() => fetchImageByCategory("music")}
      >
        Music
      </button>
    </div>
  );
};

export default Button;
