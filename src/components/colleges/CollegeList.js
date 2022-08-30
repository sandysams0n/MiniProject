import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColleges } from "../../redux/collegeSlice";
import Search from "./Search";
import images from "../../assets/images";

/**
 * @property {Function} - Accesses the state containing array of colleges
 * @returns {Search} - Component Search, which applies filter to display matching colleges
 */
const CollegeList = () => {
  const colleges = useSelector((state) => state.college.value);
  /**
   * @property {Function} - Creates a new array of objectscontaining colleges
   * fetched from API with a new field containing image for each object item.
   * @param {array<object>} temporary - adds a new key "imgUrl" whose value i an image,
   *  to each object present in array "colleges"
   * @returns {array<object>}
   */
  const newColleges = colleges.map((item) => {
    let temporary = {
      ...item,

      imgUrl: images[Math.floor(Math.random() * (images.length - 1))],
    };

    return temporary;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColleges());
    //eslint-disable-next-line
  }, []);

  return (
    //Displaying the list of colleges
    <div>
      <Search colleges={newColleges} />
    </div>
  );
};

export default CollegeList;
