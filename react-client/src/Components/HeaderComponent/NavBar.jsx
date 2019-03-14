import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import img from '../Pics/Remember-header.jpg';
class NavBar extends Component {
  render() {
    return (
      <div>
          <img src={img} />
      </div>
    )
  }
}
export default NavBar;
