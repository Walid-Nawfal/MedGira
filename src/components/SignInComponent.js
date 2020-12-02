/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Control, Form } from 'react-redux-form';
import { Row, Col, Button } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


export const SignIn = () => {
    return (
        <Form model="signin" id="signinstyle">
            <Row className="form-group mt-2">
                <Col>
                    <Control.text model=".username" id="username" name="username"
                        placeholder="Username"
                        autocomplete="off"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                    />
                    {/* <Errors
                        className="text-danger"
                        model=".username"
                        show="touched"
                        messgaes={{
                            required: 'Required! ',
                            minLength: 'Must be greater than 3 characters!',
                            maxLength: 'Must be 15 characters or less'
                        }}
                    /> */}
                </Col>
            </Row>
            <Row className="form-group">
                <Col>
                    <Control.text model=".email" id="email" name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                            required, validEmail
                        }}
                    />
                    {/* <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            required: 'Required',
                            validEmail: 'Invalid Email Address'
                        }}
                    /> */}
                </Col>
            </Row>
            <Row className="form-group">
                <Col>
                    <Control.text model=".password" id="password" name="password"
                        placeholder="Password"
                        type="password"
                    />
                </Col>
            </Row>
            <Row className="form-group">
                <Col>
                    <Button className="p-2" type="submit" color="primary">
                        Sign Up
                     </Button>
                </Col>
            </Row>
        </Form>
    );
};
