 import Navigation from "./Tout/Nav";
// import Products from "./Products/Product";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import Form from "./components/form";
import Add from "./components/add";
import Fav from "./components/fav";
import {Outlet } from "react-router-dom";

// database
// import data from "./db/data";
// import Card from "./components/Card";
import { useRef, useState } from "react";
import Home from "./Home";
import imga from "./img/rehearsal-preparation-groom-s-watch-hand.jpg"


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
const idpageOne=useRef()
const idpagetow=useRef()
const idpagethree=useRef()
 const switchpage =()=>{

  idpageOne.current.style.display="none"
  idpagetow.current.style.display="flex"
  idpagethree.current.style.display="flex"
 
 } 
  return (
    <>
    <div className="containerHomeprincipa" ref={idpageOne}>
      <div className="contanetimga"><img src={imga} alt="img"/></div>
      <div className="contanetimgafilter"></div>
      <div className="contanetcontext">
        <h1>YOUR BEST MAKE WITH GOOD QUALITY</h1>
      </div>
      <div className="contantlogo"> <h2>Azize maket</h2></div>
      <div className="contentLoginPage">
        <ul>
          <li><Link to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M35.7143 0H4.28571C3.14907 0 2.05898 0.451529 1.25526 1.25526C0.451529 2.05898 0 3.14907 0 4.28571L0 35.7143C0 36.8509 0.451529 37.941 1.25526 38.7447C2.05898 39.5485 3.14907 40 4.28571 40H16.5402V26.4009H10.9152V20H16.5402V15.1214C16.5402 9.57232 19.8438 6.50714 24.9036 6.50714C27.3268 6.50714 29.8607 6.93929 29.8607 6.93929V12.3857H27.0688C24.3179 12.3857 23.4598 14.0929 23.4598 15.8437V20H29.6009L28.6188 26.4009H23.4598V40H35.7143C36.8509 40 37.941 39.5485 38.7447 38.7447C39.5485 37.941 40 36.8509 40 35.7143V4.28571C40 3.14907 39.5485 2.05898 38.7447 1.25526C37.941 0.451529 36.8509 0 35.7143 0Z" fill="black"/>
</svg></Link></li>
          <li><Link to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20.0045 9.74451C14.3291 9.74451 9.75125 14.3233 9.75125 20C9.75125 25.6767 14.3291 30.2555 20.0045 30.2555C25.6799 30.2555 30.2577 25.6767 30.2577 20C30.2577 14.3233 25.6799 9.74451 20.0045 9.74451ZM20.0045 26.6674C16.3369 26.6674 13.3385 23.6773 13.3385 20C13.3385 16.3227 16.3279 13.3326 20.0045 13.3326C23.681 13.3326 26.6704 16.3227 26.6704 20C26.6704 23.6773 23.6721 26.6674 20.0045 26.6674ZM33.0686 9.325C33.0686 10.6549 31.9978 11.7171 30.6771 11.7171C29.3475 11.7171 28.2856 10.646 28.2856 9.325C28.2856 8.00402 29.3564 6.93295 30.6771 6.93295C31.9978 6.93295 33.0686 8.00402 33.0686 9.325ZM39.8595 11.7528C39.7078 8.54848 38.976 5.71014 36.6291 3.37164C34.2911 1.03314 31.4534 0.301238 28.2499 0.140578C24.9481 -0.0468593 15.0519 -0.0468593 11.7501 0.140578C8.55549 0.292313 5.71779 1.02421 3.37089 3.36271C1.02398 5.70122 0.301171 8.53955 0.140547 11.7438C-0.0468489 15.0463 -0.0468489 24.9448 0.140547 28.2472C0.292248 31.4515 1.02398 34.2899 3.37089 36.6284C5.71779 38.9669 8.54657 39.6988 11.7501 39.8594C15.0519 40.0469 24.9481 40.0469 28.2499 39.8594C31.4534 39.7077 34.2911 38.9758 36.6291 36.6284C38.9671 34.2899 39.6988 31.4515 39.8595 28.2472C40.0469 24.9448 40.0469 15.0552 39.8595 11.7528ZM35.594 31.7907C34.8979 33.5401 33.5505 34.8879 31.7925 35.593C29.1601 36.6373 22.9136 36.3963 20.0045 36.3963C17.0954 36.3963 10.8399 36.6284 8.2164 35.593C6.46737 34.8968 5.11991 33.549 4.41495 31.7907C3.37089 29.1576 3.61182 22.9097 3.61182 20C3.61182 17.0903 3.37981 10.8334 4.41495 8.2093C5.11099 6.45989 6.45845 5.11213 8.2164 4.40701C10.8489 3.36271 17.0954 3.6037 20.0045 3.6037C22.9136 3.6037 29.169 3.37164 31.7925 4.40701C33.5416 5.1032 34.889 6.45096 35.594 8.2093C36.638 10.8424 36.3971 17.0903 36.3971 20C36.3971 22.9097 36.638 29.1666 35.594 31.7907Z" fill="black"/>
</svg></Link></li>
          <li><Link to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M37.1429 0H2.84821C1.27679 0 0 1.29464 0 2.88393V37.1161C0 38.7054 1.27679 40 2.84821 40H37.1429C38.7143 40 40 38.7054 40 37.1161V2.88393C40 1.29464 38.7143 0 37.1429 0ZM12.0893 34.2857H6.16071V15.1964H12.0982V34.2857H12.0893ZM9.125 12.5893C7.22321 12.5893 5.6875 11.0446 5.6875 9.15179C5.6875 7.25893 7.22321 5.71429 9.125 5.71429C11.0179 5.71429 12.5625 7.25893 12.5625 9.15179C12.5625 11.0536 11.0268 12.5893 9.125 12.5893ZM34.3125 34.2857H28.3839V25C28.3839 22.7857 28.3393 19.9375 25.3036 19.9375C22.2143 19.9375 21.7411 22.3482 21.7411 24.8393V34.2857H15.8125V15.1964H21.5V17.8036H21.5804C22.375 16.3036 24.3125 14.7232 27.1964 14.7232C33.1964 14.7232 34.3125 18.6786 34.3125 23.8214V34.2857Z" fill="black"/>
</svg></Link></li>
      
        </ul>
   
</div>
        <div className="contentbotom">
          <h1>Shop now</h1>
          <Link  alt="img" onClick={switchpage}>
             <svg xmlns="http://www.w3.org/2000/svg" width="173" height="82" viewBox="0 0 173 82" fill="none">
  <path d="M164 0.5C168.971 0.5 173.054 4.54298 172.473 9.47949C171.577 17.0997 169.542 24.5778 166.416 31.6887C162.069 41.5767 155.697 50.5612 147.665 58.1292C139.632 65.6972 130.097 71.7004 119.602 75.7962C109.107 79.8919 97.8593 82 86.5 82C75.1407 82 63.8925 79.8919 53.3979 75.7962C42.9032 71.7004 33.3675 65.6972 25.3353 58.1292C17.303 50.5612 10.9314 41.5767 6.58442 31.6887C3.45827 24.5777 1.42316 17.0997 0.526616 9.47948C-0.0541855 4.54297 4.02944 0.499993 9 0.499994L86.5 0.5H164Z" fill="#FFA500"/>
</svg>
            <div className="party2"> <svg xmlns="http://www.w3.org/2000/svg" width="47" height="31" viewBox="0 0 47 31" fill="none">
  <path d="M20.9544 29.2371L1.03271 9.31103C-0.344236 7.93379 -0.344236 5.70676 1.03271 4.34417L4.34323 1.03293C5.72017 -0.34431 7.94672 -0.34431 9.30901 1.03293L23.43 15.157L37.551 1.03293C38.9279 -0.34431 41.1545 -0.34431 42.5168 1.03293L45.8273 4.34417C47.2042 5.72141 47.2042 7.94844 45.8273 9.31103L25.9056 29.2371C24.5579 30.6143 22.3314 30.6143 20.9544 29.2371Z" fill="white"/>
</svg></div>
        
           </Link>
        </div>
    </div>
    
    <div className="containerAll" ref={idpagetow}>
      <div className="contenall" ref={idpagethree}>
      
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
    </div></>
  );
}
export default App;
