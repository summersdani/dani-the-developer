import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Xaucelogo from '../../img/project3/xaucelogo.jpg';


class Project3 extends Component {
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
      <div>


            <div className="modal-project" onClick = {this.showModal}>
          </div>

          <Modal onClose={this.showModal} show={this.state.show}>
            <a href="http://xaucē.com/" target="_blank"><h2>xaucē</h2></a>
            <p>Illustrator</p>
            <img src={Xaucelogo} alt="xauce logo" />
            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                “xaucē (pronounced saucy) is a media entertainment company that provides influencers with services that
                include audience development, logo creation, web design, creator collaborations, the ability to run
                effective social media ads, and most importantly ENTERTAINMENT.”
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                The thought process behind xaucē and it’s brand was to make it apart of hip hop culture. The client wanted
                the logo to be bold to give a strong reliable stance but also have that “saucy” feel to it. Using Adobe
                Illustrator I played around with bold fonts and added a detail to the “X” to make it stand out more than
                the rest of the letters. I wanted the “X” to be different than the rest because it can stand-alone and still
                represent the brand. I also added some drips to the first and last letters to add the sauce effect. Because
                the brand wants to appeal to influencer, which are mostly younger kids and millennial, I kept the color of the
                font black but gave the background a bright mustard color.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                Like all of my graphic design work, I kept this simple and only added small details that made it stand out. This
                is one of my favorite logo creations right next to the “DJ NeNe” logo.
              </p>
          </div>
          </Modal>




      </div>
    );
  }
}

export default Project3;
