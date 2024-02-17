import logo from "../images/Fast-Food-icon.png";
import { useState } from "react";
const Header = () => {
  let [login,setLogin]=useState(false)
  const loginButton=()=>{
    setLogin(preValue=>!preValue)
  
  }
    return (
      <nav className="nav-container">
        <img src={logo} alt="food-app-logo" />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li><button onClick={()=>loginButton()}>{login?"sign Out":"sign In"}</button></li>
          </ul>
        </div>
      </nav>
    );
  };
  export default Header;