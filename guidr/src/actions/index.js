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

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userLogin = user => dispatch => {
    dispatch({ type: USER_LOGIN_START });
    axios
        .post(`https://guidr2.herokuapp.com/login`, user)
        .then(res => {
            if (res.status === 200 && res.data) {
            } else {
                throw new Error();
            }
        })
        .catch(err => console.log(err))
};

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
        .catch(err => dispatch({ type: FETCH_USERS_FAILURE, payload: err }))
};

export const getSingleUser = id => dispatch => {
    dispatch({ type: FETCH_USER_START });
    axios
        .get(`https://guidr2.herokuapp.com/user/${id}`)
        .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_USER_FAILURE, payload: err }))
};

export const addUser = user => dispatch => {
    dispatch({ type: ADD_USER_START });
    axios
        .post(`https://guidr2.herokuapp.com/user`, user)
        .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_USER_FAILURE, payload: err}))
}