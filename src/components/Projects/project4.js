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
            <h2>Housing Hero</h2>
            <p>WordPress • Landing Page • Responsive</p>
            <img src={Housinghero} alt="Housing Hero Landing Page" />
          </Modal>




      </div>
    );
  }
}

export default Project4;
