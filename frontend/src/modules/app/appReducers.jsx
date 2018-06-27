import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
const menuReducer = (state = {
    currentUrl: '/'
}, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            return Object.assign({}, { ...state }, { currentUrl: action.payload })
        default:
            return state
    }
};
export const goto = (url) => {
    return {
        type: "CHANGE_PAGE",
        payload: url,

    }
};
export default combineReducers({
   menu: menuReducer
})