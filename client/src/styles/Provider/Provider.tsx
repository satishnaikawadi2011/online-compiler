import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../themes/dark';
import GlobalStyle from '../global-styles';
import '../../index.css';

interface IProps {
	/**
     * Use this to decide the theme of the components
     */
	theme?: 'light' | 'dark';

	children: React.ReactNode;
}

const AppStylesProvider: React.FC<IProps> = ({ children, theme = 'dark' }) => {
	const selectedTheme =

			theme == 'light' ? darkTheme :
			darkTheme;
	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
		</React.Fragment>
	);
};

export default AppStylesProvider;
