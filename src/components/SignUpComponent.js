/* eslint-disable react/jsx-pascal-case */
import Axios from 'axios';
import React, { Component } from 'react';
import { Form } from 'react-redux-form';
import { Row, Col, Button, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';


// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// // const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSignup(event) {
        Axios({
            method: 'post',
            url: baseUrl + 'users/signup',
            data: {
                email: this.email.value,
                username: this.username.value,
                password: this.password.value
            }
        })
            .then(this.toggleModal());
    }

    render() {
        return (
            <React.Fragment>
                <Form model="signup" onSubmit={this.handleSignup} id="signinstyle">
                    <Row className="form-group mt-2">
                        <Col>
                            <Input type="text" id="username" name="username" placeholder="Username"
                                innerRef={(input) => this.username = input} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Input type="email" id="email" name="email" placeholder="Email"
                                innerRef={(input) => this.email = input} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Input type="password" id="password" name="password" placeholder="Password"
                                innerRef={(input) => this.password = input} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button className="p-2" type="submit" value="submit" color="primary">
                                Sign Up
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Welcome!</ModalHeader>
                    <ModalBody>
                        <img src="assets/images/Undraw-welcome.png" alt="Welcome!" id="welcomeModalImg" />
                        <h3>We are committed to your health...</h3>
                        <Link to="/menu"><button className="btn btn-dark p-2">Let's Start The Journey!</button></Link>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    };
}

export default SignUp;

