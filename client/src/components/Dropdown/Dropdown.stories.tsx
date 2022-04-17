import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../index.css';
import DropdownMenu from './Dropdown';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Dropdown',
	component: DropdownMenu
} as ComponentMeta<typeof DropdownMenu>;

const items = [
	{ label: 'Football', value: 'football' },
	{ label: 'Cricket', value: 'cricket' },
	{ label: 'Badminton', value: 'badninton' }
];

export const Menu: ComponentStory<typeof DropdownMenu> = () => {
	const [
		currItem,
		setCurrItem
	] = React.useState(items[0]);
	return (
		<DropdownMenu
			items={items}
			selectedOption={currItem}
			onOptionClicked={(item) => setCurrItem(item as any)}
			placement="bottom"
		/>
	);
};
