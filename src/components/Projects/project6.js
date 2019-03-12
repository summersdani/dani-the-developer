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
            <a href="http://studentweb.kennesaw.edu/~dsummer8/3260/project/html/" target="_blank"><h2>LA Hair</h2></a>
            <p>Dreamweaver • ASP.NET</p>
            <img src={Lahair} alt="LA Hair Class Project" />
            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                LA Hair is a hair care and hair extension company that my group and I had to recreate in my Web Development I course.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                We were given a website that needed to be recreated into a more clean and user friendly look. Before we started we
                had to do
                research on the current site as well as the company’s competitors. After we did research we sketched out how
                we wanted the layout to look and came up with a feminine color scheme. As the web developer of the group I
                began creating the master page of the site in Dreamweaver using ASP.NET. I was in charge of creating the look
                and layout and assigning each member to pages to add the content.
              </p>
              <p>
                On the contact page I created a contact form that submits information to the companies email. I also added a Google maps
                so users can easily find the company’s location. In the footer area, I made sure to add the contact number along
                with custom made social media icons that redirect to the company’s social sites. As part of the project requirements,
                the footer area also displays a secondary nav section that displays the frequently asked questions, credits, site map,
                and a feedback form where users can submit feedback on the website so we can updated to increase positive user
                experience.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                I loved creating this site because it brought back the love of creating sites using simple HTML5, CSS3, and
                JavaScript. I had fun working with Dreamweaver although I worked with the software in the past; I was able to
                learn a lot more especially through ASP.NET.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project6;
