import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";

import user from "./modules/user";

let rootReducer = combineReducers({
    user
});

if (typeof window !== "undefined") {
    rootReducer = combineReducers({
        user : persistReducer(
            { key : 'user', storage: new CookieStorage(Cookies) },
            user
        )
    });
}

export default rootReducer;
