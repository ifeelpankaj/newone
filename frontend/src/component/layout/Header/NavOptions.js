import React, { Fragment } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdStoreMallDirectory } from "react-icons/md";
import { MdViewCompact } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const NavOptions = () => {
  return (
    <Fragment>
      <div className="main-container">
        <div className="flex-container">

          <div className="Navbar">
            <NavLink exact to='/'  ><AiFillHome /></NavLink>
            <div className="Navbar-title">  Home</div>

          </div>

          <div className="Navbar">
            <NavLink exact to='/prepare' activeClassName="active"><FaClipboardList /></NavLink>
            <div className="Navbar-title"> Content</div>

          </div>

          <div className="Navbar">
            <NavLink exact to='/papers' activeClassName="active"><IoNewspaperOutline /></NavLink>
            <div className="Navbar-title"> Paper</div>

          </div>

          <div className="Navbar">
            <NavLink exact to='/products' activeClassName="active"><MdStoreMallDirectory /> </NavLink>
            <div className="Navbar-title">Shop</div>

          </div>

          <div className="Navbar">
            <NavLink exact to='/job' activeClassName="active"><MdViewCompact />  </NavLink>
            <div className="Navbar-title"> Vacancy</div>

          </div>

          <div className="Navbar">
            <NavLink exact to='/login' activeClassName="active"><BsFillPersonFill />  </NavLink>
            <div className="Navbar-title">Account</div>

          </div>

        </div>

      </div>

    </Fragment>
  );
};

export default NavOptions;
