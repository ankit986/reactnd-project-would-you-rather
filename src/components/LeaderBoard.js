import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from './Score';

class Result extends Component {
    render() {
        const { userMapScore } = this.props;
        return (
            <div className="Result">
                <ul>
                    {userMapScore.map(user => {
                        return(
                        <li key={user[0]}>
                            <Score uid={user[0]} totalScore={user[1]} />
                        </li>)
                    })}
                </ul>
            </div>
        );
    }
}



function mapStateToProps({ users  }) {
    const userMapScore = []
    for (let user in users) {
        let totalScore = Object.keys(users[user].answers).length + users[user].questions.length;
        userMapScore.push([user, totalScore])
    }
    userMapScore.sort((a, b) => b[1] - a[1])
    return {
        userMapScore
    }
}



export default connect(mapStateToProps)(Result);
