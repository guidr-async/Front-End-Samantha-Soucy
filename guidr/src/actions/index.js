import axios from "axios";

export const FETCH_HOMEPAGE_START = "FETCH_HOMEPAGE_START";
export const FETCH_HOMEPAGE_SUCCESS = "FETCH_HOMEPAGE_SUCCESS";
export const FETCH_HOMEPAGE_FAILURE = "FETCH_HOMEPAGE_FAILURE";

export const FETCH_PORTFOLIO_START = "FETCH_PORTFOLIO_START";
export const FETCH_PORTFOLIO_SUCCESS = "FETCH_PORTFOLIO_SUCCESS";
export const FETCH_PORTFOLIO_FAILURE = "FETCH_PORTFOLIO_FAILURE";

export const ADD_INFO_START = "ADD_INFO_START";
export const ADD_INFO_SUCCESS = "ADD_INFO_SUCCESS";
export const ADD_INFO_FAILURE = "ADD_INFO_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userLogin = user => dispatch => {
    dispatch({ type: USER_LOGIN_START });
    axios
        .post("https://guidr2.herokuapp.com/login", user)
        .then(res => {
            if (res.status === 200 && res.data) {
                // dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.username });
            } else {
                throw new Error();
            }
        })
        // .then(getHomePage())
        // .then(getPortfolio())
        .catch(err => console.log(err))
};

export const getHomePage = () => dispatch => {
    dispatch({ type: FETCH_HOMEPAGE_START });
    axios
        .get("https://guidr2.herokuapp.com/adventures")
        .then(res => dispatch({ type: FETCH_HOMEPAGE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_HOMEPAGE_FAILURE, payload: err }))
};

export const getPortfolio = () => dispatch => {
    dispatch({ type: FETCH_PORTFOLIO_START });
    axios
        .get("https://guidr2.herokuapp.com/user")
        .then(res => dispatch({ type: FETCH_PORTFOLIO_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_PORTFOLIO_FAILURE, payload: err }))
};

export const addInfo = user => dispatch => {
    dispatch({ type: ADD_INFO_START });
    axios
        .post("https://guidr2.herokuapp.com/user", user)
        .then(res => dispatch({ type: ADD_INFO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_INFO_FAILURE, payload: err}))
}