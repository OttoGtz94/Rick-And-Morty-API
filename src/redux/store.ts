import {
	Action,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';

import {
	persistStore,
	persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsReducer from './slices/settings';
import personajesReducer from './slices/personajes/index';

const persistSettingsConfing = {
	key: 'settings',
	storage,
	withList: ['theme'],
};

const store = configureStore({
	reducer: {
		settings: persistReducer<
			ReturnType<typeof settingsReducer>
		>(persistSettingsConfing, settingsReducer),
		personajes: personajesReducer,
	},
	middleware: defaultMiddleware =>
		defaultMiddleware({ serializableCheck: false }),
});

//types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
	ReturnType<any>,
	RootState,
	unknown,
	Action<any>
>;

export const persistor = persistStore(store);

export default store;
