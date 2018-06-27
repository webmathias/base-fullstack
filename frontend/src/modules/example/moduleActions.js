import axios from 'axios'
export const ACTION_FETCH = "ACTION_FETCH";
export const fetchList = (query) => {
    return {
        type: ACTION_FETCH,
        payload: axios.get('/api/v1/example?sort=type')
    }
}