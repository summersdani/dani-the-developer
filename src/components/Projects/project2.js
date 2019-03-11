import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Modal from '../../components/modal';
import '../../App.css';

import Nappydannyhome from '../../img/project2/nappydannyhome.jpg';
import Nappydannyshop from '../../img/project2/nappydannyshop.png';
import Nappydannylogo from '../../img/project2/nappydannylogo.jpg';


class Project2 extends Component {
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
            <p>WordPress • Illustrator • Logo • E-Commerce • Responsive</p>
            <img src={Nappydannylogo} alt="NappyDanny Logo" />
            <img src={Nappydannyhome} alt="NappyDanny Homepage" />
            <img src={Nappydannyshop} alt="NappyDanny Shop" />
          </Modal>




      </div>
    );
  }
}

export default Project2;
