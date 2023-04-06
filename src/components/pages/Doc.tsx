import { Container, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircle,
	faEarthAmericas,
	faHeartCircleCheck,
	faHeartCircleExclamation,
	faHeartCircleXmark,
	faLocationDot,
	faMars,
	faPerson,
	faPersonCircleQuestion,
	faRobot,
	faTransgender,
	faTv,
	faVenus,
} from '@fortawesome/free-solid-svg-icons';
import { ListaDocSimbInterface } from '../../interfaces';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const Doc = () => {
	const listaCard: ListaDocSimbInterface[] = [
		{
			icono: faHeartCircleCheck,
			text: 'El personaje esta vivo.',
		},
		{
			icono: faHeartCircleXmark,
			text: 'El personaje esta muerto.',
		},
		{
			icono: faHeartCircleExclamation,
			text: 'No se sabe el estatus del personaje.',
		},
		{
			icono: faPerson,
			text: 'El personaje es humano.',
		},
		{
			icono: faRedditAlien,
			text: 'El personaje es un alien.',
		},
		{
			icono: faRobot,
			text: 'El persona es un robot',
		},
		{
			icono: faPersonCircleQuestion,
			text: 'No se sabe si es humano, robot, alien, etc.',
		},
		{
			icono: faMars,
			text: 'El personaje es hombre.',
		},
		{
			icono: faVenus,
			text: 'El personaje es mujer.',
		},
		{
			icono: faTransgender,
			text: 'No se sabe el genero sexual del personaje.',
		},
		{
			icono: faEarthAmericas,
			text: 'El lugar de origen del personaje.',
		},
		{
			icono: faLocationDot,
			text: 'EL lugar donde se encuentra el personaje.',
		},
		{
			icono: faTv,
			text: 'La cantidad de episodios donde aparece el personaje.',
		},
	];
	return (
		<Container
			style={{ padding: '10px 15px', width: '100%' }}>
			<Typography variant='h4'>Simbología</Typography>
			<Container>
				<Typography variant='h6'>
					Simbolos en las tarjetas
				</Typography>
				<ul>
					{listaCard.map(
						(item: ListaDocSimbInterface) => (
							<li>
								<FontAwesomeIcon
									icon={item.icono}
								/>{' '}
								{item.text}
							</li>
						),
					)}
				</ul>
			</Container>
			<Container>
				<Typography variant='h6'>
					Simbolos en la lista de personajes
				</Typography>
				<ul>
					<li>
						<FontAwesomeIcon icon={faCircle} /> Indica
						el estatus de vida del personaje [verde:
						vivo, rojo: muerto, amarillo:
						desconocido].
					</li>
				</ul>
			</Container>
		</Container>
	);
};

export default Doc;
