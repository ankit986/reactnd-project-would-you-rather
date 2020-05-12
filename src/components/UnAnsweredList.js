import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview';

class UnAnsweredList extends Component {
    render() {
        const { unansweredQuestionIds } = this.props

        return (
            <div className="">
                <h1>UnAnsweredList</h1>
                <ul>
                    {unansweredQuestionIds.map(qid =>
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
    const answeredQuestionIds = Object.keys(answers)
    const unansweredQuestionIds = Object.keys(questions)
        .sort((a, b) => questions[a].timestamp - questions[b].timestamp)
        .filter(question => !answeredQuestionIds.includes(question))
    console.log('un', unansweredQuestionIds)
    
    return {
        unansweredQuestionIds
    }
}


export default connect(mapStateToProps)(UnAnsweredList);
