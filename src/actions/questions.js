import { _saveQuestion } from "../util/_DATA";

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function recieveQuestions(question) {
    return {
        type: RECIEVE_QUESTIONS,
        question
    }
}

export function saveQuestionAnswer({authedUser, qid, answer} ) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

