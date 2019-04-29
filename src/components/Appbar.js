import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

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
                  <Link style={{ color: 'black' }} to="/">
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link style={{ color: 'black' }} to="/portfolio">
                    Portfolio
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link style={{ color: 'black' }}>Resume</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'black' }} href="#">
                  <Link style={{ color: 'black' }} to="/contact">
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
