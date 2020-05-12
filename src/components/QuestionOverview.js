import React, { Component } from "react";
import { connect } from "react-redux";
import Question from './Question'

class QuestionOverview extends Component {
    state={
        toQuestion: false
    }

    handleClick= (e)=>{
        e.preventDefault();
        this.setState({
            toQuestion:true
        })

        // Todo: goto question or to result
    }
    render() {
        const { authorName, authorAvator, optionOneText } = this.props
        if(this.state.toQuestion){
            return <Question qid={this.props.qid} />
        }

        return (
            <div className='question-overview'>
                <div className='author-name'>{authorName}</div>
                <div className='details'>
                    <div className='avatar-cover'>
                        <img
                            alt={authorName}
                            src={`${authorAvator}`}
                            className='avatar'
                        />
                    </div>
                    <div className='question-details'>
        
                        <h3>Would You Rather?</h3>
                        <p>{optionOneText}</p>
                        <button onClick={this.handleClick}>ViewPoll</button>
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