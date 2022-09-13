import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/header';
import Home from './components/home';
import Quote from './components/quote';
// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
    return (
      <div>
        <Header />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/calculator' exact element={<Calculator />} />
            <Route path='/quote' exact element={<Quote />} />
        </Routes>
      </div>
    );
}

export default App;
