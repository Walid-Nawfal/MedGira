import React, { Component } from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Center from './CenterDetailsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { About } from './AboutComponent'

import { postFeedback, postComment, fetchCenters} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CMS from './CMSComponent';

const mapStateToProps = state => {
  return {
    centers: state.centers,
    // comments: state.comments,
  }
}

const mapDispatchToProps = dispatch => ({
  postFeedback: (fName, lName, tel, email, msg) => dispatch(postFeedback(fName, lName, tel, email, msg)),
  postComment: (centerId, rating, author, comment) => dispatch(postComment(centerId, rating, author, comment)),
  fetchCenters: () => { dispatch(fetchCenters())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  // fetchComments: () => dispatch(fetchComments())
});

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCenters();
    // this.props.fetchComments();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
          center={this.props.centers.centers.filter((center) => center.featured)}
          centersLoading={this.props.centers.isLoading}
          centerErrMess={this.props.centers.errMess}
          centers={this.props.centers.centers}
        />
      );
    };

    const CenterWithId = ({match}) => {
      return(
        <Center center={this.props.centers.centers.filter((center) => center._id === match.params.centerId)[0]}
          isLoading={this.props.centers.isLoading}
          errMess={this.props.centers.errMess}
          // comments={this.props.centers.centers.comments.filter((comment) => comment.centerId === parseInt(match.params.centerId,10))}
          // commentsErrMess={this.centers.centers.comments.errMess}
          // postComment={this.props.centers.centers.comments.postComment}
        />
      );
    };

    const MenuWithSpecialty = ({match}) => {
      //alert(match.params);
      // alert(JSON.stringify(this.props.centers.centers.filter((center) => center.category === match.params.specialty)));
      // alert(JSON.stringify(this.props.centers));
      return (
        <Menu centers={this.props.centers.centers.filter((center) => center.category === match.params.specialty)}
          isLoading={this.props.centers.isLoading}
          errMess={this.props.centers.errMess}
          allCenters={this.props.centers.centers}
         />
      );
    };

    return (
      <div>
        <Header />
        <div>
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About /> } />
                  <Route exact path='/menu' component={() => <Menu centers={this.props.centers.centers} isLoading={this.props.centers.isLoading} errMess={this.props.centers.errMess} allCenters={this.props.centers.centers} />} />
                  <Route exact path='/menu/:specialty' component={MenuWithSpecialty} />
                  <Route path='/centers/:centerId' component={CenterWithId} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                  <Route exact path='/CMS' component={() => <CMS centers={this.props.centers.centers}/>}></Route>
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));