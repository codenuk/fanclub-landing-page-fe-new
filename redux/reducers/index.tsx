import { combineReducers } from 'redux'
import userInfoReducer, { IInitialState } from './userInfo'

export interface ICombineReducers {
  userInfoReducer: IInitialState
}

const rootReducer = combineReducers<ICombineReducers>({
  userInfoReducer,
})
export default rootReducer