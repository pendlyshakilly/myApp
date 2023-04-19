import { combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";

type ReducerType = typeof rootReducers
export type AppStateType = ReturnType<ReducerType>

const rootReducers = combineReducers({
        auth: AuthReducer,
        profile: ProfileReducer
    })

export const store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store

export default store
