import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <NavLink className="navbar-brand" to="/"><span className="fas fa-home"></span></NavLink>
            </nav>
        );
    }
}

export default Header;
