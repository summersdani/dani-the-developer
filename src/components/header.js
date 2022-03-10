import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HoverImage from "react-hover-image"
import Logo from '../img/logo.png'
import Linkedin from '../img/linkedinicon.png'
import Linkedincolor from '../img/linkediniconcolor.png'
import Github from '../img/github.png'
import Githubcolor from '../img/githubcolor.png'
import Behance from '../img/behanceicon.png'
import Behancecolor from '../img/behanceiconcolor.png'


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
          <a href="https://github.com/summersdani" target="_blank">
            <HoverImage
                src={Github}
                hoverSrc={Githubcolor}
              />
            </a>
            <a href="https://www.behance.net/danibsumme422f" target="_blank">
              <HoverImage
                  src={Behance}
                  hoverSrc={Behancecolor}
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
                  <li><a href="/" onClick={this.closeMenu}>Home</a></li>
                  <li><a href="/components/about" onClick={this.closeMenu}>About</a></li>
                  <li><a onClick={this.closeMenu} href="/components/portfolio">Portfolio</a></li>
                  <li><a onClick={this.closeMenu} href="/components/contact">Contact</a></li>
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
