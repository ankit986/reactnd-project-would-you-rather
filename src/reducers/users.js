import {RECIEVE_USERS, SAVE_USER_ANSWER, CREATE_QUESTION} from '../actions/users';

export function users(state={}, action){
    switch(action.type){
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            console.log('a', action)
            return{
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                  }
                }
              }
        case CREATE_QUESTION:
              return{
                ...state,
              [action.question.author]: {
                  ...state[action.question.author],
                  questions: state[action.question.author].questions.concat([action.question.id])
                }
              }
        default:
            return state
    }
}