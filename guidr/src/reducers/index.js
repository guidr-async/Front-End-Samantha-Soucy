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
    FETCH_USER_ADVENTURE_FAILURE,
    
    UPDATE_ADVENTURE_START,
    UPDATE_ADVENTURE_SUCCESS,
    UPDATE_ADVENTURE_FAILURE,
    
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    
    DELETING_ADVENTURE_START,
    DELETING_ADVENTURE_SUCCESS,
    
    ADD_ADVENTURE_START,
    ADD_ADVENTURE_SUCCESS,
    ADD_ADVENTURE_FAILURE,

    // TRANSITION_START,
    // TRANSITION_END
} from "../actions"

const initialState = {
    adventures: [],
    users: [],
    user: {},
    isFetchingInfo: false,
    isFetchingUsers: false,
    isLoggingIn: false,
    isLoggedIn: false,
    isFetchingAdventures: false,
    isUpdatingUser: false,
    isUpdating: false,
    isAddingAdventure: false,
    userAdventures: JSON.parse(localStorage.getItem('userAdventures')),
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
                isLoggedIn: true
            };
        case LOGGING_OUT:
            return {
                ...state,
                user: {},
                isLoggedIn: false
            };
        case FETCH_HOMEPAGE_START:
            return {
                ...state,
                error: null,
                isFetchingInfo: true
            };
        case FETCH_HOMEPAGE_SUCCESS:
            return {
                ...state,
                error: null,
                isFetchingInfo: false,
                adventures: payload
            };
        case FETCH_HOMEPAGE_FAILURE:
            return {
                ...state,
                isFetchingInfo: false,
                error: payload
            };
        case FETCH_USERS_START:
            return {
                ...state,
                isFetchingUsers: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            console.log("fet_users", payload)
            // const loadedUsers = payload.map(user => { return { name: user.name, username: user.username, id: user.id, location: user.location, bio: user.bio, professional: user.professional, email: user.email } });
            localStorage.setItem("users", JSON.stringify(payload))
            return {
                ...state,
                isFetchingUsers: false,
                users: payload,
                error:null
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetchingInfo: false,
                error: payload
            };
        
        case ADD_USER_START:
            return {
                ...state,
                isAddingUser: true,
                error: null
            };
        case ADD_USER_SUCCESS:
            console.log(payload)
            return {
                ...state,
                users: payload,
                isAddingUser: false,
                error: null
            };
        case ADD_USER_FAILURE:
            return {
                ...state,
                error: payload,
                isAddingUser: false
            };
        case USER_LOGIN_START:
            return {
                ...state,
                error: null,
                isLoggingIn: true,
                isLoggedIn: true
            };
        case USER_LOGIN_SUCCESS:
            const trueUser = state.users.find(user => user.username === payload.data.message)
            localStorage.setItem("token", payload.data.token)
            return {
                ...state,
                error: null,
                isLoggedIn: true,
                isLoggingIn: false,
                user: trueUser
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: payload,
                isLoggedIn: false,
                isLoggingIn: false
            };
        case FETCH_USER_ADVENTURE_START:
            return {
                ...state,
                isFetchingAdventures: true,
                error: null
            };
        case FETCH_USER_ADVENTURE_SUCCESS:
            return {
                ...state,
                error: null,
                isFetchingAdventures: false,
                userAdventures: payload
            };
        case FETCH_USER_ADVENTURE_FAILURE:
            return {
                ...state,
                isFetchingAdventures: false,
                error: payload
            };
        case UPDATE_ADVENTURE_START:
            return {
                ...state,
                error: null,
                isUpdating: true
            };
        case UPDATE_ADVENTURE_SUCCESS:
            const adventures = state.adventures.filter(adventure => adventure.id !== payload.id)
            const userAdventures = state.userAdventures.filter(adventure => adventure.id !== payload.id)
            return {
                ...state,
                adventures: [
                    ...adventures,
                    payload
                ],
                userAdventures: [
                    ...userAdventures,
                    payload
                ]
            };
        case UPDATE_ADVENTURE_FAILURE:
            return {
                ...state,
                error: payload,
                isUpdating: false
            };
        case DELETING_ADVENTURE_START:
            return {
                ...state,
                error: null,
                isDeleting: true
            };
        case DELETING_ADVENTURE_SUCCESS:
            const deleteAdventure = state.adventures.filter(adventure => adventure.id !== payload)
            const userdeleteAdventure = state.userAdventures.filter(adventure => adventure.id !== payload)
            return {
                ...state,
                adventures: [
                    ...deleteAdventure,
                ],
                userAdventures: [
                    ...userdeleteAdventure,
                ]
            };
        case ADD_ADVENTURE_START:
            return {
                ...state,
                isAddingAdventure: true,
                error: null
            };
        case ADD_ADVENTURE_SUCCESS:
            return {
                ...state,
                adventures: [
                    ...state.adventures,
                    payload
                ],
                userAdventures: [
                    ...state.userAdventures,
                    payload
                ],
                isAddingAdventure: false,
                error: null
            };
        case ADD_ADVENTURE_FAILURE:
            return {
                ...state,
                isAddingAdventure: false,
                error: payload
            };
        case UPDATE_USER_START:
            return {
                ...state,
                error: null,
                isUpdatingUser: true,
            };
        case UPDATE_USER_SUCCESS:
            const users = state.users.filter(user => user.id !== payload.id)
            return {
                ...state,
                users: [
                    ...users,
                    payload
                ],
                user: payload
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                error: payload,
                isUpdatingUser: false
            };
        default:
            return state
    }
}

