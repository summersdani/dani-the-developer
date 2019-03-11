import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HoverImage from "react-hover-image"
import Rightarrow from '../img/rightarrow.png'
import Rightarrowcolor from '../img/rightarrowcolor.png'


class Landingpage extends Component {
  render() {
    return (

      <div className="introduction">
      <div className="arrows">
        <div className="arrowRight">
          <Link to="/components/about">
          <HoverImage
              src={Rightarrow}
              hoverSrc={Rightarrowcolor}
            />
          </Link>
        </div>
      </div>

          <h1>
            hello! <br />
            my name is danielle <br />
          </h1>

          <div id="intro">
            <p>
              I am a front-end developer and graphic design artist.
              I also dabble in photography, animation, and videography
              just to name a few.
            </p>
          </div>
      
      </div>

    );
  }
}

export default Landingpage;