import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HoverImage from "react-hover-image"
import Rightarrow from '../img/rightarrow.png'
import Rightarrowcolor from '../img/rightarrowcolor.png'
import Leftarrow from '../img/arrowleft.png'
import Leftarrowcolor from '../img/arrowleftcolor.png'
import Me from '../img/aboutimg.png'

class About extends Component {
  render() {
    return (

      <div className="container-fluid">
      <div className="wrapper">
      <div className="arrows">
        <div className="arrowRight">
          <Link to="/components/portfolio">
          <HoverImage
              src={Rightarrow}
              hoverSrc={Rightarrowcolor}
            />
          </Link>
        </div>
        <div className="arrowLeft">
          <Link to="/">
          <HoverImage
              src={Leftarrow}
              hoverSrc={Leftarrowcolor}
            />
          </Link>
        </div>
      </div>

          <h1>
            about
          </h1>

          <div className="left-column">
          <p>
            <div id="me"><img src={Me} alt="Dani Summers" /></div>
            Danielle Knight graduated on December of 2018 from Kennesaw State University
            with a bachelor of business administration in Information Systems.
            She has experience in web development, graphic design, social media management,
            SEO, customer service, and more. She currently holds a position as
            Web App Developer at S.P. Richards. Her current role consist of resurfacing frontend pages using
            .Net MVC Framework, C#, JavaScript, HTML, and CSS.
            Danielle works with APIs, creates new features like shopping carts, creates SQL tables, production support,
            and trouble shooting.
            Currently, Danielle first found her love in coding through Wordpress, using HTML, CSS, and PHP to create breathtaking sites for her clients and herself.
            </p>
          </div>
          <div className="right-column">
            <h2>TECHNICAL COMPETENCIES</h2>
            <ul>
              <li>JavaScript, JSON, HTML5, CSS/SCSS, PHP, C#, Bootstrap, SQL</li>
              <li>Visual Studio - MVC Framework</li>
              <li>WordPress</li>
              <li>Amazon Web Server (AWS)</li>
              <li>Microsoft Office Suite - Word, PowerPoint, Excel, Visio, Access</li>
            </ul>

          </div>
        </div>

      </div>
    );
  }
}

export default About;
