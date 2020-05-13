import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSetAuthedUser } from '../actions/setAuthedUser'
import { Redirect, withRouter } from "react-router-dom";
import auth from '../util/auth'
class Login extends Component {
    state = {
        toHome: false,
        redirectToReferer: false
    }

    render() {
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.dispatch(handleSetAuthedUser(this.userlist.value));
            this.setState({
                toHome: true
            })
            auth.login(() => {
                this.setState(() => ({
                    redirectToReferrer: true
                }))
            })
            console.log(this.userlist.value)
        }

        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        const { users } = this.props;

        return (
            <div className='center mw5 mw6-ns hidden ba '>
                <div className='f4 bg-near-black white  pv2'>
                    <h1>LOGIN</h1>
                </div>

                <div className='login-box'>
                    <img
                        alt='login'
                        src={'https://pbs.twimg.com/media/CcCHrjKWoAABwdH.jpg'}
                        className='login-image'
                    />
                    <form onSubmit={handleSubmit}>

                        <select className='select w-90' ref={(input) => this.userlist = input}>
                            {Object.entries(users).map(user => {
                                return <option value={user[0]} key={user[0]}>{user[1].name}</option>
                            })}
                        </select>
                        <button className='btn w-90'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login));