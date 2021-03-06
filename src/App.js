import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <switch>
       <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInAndSignUpPage} />
      </switch>
    </div>
  );
}

export default App;
