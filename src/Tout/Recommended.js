import React from "react";
import "../App.css";
import Buttons from "../components/Buttons";

function Recommended({ handleClick }) {
  return (
    <div className="content-reconn">
      {/* <span className="recommendation-title">Recommended</span> */}
      <div className="recommendation-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}
export default Recommended;
