import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../@types';

const initialState:User = {
	username: '',
	token: '',
};

const userSlice = createSlice({
	name: '@user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.username = action.payload.username;
			state.token = action.payload.token;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer
