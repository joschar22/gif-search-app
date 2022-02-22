//import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  ///const [images, setImages] = useState([]);
  const {data:images, loading}=useFetchGifs(category);
 // useEffect(() => {
  //  getGifs(category).then(setImages);
 // }, [category]);

  //getGifs();

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className= 'animate__animated animate__flash'>Loading..</p> }
      
        
      <div className="cardGrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
        
    </>
  );
};
