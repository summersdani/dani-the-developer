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
            <a href="https://nappydanny.com" target="_blank"><h2>NappyDanny</h2></a>
            <p>WordPress • Illustrator • Logo • E-Commerce • Responsive • SEO</p>
            <img src={Nappydannylogo} alt="NappyDanny Logo" />
            <div class="project-info">
              <h3>THE <b>CLIENT</b></h3>
              <p>
                NappyDanny is a YouTube persona created to mentor black women across the globe through content surrounding
                hair care, beauty, fashion, and lifestyle videos. Currently NappyDanny has over 34,000 subscribers on
                YouTube and over 3,000 followers on Instagram.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>BRIEF</b></h3>
              <p>
                I wanted to create a logo design that was simple and elegant. I always stick with minimal looks
                becasue through research you will find the biggest brands have the simplest designs that remain timeless.
                I knew I wanted to incorporate the letters "N" and "D" from NappyDanny. Using Adobe Illustrator,
                I played around with different fonts and came up with numerous ways to merge the two letters together.
                For the font I knew I wanted something that had movement and body, nothing to bold but also not to thin.
                For the color I chose a goldish shade with a radial gradient to make it look as if it was shining. The gold
                color gives off a powerful and reliable look for my brand.
              </p>
            </div>
            <img src={Nappydannyhome} alt="NappyDanny Homepage" />
            <div class="project-info">
              <p>
                I started off by researching other blog sites, both competitive and non competitive, to get an idea of what I
                wanted nappydanny.com to look like. After gathering content and design information I set up the hosting through
                Amazon Web Server’s (AWS) Lightsail and created an instance using WordPress as the blueprint. For the themes I
                stuck with Theme Forest’s Avada Themes and began mapping out my site.
              </p>
              <p>
                I kept the main colors neutral, utilizing white as my primary color with splashes of black, gray, and light tan
                to give it a contrast. On the homepage the first thing you see is a slider showcasing my most recent blog post
                along with a button that directs you to the article. I did this because I wanted my sites main focus to be a blog.
                Having a recent post slider as the main home image draws attention to the recent post for users that come on the
                page. I also display other recent post underneath the slider image to give the user options. My most recent video
                and most popular video are displayed on the homepage as well so users can view new videos without having to go to
                my YouTube channel.
              </p>
              <p>
                Each page has a Meta title, description, and keywords to help with search engine optimization. The site is also
                linked to my Google search console and Google Analytics to measure the amount of users who visit the site.
              </p>
            </div>
            <img src={Nappydannyshop} alt="NappyDanny Shop" />
            <div class="project-info">
              <p>
                For the Shop page, I display a slideshow of images, taken by me, of waist beads that I created along with
                catchy sayings. The shop page was created using Woocommerce and the JetPack plugin to ensure it was effectively
                done. The whole site is also secure through SSL, which was done my writing command lines in the AWS Lightsail
                terminal.
              </p>
            </div>
            <div class="project-info">
              <h3>THE <b>CONCLUSION</b></h3>
              <p>
                Because this is my personal site, I enjoyed creating something that matched my style. I do see myself updating
                it in the future, because I always have new ideas and methods I want to test out.
              </p>
            </div>
          </Modal>




      </div>
    );
  }
}

export default Project2;
