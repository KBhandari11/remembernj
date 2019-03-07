import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <div>
          <img src={require('../Pics/Remember-header.jpg')} />
      </div>
    )
  }
}
export default NavBar;
