// import { AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "../components/fav";
// import "../components/add";
function Card({
  favorites,
  setFavorites,
  carts,
  setCarts,
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  function addToCart(cartTitle) {
    let newCart = carts.filter((c) => c != cartTitle);
    newCart.push(cartTitle);
    setCarts(newCart);
  }
  function addToFavorites(cartTitle) {
    let newFavs = favorites.filter((c) => c != cartTitle);
    newFavs.push(cartTitle);
    setFavorites(newFavs);
  }
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-drtails">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <div>
              {star}
              {star}
              {star}
              {star}
            </div>
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="bag">
              {favorites.includes(title) && (
                <FaHeart color="red" className="nav-icons" />
              )}
              {!favorites.includes(title) && (
                <FiHeart
                  className="nav-icons"
                  onClick={() => addToFavorites(title)}
                />
              )}

              <Link to="#" className="button" onClick={() => addToCart(title)}>
                Add to cart
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default Card;
