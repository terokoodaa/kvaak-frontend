import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNav= this.toggleNav.bind(this);
    this.state = {
        activeNav: false,
    };
  }
  toggleNav() {
    // Change navbar state
    // If active add class is-active
    this.setState({ activeNav: !this.state.activeNav });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <NavLink to="/" className="navbar-item">
                <h1 className="title">KvaaK!</h1>
              </ NavLink>
              <span className={this.state.activeNav ? 'navbar-burger burger  is-active': 'navbar-burger burger'}  onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className={this.state.activeNav ? 'navbar-menu is-active': 'navbar-menu'}>
              <div className="navbar-end">
                <NavLink to="/Sightings" activeClassName="is-active" className="navbar-item">Sightings</NavLink>
                <NavLink to="/Species" activeClassName="is-active" className="navbar-item">Species</NavLink>
                <NavLink to="/AddSighting" activeClassName="is-active" className="navbar-item">Add sighting</NavLink>
                <a className="navbar-item">
                  <span className="icon is-large">
                      <i className="fa fa-2x fa-cog"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </ React.Fragment>
    );
  }
}

export default Navigation;