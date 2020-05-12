import React, { Component } from "react";
import { connect } from "react-redux";
import {handleSetAuthedUser} from '../actions/setAuthedUser'

class Login extends Component {
    render() {
        const handleSubmit = (e) =>{
                e.preventDefault();
                this.props.dispatch(handleSetAuthedUser(this.userlist.value));
                
                console.log(this.userlist.value)
        }

        const { users } = this.props;

        return (
            <div>
                LOGIN
                <div className='login-box'>
                    <img
                        alt='login'
                        src={'https://pbs.twimg.com/media/CcCHrjKWoAABwdH.jpg'}
                        className='login-image'
                    />
                    <form onSubmit={handleSubmit}>
                        <select className='select' ref = {(input)=> this.userlist = input}>
                            {Object.entries(users).map(user => {
                                return <option value={user[0]} key={user[0]}>{user[1].name}</option>
                            })}
                        </select>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }) {
    console.log(questions)
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);