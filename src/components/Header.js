import { useState, useEffect } from 'react';
import useUser from '../store/modules/user/hook';

const Header = () => {
    const [userData, setUserData] = useState({});
    const [isLogged, setIslogged] = useState(false);

    const user = useUser();

    useEffect(() => {
        if (user.userStore.auth === true) {
            console.log(user.userStore);
            setIslogged(true);
            setUserData(user.userStore.data);
        } else {
            setIslogged(false);
            setUserData({});
        }
    }, [user.userStore]);

    return (
        <div className="w-full h-12 bg-gray-800 text-white p-2">
            {isLogged && (
                <div className="flex justify-start items-center w-full h-full">
                    <img src={userData.avatar} className="mx-2 h-full border"></img>
                    <div className="capitalize">{userData.first_name} {userData.last_name}</div>
                </div>
            )}
        </div>
    );
};

export default Header;