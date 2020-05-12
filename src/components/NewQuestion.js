import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handelAddQuestion } from "../actions/shared";

class Question extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handelAddQuestion(this.state.optionOneText, this.state.optionTwoText))
        //Todo: Redirect to home
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
        return (
            <div className="">
                <div>
                    Create New Question
                </div>
                <div>
                    <h3>Complete The Question</h3>
                    <h2>Would You Rather...</h2>
                    <form
                        onSubmit={this.handleSubmit} >
                        <input
                            placeholder='Enter Option One Text Here'
                            className='input-field'
                            value={this.state.optionOneText}
                            onChange={this.handleOptionOne}
                        />
                        <span>OR</span>
                        <input
                            placeholder='Enter Option Two Text Here'
                            className='input-field'
                            value={this.state.optionTwoText}
                            onChange={this.handleOptionTwo}
                        />
                        <button disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Question);
