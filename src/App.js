import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/header';
import Home from './components/home';
import Quote from './components/quote';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Quote />
      </>
    );
  }
}

export default App;
