import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../../index.css';
import Header from './Header';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Header',
	component: Header
} as ComponentMeta<typeof Header>;

export const NavBar: ComponentStory<typeof Header> = () => (
	<Router>
		<Header
			items={[
				{ label: 'Home', path: '/' },
				{ label: 'About', path: '/about' },
				{ label: 'Editor', path: '/about' }
			]}
		/>
	</Router>
);
