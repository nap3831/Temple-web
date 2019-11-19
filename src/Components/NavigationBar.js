import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    render() {
     
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar className="text-center  alpha  fixed-top"  dark expand="lg">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <div>
                                <Nav navbar>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Home" onClick={this.closeNav}>หน้าหลัก</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Temple" onClick={this.closeNav}>ความสำคัญของวัด</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/TempleList" onClick={this.closeNav}>รายชื่อวัด</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Contact" onClick={this.closeNav}>ติดต่อฉัน</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Collapse>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

export default (NavigationBar);