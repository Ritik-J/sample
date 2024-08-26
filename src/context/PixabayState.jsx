import React from "react";
import PixabayContext from "./pixabayContext";
import { useEffect } from "react";
import { useState } from "react";

const PixabayState = (props) => {
  const api_key = "33812074-64d516ea77c0f9b2d5a03f5d6";
  const [imageApiData, setimageApiData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const imageApi = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo&per_page=100`
      );
      const data = await imageApi.json();
      console.log(data.hits);
      setimageApiData(data.hits);
    };
    fetchApi();
  }, []);

  const fetchImageByCategory = async (cat) => {
    const imageApi = await fetch(
      `https://pixabay.com/api/?key=${api_key}&qcategory=${cat}&image_type=photo&per_page=100`
    );
    const data = await imageApi.json();
    console.log(data.hits);
    setimageApiData(data.hits);
  };
  return (
    <PixabayContext.Provider value={{ imageApiData, fetchImageByCategory }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
