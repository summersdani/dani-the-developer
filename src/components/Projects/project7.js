import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Prodigylogo from '../../img/project7/prodigystudio.jpg';
import Prodigypage from '../../img/project7/prodigypage.jpg';


class Project6 extends Component {
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
            <h2>The Prodigy Studio</h2>
            <p>Illustrator • WordPress • Responsive</p>
            <img src={Prodigylogo} alt="The Prodigy Studio Logo" />
            <img src={Prodigypage} alt="The Prodigy Studio Page" />
          </Modal>




      </div>
    );
  }
}

export default Project6;
