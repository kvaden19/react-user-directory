import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from './components/Wrapper';
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
// import users from "./users.json";

class App extends Component {

  // state = { users };

  render() {
    return (
      <div>
        <Jumbotron />
        <Wrapper>
          <UserCard
            first_name={'Kelly'}
            last_name={'Vaden'}
            city={'Pittsburgh'}
            state={'PA'}
            email={'klvaden@fakemail.com'}
            image={'https://via.placeholder.com/150'}
          />
        </Wrapper>
        <Footer />
      </div>
    );
  }

}

export default App;
