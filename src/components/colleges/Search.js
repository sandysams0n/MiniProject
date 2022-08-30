import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/collegeSlice";

/**
 * Component that allows users to search for desired colleges in a search bar
 * and displays results that match the search
 *
 */
const Search = (props) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    //Search bar
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search Colleges...'
        onChange={(e) => setText(e.target.value)}
      />

      <div className='college-card-container'>
        {props.colleges
          //function to filter out colleges that match the searched word
          .filter((college) => college.name.toLowerCase().includes(text))
          .map((college, index) => (
            <div className='college-card' key={college.name + index} id={index}>
              <div className='vertical-container'>
                <img //image, when clicked, leads to page about selected college
                  src={college.imgUrl.img_url}
                  alt={college.name}
                  className='card-image'
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
                />
                <h5 //college name, when clicked, leads to page about selected college
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
                </h5>
                <div className='card-btn'>
                  <button //button to add items to wishlist
                    className='waves-effect waves-light btn cyan darken-4'
                    type='Submit'
                    onClick={() =>
                      dispatch(
                        addToWishlist({
                          name: college.name,
                          id: college.id,
                        })
                      )
                    }
                  >
                    <i className='material-icons'>star</i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
