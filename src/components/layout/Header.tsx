import {
	faBook,
	faHouse,
	faLightbulb,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Box,
	FormControlLabel,
	InputBase,
	Switch,
	Toolbar,
	Typography,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import {
	useCustomSelector,
	useCustomDispatch,
} from '../../hooks/redux';
import { setThemeMode } from '../../redux/slices/settings';
import {
	filterPersonajes,
	setPaginaActual,
} from '../../redux/slices/personajes/index';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
	'position': 'relative',
	'borderRadius': theme.shape.borderRadius,
	'backgroundColor': alpha(
		theme.palette.common.white,
		0.15,
	),
	'&:hover': {
		backgroundColor: alpha(
			theme.palette.common.white,
			0.25,
		),
	},
	'marginRight': 15,
	'width': '100%',
	[theme.breakpoints.up('sm')]: {
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	'color': 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			'width': '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const Header = () => {
	const {
		settings: { themeMode },
	} = useCustomSelector(state => state);
	const [valueBar, setValueBar] = useState('home');
	const dispatch = useCustomDispatch();

	const navigate = useNavigate();

	const onChangeTheme = (): void => {
		dispatch(
			setThemeMode(
				themeMode === 'dark' ? 'light' : 'dark',
			),
		);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
						}}>
						Rick And Morty Api
					</Typography>
					<BottomNavigation
						//showLabels
						value={valueBar}
						onChange={(event, newValue) => {
							console.log(newValue);
							setValueBar(newValue);
							if (newValue === 'documentacion') {
								navigate(newValue);
							} else {
								navigate('/');
							}
						}}
						style={{
							backgroundColor: 'transparent',
						}}>
						<BottomNavigationAction
							label='Inicio'
							icon={
								<FontAwesomeIcon icon={faHouse} />
							}
							value='home'
						/>
						<BottomNavigationAction
							label='Doc'
							icon={
								<FontAwesomeIcon icon={faBook} />
							}
							value='documentacion'
						/>
					</BottomNavigation>

					<Search>
						<SearchIconWrapper>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
							/>
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Buscar'
							inputProps={{ 'aria-label': 'search' }}
							onChange={(e: any) => {
								dispatch(
									filterPersonajes(e.target.value),
								);
								dispatch(setPaginaActual(1));
							}}
						/>
					</Search>
					<FormControlLabel
						label={
							<FontAwesomeIcon icon={faLightbulb} />
						}
						control={
							<Switch onChange={onChangeTheme} />
						}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
