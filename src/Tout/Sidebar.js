import Category from "../Sidebar/Category";
import Price from "../Sidebar/Price";
import Colors from "../Sidebar/Colors";
// import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import "../App.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="containercatego">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}
export default Sidebar;
