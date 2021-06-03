import { createStore, combineReducers } from "redux";
import user from "./modules/user/reducer";


// J'avais oublié de mettre un objet dans combineReducers, j'avais mis direct (user) 
// à la place de ({user})

// Je suis un porc

// Reducer
export const store = createStore(combineReducers({
    user
}));