import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { removeFromWishlist } from "../redux/collegeSlice";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

/**
 * Component that displays items added to Wishlist
 *
 */
function Wishlist() {
  const wishlist = useSelector((state) => state.college.wishlist);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar navItem1='Home' navLink1='/' navItem2='Logout' />
      {isAuth && (
        <div className='wishlist-container'>
          <h3>Wishlist</h3>
          {wishlist?.map((college, index) => (
            <div
              className='wishlist-item'
              key={index}
              id={college.name + index}
            >
              <i //Removes Item from Wishlist
                className='material-icons'
                onClick={() => dispatch(removeFromWishlist(college.name))}
              >
                clear
              </i>

              <p //Takes User to page containing selected college information on clicking
                onClick={() => {
                  navigate(`/about/${college.name}`, {
                    state: {
                      name: college.name,
                      place: college.country,
                      code: college.alpha_two_code,
                      website: college.web_pages,
                    },
                  });
                }}
              >
                {college.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {!isAuth && <h3>Please Sign In</h3>}
    </div>
  );
}

export default Wishlist;
