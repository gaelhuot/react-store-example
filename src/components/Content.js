import { useState, useEffect } from 'react';
import {useUser} from '../store/modules/user/index';

const Content = () => {
    const [auth, setAuth] = useState(false);

    const user = useUser();

    const login = () => {
        // TODO
        user.login({
            name : 'John doe'
        });
    };

    const logout = () => {
        // TODO
        user.logout();
    };

    useEffect(() => {
        if ( user.userStore.auth === true ) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [user.userStore])
    
    return (
        <div className="flex justify-center items-center h-20">
            {
                !auth && (
                    <button className="bg-green-200 w-20 h-8" onClick={login}>Login</button>        
                )
            }
            {
                auth && (
                    <button className="bg-red-200 w-20 h-8" onClick={logout}>Logout</button>        
                )
            }
        </div>
    );
};

export default Content;