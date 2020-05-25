import axios from 'axios';
import { 
    FETCH_AUTHENTICATION_REQUEST, 
    FETCH_AUTHENTICATION_SUCCESS, 
    FETCH_AUTHENTICATION_FAILURE, 
    URL_AUTHENTICATION, 
    EMAIL_QUERY, 
    PASSWORD_QUERY, 
    LOGOUT 
} from './authenticationTypes';

export const fetchAuthenticationRequest = () => {
    return {
        type: FETCH_AUTHENTICATION_REQUEST
    }
}

export const fetchAuthenticationSuccess = username => {
    return {
        type: FETCH_AUTHENTICATION_SUCCESS,
        username: username,
        payload: true
    }
}

export const fetchAuthenticationFailure = error => {
    return {
        type: FETCH_AUTHENTICATION_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const authenticate = (email, password, history) => {
    return (dispatch) => {
        const url = URL_AUTHENTICATION + '?' + EMAIL_QUERY + email + '&' + PASSWORD_QUERY + password
        createRequest(url, history, dispatch)
    }
}

const createRequest= (url, history, dispatch) => {
    dispatch(fetchAuthenticationRequest());    
    axios.get(url)
        .then(response => {
            const auth = response.data
            
            if(auth && auth.length > 0) {
                history.push('/dashboard')
                dispatch(fetchAuthenticationSuccess(auth[0].username))
            } else {
                dispatch(fetchAuthenticationFailure("Unable to login either email or password is incorrect"))
            } 
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchAuthenticationFailure(errorMessage))
            history.push('/error/500')
        });
}