import { ThemeProvider, createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
	palette:
		{
			mode: 'dark',
			primary:
				{
					main: '#7357fa'
				},
			background:
				{
					paper: '#19202b'
				}
		},
	typography:
		{
			fontFamily: 'PoppinsSemiBold'
		}
});
