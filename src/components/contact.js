import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HoverImage from "react-hover-image"
import Rightarrow from '../img/rightarrow.png'
import Rightarrowcolor from '../img/rightarrowcolor.png'
import Leftarrow from '../img/arrowleft.png'
import Leftarrowcolor from '../img/arrowleftcolor.png'
import Paperplane from '../img/paperplane.png'

import Linkedin from '../img/linkedinicon.png'
import Linkedincolor from '../img/linkediniconcolor.png'
import Dribble from '../img/dribbleicon.png'
import Dribblecolor from '../img/dribbleiconcolor.png'
import Behance from '../img/behanceicon.png'
import Behancecolor from '../img/behanceiconcolor.png'
import Instagram from '../img/instagramicon.png'
import Instagramcolor from '../img/instagramiconcolor.png'


class Contact extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="wrapper">
          <div className="arrows">
            <div className="arrowLeft">
              <Link to="/components/portfolio">
              <HoverImage
                  src={Leftarrow}
                  hoverSrc={Leftarrowcolor}
                />
              </Link>
            </div>
          </div>
            <h1>contact</h1>

              <div className="aligncenter">
                <img src={Paperplane} alt="Paper Plane" />
                <h2>E-mail</h2>
                <p id="contact-text"><a href="mailto:danibsummers@gmail.com">danibsummers@gmail.com</a></p>


                <div id="socialcontact" className="socialbuttons">
                  <a href="https://www.linkedin.com/in/danielle-summers/" target="_blank">
                    <HoverImage
                        src={Linkedin}
                        hoverSrc={Linkedincolor}
                      />
                    </a>
                    <a href="#" target="_blank">
                      <HoverImage
                          src={Dribble}
                          hoverSrc={Dribblecolor}
                        />
                      </a>
                      <a href="https://www.behance.net/danibsumme422f" target="_blank">
                        <HoverImage
                            src={Behance}
                            hoverSrc={Behancecolor}
                          />
                        </a>
                        <a href="https://www.instagram.com/danithecreative/" target="_blank">
                          <HoverImage
                              src={Instagram}
                              hoverSrc={Instagramcolor}
                            />
                          </a>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default Contact;
