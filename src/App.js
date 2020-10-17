import React from 'react';
import './App.css';
import { testData } from './components/testData';
import Form from './components/Form/Form';
import ListCards from './components/ListCards/ListCards';

class App extends React.Component {
  state = { profiles: testData };

  addNewProfile = (profileData) => {
    console.log('App', profileData);
}

  render() {
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <ListCards profiles={ this.state.profiles } />
      </div>
    );
  }
}

export default App;