/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

//import CommentFormButton from './CommentFormComponent'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentFormButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false
        }

        this.modalToggler = this.modalToggler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    modalToggler(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.modalToggler();
        this.props.postComment(this.props.centerId, values.rating, values.firstname, values.comment);
        //event.preventDefault();
    }
    render() {
        return(
            <React.Fragment>
                <Button outline onClick={this.modalToggler}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggler}>
            <ModalHeader toggle={this.modalToggler}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={this.handleSubmit}>
                    <Row  className="form-group">
                        <Label htmlFor="Rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select  model=".rating" id="rating" name="rating" type="select" >
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                    <Label htmlFor="firstname" md={2}>Name</Label>
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
                                    required: 'Required!',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={2}>Comment</Label>
                        <Col md={10}>
                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" />
                        </Col>
                    </Row>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
            </React.Fragment>
        );
    }
    
}

function RenderCenter({ center }) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg src={baseUrl + center.image} alt={center.name} />
                <CardBody>
                    <CardTitle>{center.name}</CardTitle>
                    <CardText>
                        {center.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

function RenderComments({comments, postComment, centerId}) {
    
    if (comments != null) {
        
        const commentsListItem = comments.map((comment) => {
            return (
            <Stagger in>
                <Fade in>
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </Fade>
            </Stagger>
            )
        });
        
        return (
            <div className="col-12 col-md-5 m-1">
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsListItem}
                    </ul>
                </div>
                <CommentFormButton centerId={centerId} postComment={postComment}/>
            </div>
            
        )
    } else {
        return (
            <div></div>
        )
    }

};

const Center = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.center != null) 
    if (props.center != null) {
        return (

            <div className="container mt-3">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.center.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.center.category}</h3>
                        <hr />
                    </div>
                </div>
                
                <div className="col-12">
                    <h3>{props.center.name}</h3>
                    <hr />
                </div>

                <div className="row">
                    <RenderCenter center={props.center} />
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        centerId={props.center.id}
                    />
                </div>
            </div>

        );

    } else {
        return (
            <div></div>
        )
    }

}
export default Center;