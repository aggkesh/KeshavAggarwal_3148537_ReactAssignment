import {
    fetchAuthenticationRequest,
    fetchAuthenticationSuccess,
    fetchAuthenticationFailure,
    logout
} from './authenticationActions'
import { 
    FETCH_AUTHENTICATION_REQUEST, 
    FETCH_AUTHENTICATION_SUCCESS, 
    FETCH_AUTHENTICATION_FAILURE, 
    LOGOUT 
} from './authenticationTypes';

describe('Authentication Actions', () => {

    it('Fetch Authentication Request', () => {
        const expectedAction = {
            type: FETCH_AUTHENTICATION_REQUEST
        }

        expect(fetchAuthenticationRequest()).toEqual(expectedAction)
    })

    it('Fetch Authentication Request Success', () => {
        const expectedAction = {
            type: FETCH_AUTHENTICATION_SUCCESS,
            username: "keshav",
            payload: true
        }

        expect(fetchAuthenticationSuccess("keshav")).toEqual(expectedAction)
    })

    it('Fetch Authentication Request Failure', () => {
        const expectedAction = {
            type: FETCH_AUTHENTICATION_FAILURE,
            payload: {
                error: "error"
            }
        }

        expect(fetchAuthenticationFailure({
            error: "error"
        })).toEqual(expectedAction)
    })

    it('Logout', () => {
        const expectedAction = {
            type: LOGOUT
        }

        expect(logout()).toEqual(expectedAction)
    })
})