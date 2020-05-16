import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Poll extends Component {
    render() {
        const { authorName, authorAvatar, optionOneLength, optionOneText, optionTwoText, optionTwoLength, optionSelected } = this.props
        if (this.props.isInvalidQuestion) {
            return (
                <Redirect to={{ pathname: `/notfound` }} />
            )
        }
        const getPercentageVote = (obtained, total) => {
            const percent = (obtained * 100) / (total);
            const ans = Math.round(percent * 100) / 100
            return ans;
        }


        return (
            <div className='center mw5 mw6-ns hidden ba '>
                <h1 className='f4 bg-gray white ma0 pv2'>Poll RESULT</h1>
                <div className='f2 bg-near-black white ma0'>
                    <h3 className='ma0'>{authorName}</h3>
                </div>
                <div className='flex'>
                    <div className='br flex justify-center items-center b--gray'>
                        <img
                            alt={authorName}
                            src={`${authorAvatar}`}
                            className='br-100 ma2 h4 w4 dib ba b--black-05 pa2'

                        />
                    </div>
                    <div className='center'>
                        <div className={optionSelected === 'optionOne' ? 'ma3 bg-light-silver pa2' : 'ma3'}>

                            <span className='b'>{optionOneText}</span>
                            {optionSelected === 'optionOne' ?
                                <div className='active ma2'>
                                    <span className='b ba i '>
                                        You Selected This Option
                                    </span>
                                </div>
                                : null
                            }
                            <div className='b ba i '>
                                {getPercentageVote(optionOneLength, optionOneLength + optionTwoLength)}% Votes
                            </div>
                            <p>{optionOneLength} out of {optionOneLength + optionTwoLength} votes</p>
                        </div>
                        <hr />
                        <div className={optionSelected === 'optionTwo' ? 'ma3 bg-light-silver pa2' : 'ma3'}>

                            <span className='b'>{optionTwoText}</span>
                            {optionSelected === 'optionTwo' ?
                                <div className='active ma2'>
                                    <span className='b ba b-orange i'>
                                        You Selected This Option
                                    </span>
                                </div>
                                : null
                            }

                            <div className='b ba i '>
                                {getPercentageVote(optionTwoLength, optionOneLength + optionTwoLength)}% Votess
                            </div>

                            <p>{optionTwoLength} out of {optionOneLength + optionTwoLength} votes</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



function mapStateToProps({ users, questions, authedUser }, { qid }) {
    const question = questions[qid];

    if (!question) {
        return {
            isInvalidQuestion: true
        }
    }

    const author = users[question.author];
    const authorName = author.name;
    const authorAvatar = author.avatarURL
    const optionOne = question.optionOne;
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
    const optionTwo = question.optionTwo;
    const optionSelected = optionOne.votes.includes(authedUser) ? 'optionOne' : optionTwo.votes.includes(authedUser) ? 'optionTwo' : null;

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
