import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { imgApi } from "./services/imgApi";


const rootReducer = combineReducers({
    [imgApi.reducerPath]: imgApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(imgApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']