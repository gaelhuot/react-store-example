import { USER_LOGGING, USER_LOGOUT } from "./types";

const initialState = {
    auth: false,
    data : {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGING:
            return {
                data : action.payload,
                auth: true,
            };

        case USER_LOGOUT:
            return {
                auth: false
            };
    }
    return state;
};

export default reducer;
