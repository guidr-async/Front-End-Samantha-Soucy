import axios from "axios";

export const FETCH_HOMEPAGE_START = "FETCH_HOMEPAGE_START";
export const FETCH_HOMEPAGE_SUCCESS = "FETCH_HOMEPAGE_SUCCESS";
export const FETCH_HOMEPAGE_FAILURE = "FETCH_HOMEPAGE_FAILURE";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"; 

export const FETCH_USER_ADVENTURE_START = "FETCH_USER_ADVENTURE_START";
export const FETCH_USER_ADVENTURE_SUCCESS = "FETCH_USER_ADVENTURE_SUCCESS";
export const FETCH_USER_ADVENTURE_FAILURE = "FETCH_USER_ADVENTURE_FAILURE"; 

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE"; 

export const UPDATE_ADVENTURE_START = "UPDATE_ADVENTURE_START";
export const UPDATE_ADVENTURE_SUCCESS = "UPDATE_ADVENTURE_SUCCESS";
export const UPDATE_ADVENTURE_FAILURE = "UPDATE_ADVENTURE_FAILURE";

export const ADD_ADVENTURE_START ="ADD_ADVENTURE_START"
export const ADD_ADVENTURE_SUCCESS = "ADD_ADVENTURE_SUCCESS"
export const ADD_ADVENTURE_FAILURE ="ADD_ADVENTURE_FAILURE"

export const DELETING_ADVENTURE_START ="DELETING_ADVENTURE_START"
export const DELETING_ADVENTURE_SUCCESS ="DELETING_ADVENTURE_SUCCESS"

export const SET_USER = "SET_USER";
export const LOGGING_OUT = "LOGGING_OUT"



export const getHomePage = () => dispatch => {
    dispatch({ type: FETCH_HOMEPAGE_START });
    axios
        .get(`https://guidr2.herokuapp.com/adventures`)
        .then(res => dispatch({ type: FETCH_HOMEPAGE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_HOMEPAGE_FAILURE, payload: err }))
};

export const getUsers = () => dispatch => {
    dispatch({ type: FETCH_USERS_START });
    axios
        .get(`https://guidr2.herokuapp.com/user`)
        .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
        .then(localStorage.removeItem("users"))
        .catch(err => dispatch({ type: FETCH_USERS_FAILURE, payload: err }))
};

export const getSingleUser = id => dispatch => {
    dispatch({ type: FETCH_USER_START });
    axios
        .get(`https://guidr2.herokuapp.com/user/${id}`)
        .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_USER_FAILURE, payload: err }))
};
export const getUserAdventure = id => dispatch => {
    dispatch({ type: FETCH_USER_ADVENTURE_START });
    axios
        .get(`https://guidr2.herokuapp.com/user/${id}/adventures`)
        .then(res => dispatch({ type: FETCH_USER_ADVENTURE_SUCCESS, payload: res.data }))
        .then(res => localStorage.setItem("userAdventures", JSON.stringify(res.payload)))
        .catch(err => dispatch({ type: FETCH_USER_ADVENTURE_FAILURE, payload: err }))
};

export const setUser = user => dispatch => {
    dispatch({ type: SET_USER, payload: user })
};
export const logOut = () => dispatch => {
    dispatch({ type: LOGGING_OUT });
};

export const addUser = user => dispatch => {
    dispatch({ type: ADD_USER_START });
    axios
        .post(`https://guidr2.herokuapp.com/user`, user)
        .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }))
        .then(dispatch(getUsers()))
        .catch(err => dispatch({ type: ADD_USER_FAILURE, payload: err }))
};

export const updateAdventure = (id, adventure) => dispatch => {
    dispatch({ type: UPDATE_ADVENTURE_START });
    axios
        .put(`https://guidr2.herokuapp.com/adventures/${id}`, adventure)
        .then(res => dispatch({ type: UPDATE_ADVENTURE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_ADVENTURE_FAILURE, payload: err }))
};

export const deleteTrip = (id) => dispatch => {
    dispatch({ type: DELETING_ADVENTURE_START });
    axios
        .delete(`https://guidr2.herokuapp.com/adventures/${id}`)
        .then(res => {
            if (res.status === 200 && res.data) {
                dispatch({ type: DELETING_ADVENTURE_SUCCESS, payload: id })
            } else {
                throw new Error();
            }
        })
        .catch(err => console.log(err))
};
export const addAdventure = (adventure) => dispatch => {
    dispatch({ type: ADD_ADVENTURE_START });
    axios
        .post(`https://guidr2.herokuapp.com/adventures`, adventure)
        .then(res => dispatch({ type: ADD_ADVENTURE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_ADVENTURE_FAILURE, payload: err }))
};
export const updateUser = (id, user) => dispatch => {
    dispatch({ type: UPDATE_USER_START });
    axios
        .put(`https://guidr2.herokuapp.com/user/${id}`, user)
        .then(res => dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err }))
};

export const userLogin = (user) => dispatch => {
    dispatch({ type: USER_LOGIN_START });
    axios
        .post(`https://guidr2.herokuapp.com/login`, user)
        .then(resp => dispatch({type: USER_LOGIN_SUCCESS, payload: resp}))
        .catch(resp => dispatch({USER_LOGIN_FAILURE, payload: resp}))
};




