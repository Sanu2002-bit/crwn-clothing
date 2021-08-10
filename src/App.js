import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <switch>
       <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
