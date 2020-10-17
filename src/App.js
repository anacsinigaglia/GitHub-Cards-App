import React from 'react';
import './App.css';
import ListCards from './components/ListCards/ListCards';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <ListCards />
      </div>
    );
  }
}

export default App;