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
            <img src={Neneblack} alt="DJ Nene Project" />
          </Modal>




      </div>
    );
  }
}

export default Project1;
