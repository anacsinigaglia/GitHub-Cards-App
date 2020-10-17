import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import ListCards from './components/ListCards/ListCards';

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <ListCards profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;