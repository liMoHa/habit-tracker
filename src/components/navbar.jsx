import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="fa-solid fa-leaf navbar-logo"></i>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
