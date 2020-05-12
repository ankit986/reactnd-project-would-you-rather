import React, { Component } from 'react';
import Login from './Login';
import { handleInitialData } from "../actions/shared";
import { connect } from 'react-redux'
import Home from './Home';
import LoadingBar from 'react-redux-loading'
import NavBar from './NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loading, userName, avatarURL} = this.props
    return (
      <BrowserRouter >
        <div className="App">
          {this.props.loading ? null :
            <div>
              <LoadingBar />
              <NavBar authedUser={this.props.authedUser} userName = {userName} avatarURL={avatarURL}/>
              <Route path='/' exact component={Home}/>
              <Route path='/newquestion' component={NewQuestion}/>
              <Route path='/leaderboard' component={LeaderBoard}/>
            </div>
          }
        </div>
      </BrowserRouter>

    );
  }
}

function mapStateToProps({ authedUser }) {

  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
