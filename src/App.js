import React, { Component } from "react";
import API from './utils/API.js';
import Jumbotron from "./components/Jumbotron";
import UserList from './components/UserList';
import Footer from "./components/Footer";

class App extends Component {

  state = {
      nationalitity: '',
      users: [],
      error: ""
  };

  // When the component mounts, get users from the Random User API
  componentDidMount() {
    API.getRandomUsers()
      .then(response => this.setState({ users: response.data.results }))
      //.then(response => console.log(response.data.results))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <UserList data={ this.state.users } />
        <Footer />
      </div>
    );
  }

}

export default App;
