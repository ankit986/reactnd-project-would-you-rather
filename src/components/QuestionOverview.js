import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
class QuestionOverview extends Component {
    state = {
        toQuestion: false,
        toPoll: false
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            toQuestion: this.props.isUnAnswered ? true : false,
            toPoll:!this.state.toQuestion
        })

    }
    render() {
        const { authorName, authorAvator, optionOneText, qid } = this.props
        if (this.state.toQuestion) {
            return <Redirect to={{ pathname: `/question/${qid}` }} />
        }

        if(this.state.toPoll){
            return <Redirect to={{ pathname: `/poll/${qid}` }} />

        }

        return (
            <div className='center mw5 mw6-ns hidden ba mv2'>
                <div className='f4 bg-near-black white mv0 pv2 ph3'>{authorName}</div>
                <div className='flex'>
                    <div className='br b--gray'>
                        <img
                            alt={authorName}
                            src={`${authorAvator}`}
                            className='br-100 ma2 h4 w4 dib ba b--black-05 pa2'
                        />
                    </div>
                    <div className='center'>

                        <h3>Would You Rather?</h3>
                        <p className='f5 fw4 gray mt0'>{optionOneText}...</p>
                        <button className='pa2 btn ma2' onClick={this.handleClick}>ViewPoll</button>
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps({ users, questions }, { qid }) {
    const question = questions[qid];
    const author = question.author
    const authorName = users[author].name;
    const authorAvator = users[author].avatarURL;
    const optionOneText = question.optionOne.text;

    return {
        authorName,
        authorAvator,
        optionOneText
    }
}

export default connect(mapStateToProps)(QuestionOverview);