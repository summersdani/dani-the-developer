import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HoverImage from "react-hover-image"
import Logo from '../img/logo.png'
import Linkedin from '../img/linkedinicon.png'
import Linkedincolor from '../img/linkediniconcolor.png'
import Dribble from '../img/dribbleicon.png'
import Dribblecolor from '../img/dribbleiconcolor.png'
import Behance from '../img/behanceicon.png'
import Behancecolor from '../img/behanceiconcolor.png'
import Instagram from '../img/instagramicon.png'
import Instagramcolor from '../img/instagramiconcolor.png'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.showMenu = this.showMenu.bind(this);
  }
  showMenu() {
    console.log('Click happened');
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
}


render() {
  return (
    <header>

      <div className="logo">
        <img src={Logo} alt="Dani the Developer" />
      </div>

      <div id="socialheader" className="socialbuttons">
        <a href="https://www.linkedin.com/in/danielle-summers/" target="_blank">
          <HoverImage
              src={Linkedin}
              hoverSrc={Linkedincolor}
            />
          </a>
          <a href="#" target="_blank">
            <HoverImage
                src={Dribble}
                hoverSrc={Dribblecolor}
              />
            </a>
            <a href="https://www.behance.net/danibsumme422f" target="_blank">
              <HoverImage
                  src={Behance}
                  hoverSrc={Behancecolor}
                />
              </a>
              <a href="https://www.instagram.com/danithedeveloper/" target="_blank">
                <HoverImage
                    src={Instagram}
                    hoverSrc={Instagramcolor}
                  />
                </a>
      </div>

      <button className="hamburger hamburger--collapse" type="button" onClick={this.showMenu}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>

      {
        this.state.showMenu
          ? (
            <div
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <nav>
                <ul>
                  <li><Link onClick={this.closeMenu} to="/">Home</Link></li>
                  <li><Link onClick={this.closeMenu} to="/components/about">About</Link></li>
                  <li><Link onClick={this.closeMenu} to="/components/portfolio">Portfolio</Link></li>
                  <li><Link onClick={this.closeMenu} to="/components/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

          )
          : (
            null
          )
      }
</header>
    );

  }

}

export default Header;
