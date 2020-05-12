import React, { Component } from 'react';
import { connect } from 'react-redux'

class Poll extends Component {
    render() {
        const { authorName, authorAvatar, optionOneLength, optionOneText, optionTwoText, optionTwoLength, optionSelected } = this.props
        console.log(optionOneLength)
        return (
            <div className="">
                <h1>Poll</h1>
                <div className='author-name'>
                    <h3>{authorName}</h3>
                </div>
                <div>
                    <img
                        alt={authorName}
                        src={`${authorAvatar}`}
                        className='avatar'
                    />
                    <h2>RESULT</h2>
                    <div className='option'>
                        <p>{optionOneText}</p>
                        {optionSelected === 'optionOne' ?
                            <div className='active'>{optionSelected}</div>
                            : null
                        }
                        <p>{optionOneLength} out of {optionOneLength + optionTwoLength}</p>
                    </div>
                    <div className='option'>
                        <p>{optionTwoText}</p>
                        {optionSelected === 'optionTwo' ?
                            <div className='active'>{optionSelected}</div>
                            : null
                        }
                        <div className='answer-bar'>{optionSelected}</div>
                        <p>{optionTwoLength} out of {optionOneLength + optionTwoLength} votes</p>
                    </div>
                </div>
            </div>
        );
    }
}



function mapStateToProps({ users, questions, authedUser }, { qid }) {
    const question = questions[qid];
    const author = users[question.author];
    const authorName = author.name;
    const authorAvatar = author.avatarURL
    const optionOne = question.optionOne;
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
    const optionTwo = question.optionTwo;
    const optionSelected = optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo';

    return {
        authorName,
        authorAvatar,
        optionOneLength: optionOne.votes.length,
        optionTwoLength: optionTwo.votes.length,
        optionOneText,
        optionTwoText,
        optionSelected

    }
}


export default connect(mapStateToProps)(Poll);
