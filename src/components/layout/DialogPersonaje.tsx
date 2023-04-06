import {
	AppBar,
	CardMedia,
	Dialog,
	DialogContent,
	Slide,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import { TransitionProps } from '@mui/material/transitions';
import { PersonajeInterface } from '../../interfaces/index';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import '../../theme/sass/dialog.personaje.style.scss';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

interface PropsDialogPersonajeInterface {
	openDialog: boolean;
	setOpenDialog: (flag: boolean) => void;
	personaje?: PersonajeInterface;
}

const DialogPersonaje = ({
	openDialog,
	setOpenDialog,
	personaje,
}: PropsDialogPersonajeInterface) => {
	return (
		<Dialog
			open={openDialog}
			onClose={() => setOpenDialog(false)}
			TransitionComponent={Transition}>
			<AppBar
				sx={{ position: 'relative' }}
				className='headerDialog'>
				<Toolbar>
					<Typography
						sx={{ ml: 2, flex: 1 }}
						variant='h6'
						component='div'>
						<FontAwesomeIcon
							className={
								personaje?.status === 'Alive'
									? 'vivo'
									: personaje?.status === 'Dead'
									? 'muerto'
									: 'desconocido'
							}
							icon={
								personaje?.status === 'Alive'
									? faHeartCircleCheck
									: personaje?.status === 'Dead'
									? faHeartCircleXmark
									: faHeartCircleExclamation
							}
						/>{' '}
						{personaje?.name}{' '}
					</Typography>
				</Toolbar>
			</AppBar>
			<DialogContent>
				<div className='containerImage'>
					<img src={personaje?.image} alt='imagen' />
				</div>
				<div className='containerInfo'>
					<div className='symbols'>
						<FontAwesomeIcon
							icon={
								personaje?.species === 'Human'
									? faPerson
									: personaje?.species === 'Alien'
									? faRedditAlien
									: personaje?.species === 'Robot'
									? faRobot
									: faPersonCircleQuestion
							}
							className='symbol'
						/>

						<FontAwesomeIcon
							icon={
								personaje?.gender === 'Male'
									? faMars
									: personaje?.gender === 'Female'
									? faVenus
									: faTransgender
							}
							className='symbol'
						/>
					</div>
					<p>
						<FontAwesomeIcon icon={faEarthAmericas} />{' '}
						{personaje?.origin?.name}
					</p>
					<p>
						<FontAwesomeIcon icon={faLocationDot} />{' '}
						{personaje?.location.name}
					</p>
					<p className='episodios'>
						<FontAwesomeIcon icon={faTv} />{' '}
						{personaje?.episode.length}
					</p>
					{/* <Typography variant='subtitle2'>
						Cantidad de episodios:{' '}
						{personaje?.episode.length}{' '}
					</Typography> */}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default DialogPersonaje;
