import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'LoadingSpinner',
	component: LoadingSpinner
} as ComponentMeta<typeof LoadingSpinner>;

export const Spinner: ComponentStory<typeof LoadingSpinner> = () => <LoadingSpinner />;
