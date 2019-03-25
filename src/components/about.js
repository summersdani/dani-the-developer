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
            Danielle Summers graduated on December of 2018 from Kennesaw State University
            with a bachelor of business administration in Information Systems.
            She has experience in web development, graphic design, social media management,
            SEO, customer service, and more. She currently holds a position as
            Junior Developer at Quickly Media. Her current role consist of designing front-end
            websites for clients through WordPress, trouble shooting, launching hosting through
            Amazon Web Servers, search engine optimization, creating landing pages, and
            graphic designs for iconography and social media post. Currently, Danielle is learning Node.js
            and React.js throught Udemy.com.
            </p>
            <p>
            An ideal position for her would involve creating applications through programming
            where her strong problem-solving, coding, and creative skills will be well
            utilized and further developed.
          </p>
          </div>
          <div className="right-column">
            <h2>TECHNICAL COMPETENCIES</h2>
            <ul>
              <li>MySQL</li>
              <li>Visual Studio - Visual Basic</li>
              <li>Microsoft Office Suite - Word, PowerPoint, Excel, Visio, Access</li>
              <li>HTML5, CSS3, PHP</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li>Proficient in Adobe Dreamweaver(Bootstrap Framework, ASP.NET),
              Photoshop, Illustrator</li>
              <li>Final Cut Pro X</li>
              <li>NetBeans</li>
              <li>Amazon Web Server (AWS)</li>
              <li>Atom</li>
            </ul>

          </div>
        </div>

      </div>
    );
  }
}

export default About;
