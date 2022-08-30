import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./About.css";
import AboutUniversityImage from "../assets/university_about.jpg";

/**
 * Page to display details of the college name clicked from the list of colleges displayed
 */
function About() {
  const { state } = useLocation();
  const { name, place, code, website } = state;

  return (
    <div>
      <Navbar navItem1='Home' navLink1='/' navItem2='Logout' />
      <div className='about-container'>
        <div>About The University</div>
        <h4 className='college-name'>{name}</h4>
        <br />
        <img src={AboutUniversityImage} alt={name} className='about-image' />
        <br />
        <br />

        <a
          href={website}
          target='_blank'
          rel='noreferrer'
          className='college-website'
        >
          Visit College Website
        </a>
        <h6>What is Lorem Ipsum?</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h6>Why do we use it?</h6>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className='college-country'>Country: {place}</p>
        <p>Country Code: {code}</p>
      </div>
    </div>
  );
}

export default About;
