import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style.js';
import GlobalIconFont from './statics/iconfont/iconfont'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconFont />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
          </BrowserRouter> 
        </Provider>
      </Fragment>
    );
  }
}

export default App;
