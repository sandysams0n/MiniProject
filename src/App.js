import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/index";
import About from "./screens/About";
import Wishlist from "./screens/Wishlist";
import NotFound from "./screens/NotFound";

/**
 * App component that contains all the routes and components of the application
 *
 */
function App() {
  useEffect(() => {
    //Initializing Materialize JS
    M.AutoInit();
    //eslint-disable-next-line
  });
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='about/:name' element={<About />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
