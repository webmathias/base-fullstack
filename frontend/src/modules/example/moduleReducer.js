import { ACTION_FETCH } from './moduleActions'
const DEFAULT_STATE = {
    list: [],
    message: '',
    pending: false
}
export default (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_FETCH + '_PENDING':
            return { state, list: [], pending: true }
        case ACTION_FETCH + '_FULFILLED':
            return { state, list: payload.data, pending: false }
        default:
            return state;
    }

}