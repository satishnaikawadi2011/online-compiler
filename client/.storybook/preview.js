import React from 'react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { AppStylesProvider } from '../src/styles/Provider';

export const parameters = {
	darkMode : {
		dark : {
			...themes.dark, // copy existing values
			appContentBg : '#202020', // main story view frame
			barBg        : '#202020' // top toolbar
		}
	}
};

export const decorators = [
	(Story) => (
		<AppStylesProvider>
			<Story />
		</AppStylesProvider>
	)
];
