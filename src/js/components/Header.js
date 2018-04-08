import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export class Header extends Component {
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
      <header className="app-header navbar py-0">
        <Navbar color="faded" light expand="md" className='w-100'>
          <NavbarBrand href="/"><img className='logo' src={'../../img/logo.png'} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-0" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <div className='user'>
                    <p className='m-0'>Elizabeth Alcalá</p>
                    <p className='p-light'>Cuenta Personal</p>
                  </div>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <p className="p-light">Cuenta</p>
                  </DropdownItem>
                  <DropdownItem>
                    <p className="p-light">Salir</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>
                  <div className="user-img">
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
