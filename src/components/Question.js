import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared';


class Question extends Component {

    render() {
        const { optionOne, optionTwo, authorName, authorAvatar } = this.props
        const handleSubmit = (e) => {
            e.preventDefault();
            const { option } = this.form
            const { authedUser, qid } = this.props
            const answer = option.value
            this.props.dispatch(handleSaveQuestionAnswer({authedUser, qid, answer}))
        }

        const handleRadio = (e) =>{
            e.preventDefault()
        }


        return (
            <div className="">
                <div className='author-name'>
                    <h1>{authorName}</h1>
                </div>
                <div className='avatar-cover'>
                    <img
                        alt=''
                        src={`${authorAvatar}`}
                        className='avatar'
                    />
                </div>
                <div className='question-details'>

                    <h3>Would You Rather?</h3>
                    <form
                        onSubmit={handleSubmit}
                        ref={form => this.form = form}
                    >

                        <input
                            type="radio"
                            value={'optionOne'}
                            name="option"
                            checked={true}
                            onChange={handleRadio} 
                        /> {optionOne}
                        <input
                            type="radio"
                            value={'optionTwo'}
                            name="option"
                        /> {optionTwo}
                        <button disabled={this.form}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}



function mapStateToProps({ users, questions, authedUser }, { qid }) {
    const question = questions[qid];
    const author = users[question.author];
    const authorName = author.name
    const authorAvatar = author.avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return {
        authedUser,
        authorName,
        authorAvatar,
        optionOne,
        optionTwo
    }

}


export default connect(mapStateToProps)(Question);
