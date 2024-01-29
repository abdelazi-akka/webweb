 import Navigation from "./Tout/Nav";
// import Products from "./Products/Product";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Form from "./components/form";
import Add from "./components/add";
import Fav from "./components/fav";
import {Outlet } from "react-router-dom";

// database
// import data from "./db/data";
// import Card from "./components/Card";
import { useState } from "react";
import Home from "./Home";


function App() {
   const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // const [selectedCategory, SetSelectedCategory] = useState(null);
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

  // const filteredItems = data.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  //-------------Radio filter-----------
  // const handleChange = (event) => {
  //   SetSelectedCategory(event.target.value);
  // };
  // //-------------Buttons filter-----------
  // const handleClick = (event) => {
  //   SetSelectedCategory(event.target.value);
  // };
  // function filtreddData(data, selected, query) {
  //   let filtereddata = data;

  //   if (query) {
  //     filtereddata = filteredItems;
  //   }
    //Selected filter
  //   if (selected) {
  // //     filtereddata = filtereddata.filter(
  // //       (product) =>
  // //         product.category === selected ||
  // //         product.color === selected ||
  // //         product.company === selected ||
  // //         product.newPrice === selected ||
  // //         product.title === selected
  // //     );
  // //   }
  //   return filtereddata.map(
  //     ({ img, title, star, reviews, prevPrice, newPrice }) => (
  //       <Card
  //         key={Math.random()}
  //         img={img}
  //         title={title}
  //         star={star}
  //         reviews={reviews}
  //         prevPrice={prevPrice}
  //         newPrice={newPrice}
  //         carts={carts}
  //         setCarts={setCarts}
  //         favorites={favorites}
  //         setFavorites={setFavorites}
  //       />
  //     )
  //   );
  // }
  // const result = filtreddData(data, selectedCategory, query);

  return (
    <div className="containerAll">
      <div className="contenall">
      
      <Navigation
                query={query}
                handleInputChange={handleInputChange}
                carts={carts}
                favorites={favorites}
              />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Form" exact element={<Form />} />
          <Route path="/Add" exact element={<Add />} />
          <Route path="/Fav" exact element={<Fav />} />
        </Routes>
        <div className="aymen">
        <Outlet />
        </div>

      
      </div>
    </div>
  );
}
export default App;
