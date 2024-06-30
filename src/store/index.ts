import { configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Application from "./slices/Application";
import User from "./slices/User";

const Store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // @ts-ignore
        serializableCheck: false,
    }),
    reducer: {
        application: Application,
        user: User,
    },
});

export type TRootState = ReturnType<typeof Store.getState>;
export type TAppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default Store;
