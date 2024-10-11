import React from "react";
import "./Menu.css";
import { menuList } from "../../assets";

const Menu = ({category, setCategory}) => {
  return <div className="explore-menu" id="explore-menu">
    <h1>Explore our menu</h1>
    <p className="explore-menu-text">Choose from a diverse menu featuring</p>
    <div className="explore-menu-list">
        {menuList.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?'active':''} src={item.menu_image} alt={item.menu_name} />
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
    </div>
    <hr />
  </div>;
};

export default Menu;
