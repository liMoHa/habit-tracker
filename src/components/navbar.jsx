import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const {navbarCount} = this.props.count;
        return (
            <div className='navbar'>
                <i className='fa-solid fa-leaf navbar-logo'></i>
                <span className='navbar-title'>Habit Tracker</span>
                <span className='navbar-count'>{navbarCount}</span>
            </div>
        );
    }
}

export default Navbar;