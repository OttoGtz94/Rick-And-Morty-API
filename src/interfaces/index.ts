import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface PropsInterface {
	children: JSX.Element | JSX.Element[];
}

export interface SettingsStateInterface {
	themeMode: string;
}

export interface PersonajesStateInterface {
	personajes: any[];
	loading: boolean;
	error: boolean;
	info: InfoPagesInterface;
	personajeFilter: string;
	paginaActual: number;
}

export interface InfoPagesInterface {
	count: number;
	next: string;
	pages: number;
	prev: string;
}

export interface PersonajeInterface {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	created?: string;
	episode: string;
	location: {
		name: string;
		url: string;
	};
	origin?: {
		name: string;
		url: string;
	};
}

export interface ListaDocSimbInterface {
	icono: IconDefinition;
	text: string;
}
