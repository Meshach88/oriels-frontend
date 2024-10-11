import React, { useContext } from "react";
import "./FoodItem.css";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import StoreContext from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt="food image" />
        {!cartItems[id] 
        ? (
          <IoMdAdd
            className="add"
            onClick={() => addToCart(id)}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <RiSubtractFill
              onClick={() => removeFromCart(id)}
              alt="reduce amount"
              style={{ color: "red", cursor:"pointer" }}
            />
            <p>{cartItems[id]}</p>
            <IoMdAdd
              onClick={() => addToCart(id)}
              alt="increase amount"
              style={{ color: "green", cursor:"pointer" }}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img src="" alt="rating" /> */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
