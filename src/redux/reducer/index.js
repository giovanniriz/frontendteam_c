import {combineReducers} from 'redux'
import loginStudentReducer from "./loginStudentReducer";
import loginTutorReducer from './loginTutorReducer'



const rootReducer = combineReducers({
    loginStudentReducer: loginStudentReducer,
    loginTutorReducer: loginTutorReducer
});

export default rootReducer;