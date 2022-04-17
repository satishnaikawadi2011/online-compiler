import React from 'react';
import styled from 'styled-components';

interface INavContainerProps {
	open?: boolean;
	children?: React.ReactNode;
}

const StyledUl =
	styled.ul <
	INavContainerProps >
	`
	list-style: none;
    ${(props) => {
		if (props.open) {
			return `right: 0px;`;
		}
	}}


	@media screen and (max-width: 740px) {
			width: 380px;
			background: rgba(28, 28, 28, .95);
			display: block;
			padding: 80px 50px;
			position: absolute;
			right: -380px;
			top: 0px;
			bottom: 0px;
			transition: all .3s ease-out;
			    ${(props) => {
					if (props.open) {
						return `right: 0px;`;
					}
				}}
	}
`;

const NavLinkContainer: React.FC<INavContainerProps> = ({ open = false, children }) => {
	return <StyledUl open={open}>{children}</StyledUl>;
};

export default NavLinkContainer;
