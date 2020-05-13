import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared';
import { Redirect } from 'react-router-dom'

class Question extends Component {
    state = {
        toResult: false
    }
    render() {
        const { optionOne, optionTwo, authorName, authorAvatar } = this.props
        const handleSubmit = (e) => {
            e.preventDefault();
            const { option } = this.form
            const { authedUser, qid } = this.props
            const answer = option.value
            this.props.dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }))
            this.setState({
                toResult: true
            })
        }

        if (this.state.toResult)
            return <Redirect to={{ pathname: `/poll/${this.props.qid}` }} />
        return (
            <div className='center mw5 mw6-ns hidden ba '>
                <div className='f4 bg-near-black white  pv2'>
                    <h1>{authorName}</h1>
                </div>
                <div className='flex'>
                    <div className='br b--gray'>
                        <img
                            alt=''
                            src={`${authorAvatar}`}
                            className='br-100 ma2 h4 w4 dib ba b--black-05 pa2'
                        />
                    </div>
                    <div className='center'>

                        <h3 className='f4'>Would You Rather?</h3>
                        <form
                            onSubmit={handleSubmit}
                            ref={form => this.form = form}
                        >
                            <div className='mb3'>

                                <input
                                    type="radio"
                                    value={'optionOne'}
                                    name="option"
                                    checked={true}
                                    onChange={()=>{}}
                                    className='mr1'
                                /> 
                                <span className='fw3 pb2'>{optionOne}</span>
                                <label className="db pb2 pt2 fw6 lh-copy f6" >OR</label>
                                <input
                                    type="radio"
                                    value={'optionTwo'}
                                    name="option"
                                    className='mr1'
                                />
                                <span className='fw3 pb2'>{optionTwo}</span>

                            </div>

                            <div className='ma2'>

                                <button
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    disabled={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



function mapStateToProps({ users, questions, authedUser }, props) {
    const { qid } = props.match.params
    const question = questions[qid];
    console.log('qid', qid)

    const author = users[question.author];
    const authorName = author.name
    const authorAvatar = author.avatarURL;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return {
        qid,
        authedUser: authedUser ? authedUser : null,
        authorName,
        authorAvatar,
        optionOne,
        optionTwo
    }

}


export default connect(mapStateToProps)(Question);
