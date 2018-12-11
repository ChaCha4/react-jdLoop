import React, { Component } from 'react';
import './button.css';
class Button extends Component {
  render() {
    // console.log(this.props);
    const { txt, className, onClick } = this.props;

    return (
      <button className={className} onClick={onClick}>
        {txt ? txt : '按钮'}
      </button>
    );
  }
}

export default Button;
