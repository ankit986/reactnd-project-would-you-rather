import { getInitialData } from "../util/_DATA";
import { recieveQuestions, saveQuestionAnswer, addQuestion } from './questions';
import { recieveUsers, saveUserAnswers, createQuestion } from './users';
import { setAuthedUser } from "./setAuthedUser";
import {_saveQuestionAnswer, _saveQuestion} from '../util/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading';

const id = ''

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then(({users, questions}) =>{
            dispatch(recieveQuestions(questions))
            dispatch(recieveUsers(users))
            dispatch(setAuthedUser(id))
            dispatch(hideLoading())
        })
    }
}






export function handleSaveQuestionAnswer(info){
    return (dispatch) =>{
        _saveQuestionAnswer(info)
            .then(() =>{ 
                console.log('ingo', info)
                dispatch(saveQuestionAnswer(info))
                dispatch(saveUserAnswers(info))
            })
    }
}

export function handelAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) =>{
        const state = getState()
        const author = state.authedUser;

        _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then(question => {
            dispatch(addQuestion(question))
            dispatch(createQuestion(question))
        })

    }

}