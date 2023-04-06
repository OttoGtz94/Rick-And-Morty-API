import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { SettingsStateInterface } from '../../../interfaces/index';
const initialState: SettingsStateInterface = {
	themeMode: 'light',
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setThemeMode: (
			state,
			action: PayloadAction<string>,
		) => {
			state.themeMode = action.payload;
		},
	},
});

export const { setThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
