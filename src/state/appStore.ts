import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/user'

export default combineReducers({
    user: userReducer,
})
