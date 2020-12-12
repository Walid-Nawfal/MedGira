import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'
import Axios from 'axios';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (centerId, rating, author, comment) => (dispatch) => {

    const newComment = {
        centerId: centerId,
        rating: rating,
        author: author,
        comment: comment
    };
    
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchCenters = () => (dispatch) => {

    dispatch(centersLoading(true));

    Axios.get(baseUrl + 'centers')
    .then(centers => dispatch(addCenters(centers.data)))
    .catch((error) => dispatch(centersFailed(error.message)));
}

export const centersLoading = () => ({
    type: ActionTypes.CENTERS_LOADING
});

export const centersFailed = (errmess) => ({
    type: ActionTypes.CENTERS_FAILED,
    payload: errmess
});

export const addCenters = (centers) => ({
    type: ActionTypes.ADD_CENTERS,
    payload: centers
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});

export const postFeedback = (fName, lName, tel, email, msg) => (dispatch) => {

  const newFeedback = {
      fName: fName,
      lName: lName,
      tel: tel,
      email: email,
      msg: msg
  };
  
  
  return fetch(baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response =>  { dispatch(addFeedback(response)); alert(JSON.stringify(response))}) 
  .catch(error =>  { console.log('post comments', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};
