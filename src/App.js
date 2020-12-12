import React, { Component } from 'react'
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Axios from 'axios';

const store = ConfigureStore();
let authToken = window.localStorage.getItem('jwtToken');
authToken = authToken.replace(/^"(.*)"$/, '$1');
alert(authToken);
Axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${authToken}`;
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
