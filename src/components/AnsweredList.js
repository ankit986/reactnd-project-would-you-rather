import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview';

class AnsweredList extends Component {
    render() {
        const { answeredQuestionIds } = this.props
        return (
            <div className="">
                <h1>AnsweredList</h1>
                <ul>
                    {answeredQuestionIds.map(qid =>
                        <li key={qid}>
                            <QuestionOverview qid={qid} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const user = users[authedUser]
    const answers = user.answers
    const questionIds = Object.keys(answers)
    const answeredQuestionIds = Object.keys(questions)
    .sort((a, b) => questions[a].timestamp - questions[b].timestamp)
    .filter(question => questionIds.includes(question))
    // console.log('answeredQuestionIds', answeredQuestionIds)
    return {
        answeredQuestionIds
    }
}

export default connect(mapStateToProps)(AnsweredList);
