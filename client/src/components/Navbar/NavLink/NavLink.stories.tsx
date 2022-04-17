import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../index.css';
import NavLink from './NavLink';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'NavLink',
	component: NavLink
} as ComponentMeta<typeof NavLink>;

export const Link: ComponentStory<typeof NavLink> = () => <NavLink active>Home</NavLink>;
