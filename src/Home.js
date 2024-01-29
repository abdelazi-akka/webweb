import React from "react";
import data from "./db/data";
import Card from "./components/Card";
import { useState } from "react";

import Vidio from "./Tout/Vidio";

import Products from "./Tout/Product";
import Recommended from "./Tout/Recommended";
import Sidebar from "./Tout/Sidebar";
export default function Home() {
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [selectedCategory, SetSelectedCategory] = useState(null);
  //-------------Input filter-----------
  // const [query, setQuery] = useState("");
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  // const filteredItems = data.filter(
  //   (product) =>
  //     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
  //     -1
  // );
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //-------------Radio filter-----------
  const handleChange = (event) => {
    SetSelectedCategory(event.target.value);
  };
  //-------------Buttons filter-----------
  const handleClick = (event) => {
    SetSelectedCategory(event.target.value);
  };
  function filtreddData(data, selected, query) {
    let filtereddata = data;

    if (query) {
      filtereddata = filteredItems;
    }
    //Selected filter
    if (selected) {
      filtereddata = filtereddata.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
      );
    }
    return filtereddata.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          carts={carts}
          setCarts={setCarts}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )
    );
  }
  const result = filtreddData(data, selectedCategory, query);

  return (
    <>
      <div className="vd">
      <img src='https://m.media-amazon.com/images/I/71YxTXQ2YYL._AC_SX679_.jpg' alt=''/>
      <Vidio/>
    </div>
    
    <div className="todos">
     <Sidebar handleChange={handleChange} />
      <div className="tout">
       
        <Recommended handleClick={handleClick} />
        <Products result={result} carts={carts} setCarts={setCarts} />
      </div>
    </div>
    </>
  );
}
