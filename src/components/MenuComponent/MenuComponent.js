import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,


    } from 'reactstrap';

import { NavLink as ReactLink } from 'react-router-dom';


class MenuComponent extends React.Component {
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
            <Navbar color="navbar navbar-fixed-top navbar-inverse  bg-primary" light expand="md">
              <NavbarBrand href="/">Oscars hemsida</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavLink href="/">Hem</NavLink>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Djur
                </DropdownToggle>
                <DropdownMenu right>

                <DropdownItem>
                  <NavLink tag={ReactLink} to="/djur/gumzan" activeClassName="active" >Gumzan</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={ReactLink} to="/djur/tage" activeClassName="active" >Tage</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={ReactLink} to="/djur/alfons" activeClassName="active" >Alfons</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={ReactLink} to="/djur/harry" activeClassName="active" >Harry</NavLink>
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Basket
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="https://kopingstars.se/">Extern länk: Köping Stars</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="https://kopingbasket.se/">Extern länk: Köping Basket</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://basketliganherr.se">Extern länk: Svenska Basketligan</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default MenuComponent;
