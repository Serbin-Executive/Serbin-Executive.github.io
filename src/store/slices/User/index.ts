import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface IUserSlice {
    isLoggedIn: boolean;
}

const initialState: IUserSlice = {
    isLoggedIn: false,
};

export const userSlice: Slice<IUserSlice> = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
