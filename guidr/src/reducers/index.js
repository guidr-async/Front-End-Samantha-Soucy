import {
    FETCH_HOMEPAGE_START,
    FETCH_HOMEPAGE_SUCCESS,
    FETCH_HOMEPAGE_FAILURE,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    SET_USER,
    LOGGING_OUT,
    FETCH_USER_ADVENTURE_START,
    FETCH_USER_ADVENTURE_SUCCESS,
    FETCH_USER_ADVENTURE_FAILURE
} from "../actions"

const initialState = {
    adventures: [],
    users: [],
    user: JSON.parse(localStorage.getItem("user")),
    fetchingInfo: false,
    fetchingUsers: false,
    loggingIn: false,
    loggedIn: false,
    fetchingAdventures: false,
    userAdventures: JSON.parse(localStorage.getItem('userAdventures')),
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
                loggedIn: true
            };
        case LOGGING_OUT:
            return {
                ...state,
                user: [],
                loggedIn: false
            };
        case FETCH_HOMEPAGE_START:
            return {
                ...state,
                error: null,
                fetchingInfo: true
            };
        case FETCH_HOMEPAGE_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingInfo: false,
                adventures: payload
            };
        case FETCH_HOMEPAGE_FAILURE:
            return {
                ...state,
                fetchingInfo: false,
                error: payload
            };
        case FETCH_USERS_START:
            return {
                ...state,
                fetchingUsers: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                fetchingUsers: false,
                users: payload,
                error:null
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                fetchingInfo: false,
                error: payload
            };
        
        case ADD_USER_START:
            return {
                ...state,
                addingInfo: true,
                error: null
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: payload,
                addingUser: false,
                error: null
            };
        case ADD_USER_FAILURE:
            return {
                ...state,
                error: payload,
                addingUser: false
            };
        case USER_LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
                loggedIn: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggedIn: true,
                loggingIn: false,
                user: payload
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: payload,
                loggedIn: false,
                loggingIn: false
            };
        case FETCH_USER_ADVENTURE_START:
            return {
                ...state,
                fetchingAdventures: true,
                error: null
            };
        case FETCH_USER_ADVENTURE_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingAdventures: false,
                userAdventures: payload
            };
        case FETCH_USER_ADVENTURE_FAILURE:
            return {
                ...state,
                fetchingAdventures: false,
                error: payload
            };
        default:
            return state
    }
}