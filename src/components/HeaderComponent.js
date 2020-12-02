import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSignup(event) {
        this.toggleModal();
        alert("Email: " + this.email.value + "Username: " + this.username.value + " Password: " + this.password.value
            );
        event.preventDefault();
        axios({
            method: 'post',
            url: baseUrl + 'users/signup' ,
            data: {
                email: this.email.value,
                userName: this.username.value,
                password: this.password.value,
                // confirmPassword: this.confirmPassword.value
            }
          });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar expand="md" id="myNav">
                    <div className="container">
                        <NavbarBrand id="NavbarBrand" className="mr-auto"><img src="assets/images/logo.jpeg" alt="MedGira" height="48" width="51"/>  MedGira</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" id="nestedNav">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg slideTextTrigger"></span> <span className="slideText"> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Medical Centers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-phone fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {/* <NavItem className="mr-4 d-none d-lg-block">
                                    <img src="assets/images/heart.png" alt="" height="41" width="150"></img>
                                </NavItem> */}
                                <NavItem>
                                    <Button className="bg-white text-primary" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg "></span> Sign In</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign In</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup> */}
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label htmlFor="cpassword">Confirm password</Label>
                                <Input type="cpassword" id="cpassword" name="cpassword"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup> */}
                            <Button type="submit" value="submit" color="primary" className="mt-3">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;