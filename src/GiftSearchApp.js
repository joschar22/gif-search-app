import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftSearchApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  return (
    <>
      <h1 >GiftSearchApp</h1>
      <AddCategory setCategories={setCategories} />
      <h2 className="myname"> from  jose chaqquere rea </h2>
      <hr />
      

      <ol className="lista">
        {
        categories.map((category) => (
          <GifGrid 
           key={category} 
           category={category} 
          />
        ))
        }
      </ol>
    </>
  );
};
