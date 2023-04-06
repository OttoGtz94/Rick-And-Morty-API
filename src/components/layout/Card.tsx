import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { CardStyled } from '../../theme/CardsStyle';
import { PersonajeInterface } from '../../interfaces/index';

interface PropsCardInterface {
	personaje: PersonajeInterface;
	onClick: () => void;
}

const Card = ({
	personaje,
	onClick,
}: PropsCardInterface) => {
	return (
		<CardStyled
			style={{ maxWidth: '250px', padding: '0px' }}>
			<CardMedia
				component='img'
				alt='imagen'
				height='200'
				image={personaje.image}
			/>
			<CardContent style={{}}>
				<Typography
					gutterBottom
					variant='h6'
					component='div'>
					{personaje.name}
				</Typography>
				<Typography
					variant='subtitle2'
					color='text.secondary'>
					<FontAwesomeIcon
						icon={faCircle}
						color={
							personaje.status === 'Alive'
								? '#90BF49'
								: personaje.status === 'Dead'
								? '#B10F00'
								: '#eee236'
						}
					/>{' '}
					{personaje.status} -{personaje.gender}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' onClick={onClick}>
					Ver más
				</Button>
			</CardActions>
		</CardStyled>
	);
};

export default Card;
