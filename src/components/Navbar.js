import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; //import PropTypes from "prop-types";

/**
 *
 * @param {String} navLink1 - Link to a custom route 1
 * @param {String} navItem1 - Displayed name of custom route 1
 * @param {String} navItem2 - Displayed name of custom route 2
 * @returns {Navbar} - Component Navbar, displayed at the top of each page
 */
function Navbar(props) {
  return (
    <nav className='cyan darken-4'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          College HUNT
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to={props.navLink1}>{props.navItem1}</Link>
          </li>
          <li>
            <a href='http://localhost:3000/'>{props.navItem2}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
