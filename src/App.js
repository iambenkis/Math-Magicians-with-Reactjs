import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/header';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Calculator />
      </>
    );
  }
}

export default App;
