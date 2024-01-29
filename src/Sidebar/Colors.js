import React from "react";
import "../App.css";
import Input from "../components/Input";
function Colors({ handleChange }) {
  return (
    <div className="allcategori">
      <h2 className="sidebar-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handlChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handlChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handlChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <Input
          handlChange={handleChange}
          type="radio"
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handlChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="white"
        />
       
      </div>
    </div>
  );
}
export default Colors;
