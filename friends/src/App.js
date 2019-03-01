import React, { Component } from 'react';
import axios from 'axios';

import Friends from './Components/Friends';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err)
    );
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log('now in deleteFriend in App');
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log('Data is back, now set state and reroute', res.data);
        this.setState({
          friends: res.data
        });
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Friends
          friends = {this.state.friends}
        />
      </div>
    );
  }
}

export default App;