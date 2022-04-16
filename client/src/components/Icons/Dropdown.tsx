import * as React from 'react';
import { SVGProps } from 'react';

const DropdownIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fill="none" d="M0 0h24v24H0z" />
		<path d="m7 10 5 5 5-5" />
	</svg>
);

export default DropdownIcon;
