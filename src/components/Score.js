import React, { Component } from "react";
import { connect } from "react-redux";
import UnAnsweredList from './UnAnsweredList'
import AnsweredList from './AnsweredList'
import Question from "./Question";
import Result from "./Poll";

class Score extends Component {
    render() {
        const { userName, userAvatar, answeredQuestions, createdQuesstions, totalScore } = this.props;
        return (
            <div>
                <div>
                    <img
                        alt={userName}
                        src={`${userAvatar}`}
                        className='avatar'
                    />
                </div>
                <div className='user-detail'>
                    <div>
                        <h3>{userName}</h3>
                        <span>Answered Questions {answeredQuestions}</span>
                        <hr />
                        <span>Created Questions {createdQuesstions}</span>
                    </div>
                    <div className='total-score'>
                        <div>Score</div>
                        <div><span>{totalScore}</span></div>
                    </div>
    `           </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { uid }) {
    const user = users[uid];
    console.log(uid)
    const userName = user.Name;
    const userAvatar = user.avatarURL;
    const answeredQuestions = Object.keys(user.answers).length;
    const createdQuesstions = Object.keys(user.questions).length;
    console.log(questions)
    return {
        userName,
        userAvatar,
        answeredQuestions,
        createdQuesstions
    }
}

export default connect(mapStateToProps)(Score);