import React, { Component } from 'react';
import '../App.css';

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdropStyle">
      <div className="modalStyle">
        {this.props.children}

        <div className="closeStyle">
          <button onClick={(e) => { this.onClose(e)}}>
            &#10005;
          </button>
        </div>
        <div className="footerStyle">
        <button onClick={(e) => { this.onClose(e)}}>
          Close
        </button>
        </div>
        </div>
      </div>
    )
  }
}
