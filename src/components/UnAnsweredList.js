import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview';

class UnAnsweredList extends Component {
    render() {
        const { unansweredQuestionIds } = this.props

        return (
            <div className="ba b-gray center">

                <h1 className='f2'>UnAnsweredList</h1>
                <ul>
                    {unansweredQuestionIds.map(qid =>
                        <li key={qid}>
                            <QuestionOverview qid={qid} isUnAnswered={true}/>
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}


function mapStateToProps({ users, questions, authedUser }) {
    const answers = authedUser?users[authedUser].answers:{}
    const answeredQuestionIds = Object.keys(answers)
    const unansweredQuestionIds = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        .filter(question => !answeredQuestionIds.includes(question))
    console.log('un', unansweredQuestionIds)
    
    return {
        unansweredQuestionIds
    }
}


export default connect(mapStateToProps)(UnAnsweredList);
