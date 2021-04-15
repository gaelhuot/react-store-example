import { useState, useEffect } from 'react';
import {useUser} from '../store/modules/user/index';

const Header = () => {
    const [name, setName] = useState("")
    const user = useUser();

    useEffect(() => {
        if ( user.userStore.auth === true ) {
            setName(user.userStore.name);
        } else {
            setName("");
        }
    }, [user.userStore]);

    return (
        <div className="flex justify-end align-center h-10 bg-gray-800 text-white">
            Hello {name}
        </div>
    );
};

export default Header;