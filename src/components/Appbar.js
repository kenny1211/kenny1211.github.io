import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import '../App.css';

const navItem = {
  display: 'inline'
};
class Appbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  changeState = () => {
    this.setState({ isOpen: false });
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ background: 'transparent' }} light expand="md">
          <NavbarBrand />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto mr-2" style={navItem}>
                <NavLink href="#">
                  <Link
                    onClick={this.changeState}
                    className="appbar-link"
                    style={{ color: 'black' }}
                    to="/"
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto mr-2">
                <NavLink href="#">
                  <Link
                    onClick={this.toggle}
                    className="appbar-link"
                    style={{ color: 'black' }}
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto mr-2">
                <NavLink
                  onClick={this.toggle}
                  style={{ color: 'black' }}
                  className="appbar-link"
                  href="https://docs.google.com/document/d/1VR9c0vXJVXMUT40QphJVvAZUjvFvQZhqZCWIUeASX1M/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto mr-2">
                <NavLink className="appbar-link" style={{ color: 'black' }} href="#">
                  <Link
                    onClick={this.toggle}
                    style={{ color: 'black' }}
                    className="appbar-link"
                    to="/contact"
                  >
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
