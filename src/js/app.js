import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import yosemite from '../assets/yosemite.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Oh haiiiiiii!
        <img src={ yosemite } alt='Yosemite' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));