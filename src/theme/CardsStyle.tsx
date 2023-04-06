import {
	experimentalStyled as styled,
	AppBar,
	Card,
	Container,
} from '@mui/material';

export const CardContainerStyled = styled(Container)(
	({ theme }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		padding: theme.spacing(1),
		maxWidth: '100%',
	}),
);

export const CardStyled = styled(Container)(
	({ theme }) => ({
		margin: theme.spacing(2),
		boxShadow: `0px 0px 10px ${theme.palette.primary.dark}`,
		borderRadius: '5px',
		padding: '0px',
	}),
);
