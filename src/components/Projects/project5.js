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
          </Modal>




      </div>
    );
  }
}

export default Project5;
