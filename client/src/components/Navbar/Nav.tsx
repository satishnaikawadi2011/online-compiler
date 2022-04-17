import React from 'react';
import styled from 'styled-components';
import NavLinkContainer from './NavLink/NavLinkContainer';

export interface INavItem {
	label: string;
	path: string;
}

const Hamb = styled.div`
	display: none;
	@media screen and (max-width: 740px) {
		display: block;
		width: 30px;
		height: auto;
		cursor: pointer;
		/* position: absolute; */
		top: 44px;
		right: 30px;
		z-index: 2;
	}
`;

const Line = styled.span`
	display: block;
	width: 100%;
	height: 3px;
	background: #fff;
	&:nth-child(2) {
		margin: 5px 0px;
	}
`;

const Nav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<nav>
			<Hamb>
				<Line />
				<Line />
				<Line />
			</Hamb>
			<NavLinkContainer>{children}</NavLinkContainer>
		</nav>
	);
};

export default Nav;
