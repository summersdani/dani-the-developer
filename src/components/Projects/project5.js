import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Ndcartoon from '../../img/project5/ndcartoon.jpg';


class Project5 extends Component {
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
            <h2>NappyDanny Cartoon</h2>
            <p>Illustrator</p>
            <img src={Ndcartoon} alt="NappyDanny Character" />
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                I created this cartoon character of myself just for fun using Adobe Illustrator. I took a picture that I
                had and began to trace over it with the pen tool. Because the original image was cut off I added drips
                to the end to add character.
                I used bold black lines only on the face and body to make it stand out more than the hair outline. 
                To finish off the look and make it pop, I added a highlight to the check bones and collarbones.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project5;
