import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';

class Appbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ background: 'transparent' }} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <Link className="appbar-link" style={{ color: 'black' }} to="/">
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link className="appbar-link" style={{ color: 'black' }} to="/portfolio">
                    Portfolio
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: 'black' }}
                  className="appbar-link"
                  href="https://docs.google.com/document/d/1VR9c0vXJVXMUT40QphJVvAZUjvFvQZhqZCWIUeASX1M/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="appbar-link" style={{ color: 'black' }} href="#">
                  <Link style={{ color: 'black' }} className="appbar-link" to="/contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Appbar;
