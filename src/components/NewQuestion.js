import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handelAddQuestion } from "../actions/shared";
import { Redirect } from 'react-router-dom';

class Question extends Component {
    state = {
        toHome: false,
        optionOneText: '',
        optionTwoText: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handelAddQuestion(this.state.optionOneText, this.state.optionTwoText))
        this.setState({
            toHome: true
        })
    }

    handleOptionOne = (e) => {
        e.preventDefault();
        this.setState({
            optionOneText: e.target.value
        })
    }
    handleOptionTwo = (e) => {
        e.preventDefault();
        this.setState({
            optionTwoText: e.target.value
        })
    }

    render() {
        if (this.state.toHome)
            return <Redirect to='/' />

        return (
            <div className='center mw5 mw6-ns hidden ba '>

                <div className='f3 bg-near-black white  pv2'>
                    Create New Question
                </div>
                <div>
                    <h3 className=''>Complete The Question</h3>

                    <div>

                        <h3>Would You Rather...</h3>
                        <form
                            onSubmit={this.handleSubmit} >
                            <input
                                placeholder='Enter Option One Text Here'
                                className='input-reset ba b--black-20 pa2 mb2 db center'
                                value={this.state.optionOneText}
                                onChange={this.handleOptionOne}
                            />
                            <span>OR</span>
                            <input
                                placeholder='Enter Option Two Text Here'
                                className='input-reset ba b--black-20 pa2 mb2 db center'

                                value={this.state.optionTwoText}
                                onChange={this.handleOptionTwo}
                            />
                            <div className='ma2'>

                                <button
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Question);
