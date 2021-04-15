import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { userLogging, userLogout } from './actions'

/**
 *
 * 
 */
const useUserStore = () => {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);

    const login = (userdata) => {
        dispatch(userLogging(userdata));
    }


    const logout = () => {
        dispatch(userLogout());
    }

    return {
        userStore,
        login,
        logout
    };
};

export default useUserStore;
