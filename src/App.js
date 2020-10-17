import React from 'react';
import './App.css';
import { testData } from './components/testData';
import Form from './components/Form/Form';
import ListCards from './components/ListCards/ListCards';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <Form />
        <ListCards profiles={ testData } />
      </div>
    );
  }
}

export default App;