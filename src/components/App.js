import React, { Component, Fragment } from 'react';
import Login from './Login';
import { handleInitialData } from "../actions/shared";
import { connect } from 'react-redux'
import Home from './Home';
import LoadingBar from 'react-redux-loading'
import NavBar from './NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Question from './Question'
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  state = {
    validUser: this.props.authedUser === undefined
  }
  render() {
    const { userName, avatarURL } = this.props
    console.log('authedUser', this.props.authedUser)

    return (
      <BrowserRouter >
        <Fragment>
          <LoadingBar />
          <NavBar authedUser={this.props.authedUser} userName={userName} avatarURL={avatarURL} />
          <div>

            {this.props.loading ? null :
              <Switch >
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/add' component={NewQuestion} />
                <PrivateRoute path='/leaderboard' component={LeaderBoard} />
                <PrivateRoute path='/questions/:qid' component={Question} />
                <Route path='/login' component={Login} />
                <Route path='*' component={NotFound} />
              </Switch>
            }
          </div>

        </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  console.log('a', authedUser)

  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
