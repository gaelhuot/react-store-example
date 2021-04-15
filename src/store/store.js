import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [],
};

// Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
    persistedReducer,
    composeEnhancers()
);

export const persistor = persistStore(store);
