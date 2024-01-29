import React from "react";
import "../App.css";
// import Input from "../components/Input";

function Category({ handleChange }) {
  return (
    <>
      <div className="allcategori">
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="sneakers" name="test" />
            <span className="checkmark"></span>Sneakers
          </label>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="flats" name="test" />
            <span className="checkmark"></span>Flats
          </label>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="heels" name="test" />
            <span className="checkmark"></span>Heels
          </label>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="vans" name="test" />
            <span className="checkmark"></span>Vans
          </label>
        </div>
        </div>
    </>
  );
}
export default Category ;
