import React, {
	BaseSyntheticEvent,
	useEffect,
	useState,
} from 'react';
import {
	CircularProgress,
	Pagination,
} from '@mui/material';
import { Container } from '@mui/system';
import { CardContainerStyled } from '../../theme/CardsStyle';
import Card from './Card';
import {
	useCustomDispatch,
	useCustomSelector,
} from '../../hooks/redux';
import {
	getPersonajes,
	changePagePersonajes,
} from '../../redux/slices/personajes/index';
import { PersonajeInterface } from '../../interfaces/index';
import DialogPersonaje from './DialogPersonaje';

const Cards = () => {
	/* const [paginaActual, setPaginaActual] =
		useState<number>(1); */
	const [openDialog, setOpenDialog] =
		useState<boolean>(false);
	const [personajeSelect, setPersonajeSelect] =
		useState<PersonajeInterface>(
			{} as PersonajeInterface,
		);

	const {
		loading,
		personajes,
		info,
		personajeFilter,
		paginaActual,
	} = useCustomSelector(state => state.personajes);
	const dispatch = useCustomDispatch();

	const onChangePage = (pagina: number) => {
		const url: string = `https://rickandmortyapi.com/api/character?page=${pagina}`;
		if (pagina === paginaActual) {
			return;
		} else if (pagina > paginaActual) {
			dispatch(
				changePagePersonajes(pagina, personajeFilter),
			);
		} else if (pagina < paginaActual) {
			dispatch(
				changePagePersonajes(pagina, personajeFilter),
			);
		}
	};

	useEffect(() => {
		dispatch(getPersonajes());
	}, []);

	return (
		<CardContainerStyled>
			{loading && (
				<Container
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						height: '50vh',
						alignItems: 'center',
					}}>
					<CircularProgress size={40} />
				</Container>
			)}
			{personajes.length > 0 ? (
				personajes.map(
					(personaje: PersonajeInterface) => (
						<Card
							key={personaje.id}
							personaje={personaje}
							onClick={() => {
								setPersonajeSelect(personaje);
								setOpenDialog(true);
							}}
						/>
					),
				)
			) : (
				<p>No se cargaron</p>
			)}

			{info.pages > 1 && (
				<Container
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Pagination
						count={info.pages}
						color='primary'
						onChange={(
							e: BaseSyntheticEvent,
							page: number,
						) => onChangePage(page)}
						page={paginaActual}
					/>
				</Container>
			)}
			{openDialog && (
				<DialogPersonaje
					openDialog={openDialog}
					setOpenDialog={setOpenDialog}
					personaje={personajeSelect}
				/>
			)}
		</CardContainerStyled>
	);
};

export default Cards;
