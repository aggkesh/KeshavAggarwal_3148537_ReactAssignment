import { FETCH_AUTHENTICATION_REQUEST, FETCH_AUTHENTICATION_SUCCESS, FETCH_AUTHENTICATION_FAILURE, USER_LOGGED_IN_KEY, USERNAME_KEY, LOGOUT } from "./authenticationTypes"

const initialState = {
    loading: false,
    username: localStorage.getItem(USERNAME_KEY) !== null ? localStorage.getItem(USERNAME_KEY) : '',
    authenticated: localStorage.getItem(USER_LOGGED_IN_KEY) !== null && localStorage.getItem(USER_LOGGED_IN_KEY) === 'true',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHENTICATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_AUTHENTICATION_SUCCESS:

            localStorage.setItem(USERNAME_KEY, action.username)
            localStorage.setItem(USER_LOGGED_IN_KEY, action.payload)

            return {
                ...state,
                loading: false,
                username: action.username,
                authenticated: action.payload,
                error: ''
            }
        case FETCH_AUTHENTICATION_FAILURE:
            return {
                ...state,
                loading: false,
                username: '',
                authenticated: false,
                error: action.payload
            }
        case LOGOUT:

            localStorage.removeItem(USERNAME_KEY)
            localStorage.removeItem(USER_LOGGED_IN_KEY)

            return {
                ...state,
                username: '',
                authenticated: false
            }            
        default: return state    
    }
}

export default reducer