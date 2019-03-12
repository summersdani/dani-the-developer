import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Nenewhite from '../../img/project1/nenewhite.jpg';
import Neneblack from '../../img/project1/neneblack.jpg';


class Project1 extends Component {
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
            <h2>DJ Nene</h2>
            <p>Illustrator</p>
            <img src={Nenewhite} alt="DJ Nene Project" />

            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                DJ NeNe is a djing business that was created by Stephanie Jeanty in Atlanta, GA.
                DJ NeNe specializes in Hatian and Caribbean music.
                The objective of this project was to create a minimalistic eyecatching logo that will help with
                the overall branding of her business.
              </p>
            </div>

            <img src={Neneblack} alt="DJ Nene Project" />

            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                I was contacted by my client to come up with a simple logo for her Djing business. She
                orginally sent over 3 graphic designs from the web that she wanted me to gather
                inspiration from. I study these three images to gain a better understanding of her style
                and researched DJ logos to see what was already created and popular.
              </p>
              <p>
                After my research I began the design process. I wanted to keep the logo simple but orginal
                so I opted for a modern headphone set with her name "NeNe" written out with the headphones cord.
                Once I did that I felt it was missing something and added a background color to it to contrast against
                the black or white font.
              </p>

            </div>

            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                This is one of my favorite logos I have created to date and I enjoyed the simplicity yet boldness
                of the design. I look forward to working with more graphics like this in the future.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project1;
