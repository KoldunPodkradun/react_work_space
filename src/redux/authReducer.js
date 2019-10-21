const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

// Action Creator

export const setAuthUserData = (usersId, email, login) => ({type: SET_USERS_DATA, data: {usersId, email, login}});

export default authReducer;