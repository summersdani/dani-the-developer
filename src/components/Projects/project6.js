import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Lahair from '../../img/project6/lahairpage.png';


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
            <h2>LA Hair</h2>
            <p>Dreamweaver • ASP.NET</p>
            <img src={Lahair} alt="LA Hair Class Project" />
          </Modal>




      </div>
    );
  }
}

export default Project6;
