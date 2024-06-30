import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import User from "../../../domains/User";

export interface IUserSlice {
    isLoggedIn: boolean;
    currentUser: User;
}

const initialState: IUserSlice = {
    isLoggedIn: false,
    currentUser: {} as User,
};

export const userSlice: Slice<IUserSlice> = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
    },
});

export const { setIsLoggedIn, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
