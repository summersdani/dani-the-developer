import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Housinghero from '../../img/project4/housinghero.png';


class Project4 extends Component {
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
            <a href="https://housinghero.net/" target="_blank"><h2>Housing Hero</h2></a>
            <p>WordPress • Landing Page • Responsive • SEO</p>
            <img src={Housinghero} alt="Housing Hero Landing Page" />
            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                Housing Hero purchases homes from people who are in a rush or do not want to deal with the tiring process
                of selling a home. Their slogan is “Sell your house in 3 days”. One of their biggest competitor is We Buy
                Ugly Houses.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                I had full creative control over the design of the website and landing page. I started off my researching
                more about other competitors like We Buy Ugly Houses, and looking at the information they provided for
                their customers. Using Amazon Web Server (AWS) to create the instance to host WordPress, I began the design
                process and coming up with a color scheme that was fun, yet muted. I made sure to optimize the site by adding titles,
                descriptions, and effective keywords to the landing page. I also tested the performance speed of the site getting
                it up to 86% on gtmetrix.com.
              </p>
              <p>
                As soon as a user lands on the landing page I made sure to display a call to action form for users to sign up,
                along with the slogan. I also added information about Housing Hero and created custom-made icons for each box.
                Next, I added the step my step process it takes to sell your home. I follow up with some testimonials to give
                the user reassurance from people like them. Finally I end it with another call to action form along with Housing
                Hero’s contact number and email.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                Housing hero was a very exciting site to develop. I was able to play with colors and use them in a way that was
                entertaining but not excessive. The most satisfying part was creating the icons to go with the strengths that
                Housing Hero provides.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project4;
