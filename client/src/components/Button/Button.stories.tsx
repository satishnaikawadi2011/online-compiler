import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NormalButton, Button, OutlinedButton, IconButton } from './Button';
import '../../index.css';
import DropdownIcon from '../Icons/Dropdown';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <NormalButton>Save</NormalButton>;
export const Outline: ComponentStory<typeof Button> = () => <OutlinedButton>Save</OutlinedButton>;
export const Icon: ComponentStory<typeof Button> = () => <IconButton Icon={DropdownIcon}>Run</IconButton>;
