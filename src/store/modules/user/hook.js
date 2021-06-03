import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";

import { userLogging, userLogout, userData } from './actions'

/**
 *
 * 
 */
const useUser = () => {
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.user);

    const login = async (userdata) => {
        // Là j'utilise pas user data mais dans l'idée tu construit ta requête avec
        const result = await axios.get('https://random-data-api.com/api/users/random_user');
        dispatch(userLogging(result.data));
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

export default useUser;
