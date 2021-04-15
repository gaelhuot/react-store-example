import { USER_LOGGING, USER_LOGOUT } from "./types";

export const userLogging = (data) => {
    return {
        type: USER_LOGGING,
        payload : data
    };
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    };
};
