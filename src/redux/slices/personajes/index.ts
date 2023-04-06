import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../../../utils/axios';
import {
	PersonajesStateInterface,
	InfoPagesInterface,
} from '../../../interfaces/index';
import { Thunk } from '../../store';

const initialState: PersonajesStateInterface = {
	personajes: [],
	loading: false,
	error: false,
	info: {
		count: 0,
		next: '',
		pages: 0,
		prev: '',
	},
	personajeFilter: '',
	paginaActual: 1,
};

const personajesSlice = createSlice({
	name: 'personajes',
	initialState,
	reducers: {
		setPersonajes: (
			state,
			action: PayloadAction<any[]>,
		) => {
			state.personajes = action.payload;
		},
		setLoading: (
			state,
			action: PayloadAction<boolean>,
		) => {
			state.loading = action.payload;
		},
		setInfoPages: (
			state,
			action: PayloadAction<InfoPagesInterface>,
		) => {
			state.info = action.payload;
		},
		setPersonajeFilter: (
			state,
			action: PayloadAction<string>,
		) => {
			state.personajeFilter = action.payload;
		},
		setPaginaActual: (
			state,
			action: PayloadAction<number>,
		) => {
			state.paginaActual = action.payload;
		},
	},
});

export const {
	setPersonajes,
	setLoading,
	setInfoPages,
	setPersonajeFilter,
	setPaginaActual,
} = personajesSlice.actions;

export default personajesSlice.reducer;

export const getPersonajes =
	(): Thunk =>
	async (
		dispatch,
	): Promise<AxiosResponse | AxiosError> => {
		dispatch(setLoading(true));
		try {
			const { data } = await axios.get('character');
			dispatch(setPersonajes(data.results));
			dispatch(setInfoPages(data.info));

			return data;
		} catch (error) {
			return error as AxiosError;
		} finally {
			dispatch(setLoading(false));
		}
	};

export const changePagePersonajes =
	(pagina: number, personaje: string): Thunk =>
	async (
		dispatch,
	): Promise<AxiosResponse | AxiosError> => {
		dispatch(setLoading(true));
		try {
			const { data } = await axios.get(
				personaje
					? `character/?page=${pagina}&name=${personaje}`
					: `character/?page=${pagina}`,
			);
			dispatch(setPersonajes(data.results));
			dispatch(setInfoPages(data.info));
			dispatch(setPaginaActual(pagina));

			return data;
		} catch (error) {
			return error as AxiosError;
		} finally {
			dispatch(setLoading(false));
		}
	};

export const filterPersonajes =
	(filterString: string): Thunk =>
	async (
		dispatch,
	): Promise<AxiosResponse | AxiosError> => {
		dispatch(setLoading(true));
		try {
			const { data } = await axios.get(
				`character/?name=${filterString}`,
			);
			dispatch(setPersonajeFilter(filterString));
			dispatch(setPersonajes(data.results));
			dispatch(setInfoPages(data.info));

			return data;
		} catch (error) {
			return error as AxiosError;
		} finally {
			dispatch(setLoading(false));
		}
	};
