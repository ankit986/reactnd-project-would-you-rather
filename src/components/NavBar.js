import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class NavBar extends Component {
    render() {
        const handleClick=(e) =>{
            e.preventDefault();
        }
        return (
            <div className='container'>

                <nav className='nav' >
                    <ul >
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                    </NavLink>
                        </li>
                       
                        <li>
                            <NavLink to='/newquestion' activeClassName='active'>
                                New Question
                    </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                LeaderBoard
                    </NavLink>
                        </li>
                        {this.props.authedUser === '' ?
                            <li>Login</li>
                            :
                            <li>
                                Hello,
                            {this.props.userName}
                                <img
                                    alt={`Avatar of ${this.props.userName}`}
                                    src={`${this.props.avatarURL}`}
                                    className='avatar'
                                />
                                <button onClick={this.handleClick}>Logout</button>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {

    return {

        userName: users[authedUser].name,
        avatarURL: users[authedUser].avatarURL
    }
}

export default connect(mapStateToProps)(NavBar);
