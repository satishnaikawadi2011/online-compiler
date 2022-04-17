import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppStylesProvider } from './styles/Provider';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './styles/themes/mui-theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppStylesProvider>
			<ThemeProvider theme={muiTheme}>
				<App />
			</ThemeProvider>
		</AppStylesProvider>
	</React.StrictMode>
);
