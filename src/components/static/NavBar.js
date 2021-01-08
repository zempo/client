import React from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../../utils/icons/Logo";
import "../sass/NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='logo' to='/'>
            <MainLogo /> Water My Plants
          </Link>
        </li>
        <div className='menu-wrapper'>
          <div className='menu-center'>
            <li>
              <Link className='route-link' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='route-link' to='/dashboard'>
                Dashboard
              </Link>
            </li>
          </div>
          <div className='auth-links'>
            <li>
              <Link className='auth-link' to='/login'>
                Sign In
              </Link>
            </li>
            <li>
              <Link className='auth-link' to='/register'>
                Sign Up
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
