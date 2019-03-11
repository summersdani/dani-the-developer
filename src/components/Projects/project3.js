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
            <h2>NappyDanny</h2>
            <p>Illustrator</p>
            <img src={Xaucelogo} alt="xauce logo" />
          </Modal>




      </div>
    );
  }
}

export default Project3;
