import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ActiveLinkType, useAppStore } from '../../store';
import { Container } from '../Container/Container';
import Logo from './Logo';
import Nav from './Nav';
import NavLink from './NavLink/NavLink';

export interface INavItem {
	label: string;
	path: ActiveLinkType;
}

interface IHeaderProps {
	items: INavItem[];
	noLinks?: boolean;
}

const StyledHeader = styled.header`padding: 30px 0px;`;
const HeaderContainer = styled(Container)`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: baseline;
`;

const Header: React.FC<IHeaderProps & React.HTMLProps<HTMLHeadingElement>> = ({
	items = [],
	noLinks = false,
	...props
}) => {
	let navigate = useNavigate();
	let location = useLocation();
	useEffect(
		() => {
			setActiveLink(location.pathname as any);
		},
		[
			location
		]
	);
	const { setActiveLink, activeLink } = useAppStore();
	const handleLinkClick = (item: INavItem) => {
		setActiveLink(item.path);
		navigate(item.path);
	};
	return (
		<StyledHeader {...props as any}>
			<HeaderContainer>
				<Logo />
				{!noLinks && (
					<Nav>
						{items.map((l) => {
							return (
								<NavLink key={l.path} active={activeLink == l.path} onClick={() => handleLinkClick(l)}>
									{l.label}
								</NavLink>
							);
						})}
					</Nav>
				)}
			</HeaderContainer>
		</StyledHeader>
	);
};

export default Header;
