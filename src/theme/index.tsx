import React from 'react';

import {
	ThemeProvider,
	createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useCustomSelector } from '../hooks/redux';

interface PropsInterface {
	children: JSX.Element | JSX.Element[];
}

const MuiThemeProvider: React.FC<PropsInterface> = ({
	children,
}: PropsInterface) => {
	const { themeMode } = useCustomSelector(
		state => state.settings,
	);

	const isLight: boolean = themeMode === 'light';
	const theme = createTheme({
		palette: {
			primary: {
				main: '#90BF49',
				dark: '#F2EA77',
			},
			mode: isLight ? 'light' : 'dark',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiThemeProvider;
