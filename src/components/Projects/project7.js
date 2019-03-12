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
            <a href="http://www.theprodigystudio.com/" target="_blank"><h2>The Prodigy Studio</h2></a>
            <p>Illustrator • WordPress • Responsive</p>
            <img src={Prodigylogo} alt="The Prodigy Studio Logo" />
            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                The Prodigy Studio's mission is to develop minds while encouraging independent thinking. "In a world of cultural
                differences, we will prepare our clients by providing individualized instruction to excel in all areas of life;
                mentally, socially, and academically.""
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                I was approached by a client to create a logo and website for a company called The Prodigy Studio. The client
                wanted the color scheme to be purple to give off a royal vibe. My client also wanted to incorporate the African
                web symbol, which stands for wisdom. I used Adobe Illustrator to create a childlike feeling and incorporated the
                African web symbol over the “i” to make it resemble a flower.
              </p>
            </div>
            <img src={Prodigypage} alt="The Prodigy Studio Page" />
            <div class="project-info">
              <p>
                The website was created using Netbeans text editor, MAMPs, and Underscores.me, a starter WordPress theme. After
                researching competitive companies like Kumon I began to collect information that was necessary for the site.
                This being one of the first WordPress themes I created from a skeleton template I was intrigued by how simple
                it was to create a page across all platforms.
              </p>
              <p>
                I created a color scheme that matched the royal purple and gave it an innocent vibe and added a fun color
                changing footer background. The footer also contains a form area where users can sign up to receive newsletters
                from the company.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                I believe this site changed my views on creating web applications. I was able to be more creative and get a
                better understanding of PHP in the WordPress environment.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project6;
