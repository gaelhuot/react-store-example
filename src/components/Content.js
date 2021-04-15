import { useState, useEffect } from 'react';
import {useUser} from '../store/modules/user/index';

const Content = () => {
    const [auth, setAuth] = useState(false);

    const login = () => {
    
    };

    const logout = () => {

    };
    
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