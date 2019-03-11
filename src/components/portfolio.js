import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../components/modal';
import Project1 from '../components/Projects/project1';
import Project2 from '../components/Projects/project2';
import Project3 from '../components/Projects/project3';
import Project4 from '../components/Projects/project4';
import Project5 from '../components/Projects/project5';
import Project6 from '../components/Projects/project6';
import Project7 from '../components/Projects/project7';


import HoverImage from "react-hover-image"
import Rightarrow from '../img/rightarrow.png'
import Rightarrowcolor from '../img/rightarrowcolor.png'
import Leftarrow from '../img/arrowleft.png'
import Leftarrowcolor from '../img/arrowleftcolor.png'
import Nappydanny from '../img/project2/nappydannyProject.jpg'
import Prodigy from '../img/project7/prodigyProject.jpg'
import Lahair from '../img/project6/lahair.jpg'
import Nene from '../img/project1/nene.jpg'
import Xauce from '../img/project3/xauce.jpg'
import Housinghero from '../img/project4/housingheroLP.jpg'
import Nappydannycartoon from '../img/project5/nappydannycartoon.jpg'


class Portfolio extends Component {
  state = {
    show: false
  }
  showModal = () => {
    this.setState({
      ... this.state,
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="arrows">
          <div className="arrowRight">
            <Link to="/components/contact">
            <HoverImage
                src={Rightarrow}
                hoverSrc={Rightarrowcolor}
              />
            </Link>
          </div>
          <div className="arrowLeft">
            <Link to="/components/about">
            <HoverImage
                src={Leftarrow}
                hoverSrc={Leftarrowcolor}
              />
            </Link>
          </div>
        </div>

          <h1>portfolio</h1>

          <div className="projects">

          <div className="project-wrapper" id="project1">
            <div><img src={Nene} alt="DJ NeNe Logo" /></div>
            <div className="project-wrapper-inner">

              <h2>DJ NeNe</h2>
              <div className="more">
                <p>+</p>
              </div>
              <Project1 />
            </div>

          </div>

            <div className="project-wrapper">
              <div><img src={Nappydanny} alt="NappyDanny Project" /></div>

                <div className="project-wrapper-inner">
                  <h2>NappyDanny</h2>
                  <div className="more">
                    <p>+</p>
                  </div>
                  <Project2 />
                </div>
            </div>

            <div className="project-wrapper">
              <div><img src={Xauce} alt="xaucē Logo" /></div>
              <div className="project-wrapper-inner">
                <h2>xaucē</h2>
                <div className="more">
                  <p>+</p>
                </div>
                <Project3 />
              </div>
            </div>

            <div className="project-wrapper">
              <div><img src={Housinghero} alt="Housing Hero Landing Page" /></div>
              <div className="project-wrapper-inner">
                <h2>Housing Hero</h2>
                <div className="more">
                  <p>+</p>
                </div>
                <Project4 />
              </div>
            </div>

            <div className="project-wrapper">
              <div><img src={Nappydannycartoon} alt="NappyDanny Cartoon" /></div>
              <div className="project-wrapper-inner">
                <h2>NappyDanny Cartoon</h2>
                <div className="more">
                  <p>+</p>
                </div>
                <Project5 />
              </div>
            </div>

            <div className="project-wrapper">
              <div><img src={Lahair} alt="LA Hair Class Project" /></div>
              <div className="project-wrapper-inner">
                <h2>LA Hair</h2>
                <div className="more">
                  <p>+</p>
                </div>
                <Project6 />
              </div>
            </div>

            <div className="project-wrapper">
              <div><img src={Prodigy} alt="the Prodigy Studio Porject" /></div>
              <div className="project-wrapper-inner">
                <h2>The Prodigy Studio</h2>
                <div className="more">
                  <p>+</p>
                </div>
                <Project7 />
              </div>
            </div>

          </div>

      </div>
    );
  }
}

export default Portfolio;
