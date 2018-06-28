import axios from 'axios'
export const ACTION_FETCH = 'ACTION_FETCH'
export const fetchList = () => {
    return {
        type: ACTION_FETCH,
        payload: axios.get('/api/v1/example?sort=type'),
    }
}

