import React, { Component } from "react";
import UnAnsweredList from './UnAnsweredList'
import AnsweredList from './AnsweredList'


class Home extends Component {
    state = {
        currentList: 'UnAnsweredList'
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            currentList: e.target.innerText
        })
    }
    render() {
        return (
            <div className='center'>
                <div className='flex ba  ml5 mr5 items-center justify-center pa4'>
                    <button
                        className='f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 bl border-box '
                        onClick={this.handleClick}>
                        UnAnsweredList
                    </button>
                    <button
                        className='f5 br  no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3  border-box '
                        onClick={this.handleClick}>
                        AnsweredList
                    </button>
                </div>
                <div className='ml5 mr5'>

                    {this.state.currentList === 'UnAnsweredList' ?
                        <UnAnsweredList /> :
                        <AnsweredList />}
                </div>
            </div>
        )
    }
}


export default (Home);