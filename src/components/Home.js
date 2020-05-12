import React, { Component } from "react";
import { connect } from "react-redux";
import UnAnsweredList from './UnAnsweredList'
import AnsweredList from './AnsweredList'
import Question from "./Question";
import Poll from "./Poll";
import Score from "./Score";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";

class Home extends Component {
    render() {
    
        return (
            <div>
                <UnAnsweredList />
                <AnsweredList />
            </div>
        )
    }
}

function mapStateToProps({ users, questions }) {
    // console.log(questions)
    return {
        users
    }
}

export default connect(mapStateToProps)(Home);