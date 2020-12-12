/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label
} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        //console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.message);
        this.props.resetFeedbackForm();
        //event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb className="mt-3">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h3>Wanna have an Unforgettable Journey ?</h3>
                        <h3>Let's Help You!</h3>
                        <a role="button" className="btn btn-primary mt-4" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info mt-4" href="https://Skype.com"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success mt-4" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h4>We've got you the best resorts!</h4>
                        <img src="assets/images/map.jpg" alt="" id="map" />
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <h4>Follow Us:</h4>
                        <div role="group">
                            <a href="https://www.facebook.com/"><span className="fa fa-4x fa-facebook-square m-2"></span></a>
                            <a href="https://www.twitter.com/"><span className="fa fa-4x fa-twitter m-2"></span></a>
                            <a href="https://www.instagram.com/"><span className="fa fa-4x fa-instagram m-2"></span></a>
                            <a href="https://www.pinterest.com/"><span className="fa fa-4x fa-pinterest m-2"></span></a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers! ',
                                            maxLength: 'Must be 15 numbers or less! ',
                                            isNumber: 'Must be a number! '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".messgae" id="message" name="message" rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;