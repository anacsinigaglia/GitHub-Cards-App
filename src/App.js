import React from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <Card />
      </div>
    );
  }
}

export default App;