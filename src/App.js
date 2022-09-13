import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/header';
import Home from './components/home';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}

export default App;
