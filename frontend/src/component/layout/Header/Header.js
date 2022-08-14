import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsSearch ,BsFillBagFill} from "react-icons/bs";






const Header = () => {
  return <ReactNavbar burgerColorHover= "#9e9e9e"
  logo={logo}
  burgerColor= "#fba92c"
  logoWidth= "20vmax"
  navColor1= "black"
  logoHoverSize= "15px"
  logoHoverColor= "#eb4034"
  link1Text= "Home"
  link2Text= "Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "1.3vmax"
  link1Color= "white"
  link1Family="Franklin Gothic Medium"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#00ff00"
  link1Margin= "1vmax"
  profileIconUrl= "/login"
  profileIconColor= "whitesmoke"
  searchIconColor= "whitesmoke"
  cartIconColor= "whitesmoke"
  profileIconColorHover= "#eb4034"
  searchIconColorHover= "#eb4034"
  cartIconColorHover= "#eb4034"
  cartIconMargin= "1vmax"
  profileIcon={true}
  ProfileIconElement={IoPersonCircleOutline}
  searchIcon={true}
  SearchIconElement={BsSearch}
  cartIcon = {true}
  CartIconElement={BsFillBagFill}
  />





};

export default Header;
