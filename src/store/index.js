import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key : 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: {
    todo: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);