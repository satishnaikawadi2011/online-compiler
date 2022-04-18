import React, { useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
import { useAppStore } from '../../store';
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
	let linkContainerRef: any = useRef();
	const onClickOutside = () => {
		setIsMobileNavOpen(false);
	};
	useClickOutside(linkContainerRef, onClickOutside);
	const { isMobileNavOpen, setIsMobileNavOpen } = useAppStore();
	return (
		<nav ref={linkContainerRef}>
			<Hamb onClick={() => setIsMobileNavOpen(true)}>
				<Line />
				<Line />
				<Line />
			</Hamb>
			<NavLinkContainer open={isMobileNavOpen}>{children}</NavLinkContainer>
		</nav>
	);
};

export default Nav;
