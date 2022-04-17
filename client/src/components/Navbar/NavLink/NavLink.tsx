import React from 'react';
import styled from 'styled-components';

interface INavLinkProps {
	active?: boolean;
}

const StyledListItem = styled.li`
	display: inline-block;
	@media screen and (max-width: 740px) {
		display: block;
	}
`;

const StyledLink =
	styled.a <
	INavLinkProps >
	`
	display: inline-block;
	text-decoration: none;
	color: #e4e4e4;
	font-size: 14px;
	font-weight: 500;
	margin-left: 20px;
	border: 2px solid transparent;
	line-height: 1;
	padding: 5px 10px;
	border-radius: 3px;
	transition: .3s color;
	cursor:pointer;
	&:hover {
		color: ${(props) => props.theme.palette.primary};
	}
    ${(props) => {
		if (props.active) {
			return `color: ${props.theme.palette.primary};
	                border: 2px solid ${props.theme.palette.primary};`;
		}
	}}
	@media screen and (max-width: 740px) {		
		width: 100%;
		color: #e4e4e4;
		font-size: 18px;
		font-weight: 300;
		margin: 0px 0px 20px;
		border: 2px solid transparent;
		line-height: 1;
		padding: 7px 10px;
		    ${(props) => {
				if (props.active) {
					return `color: ${props.theme.palette.primary};
	                border: 2px solid ${props.theme.palette.primary};`;
				}
			}}
	}
`;

const NavLink: React.FC<INavLinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ active, children, ...props }) => {
	return (
		<StyledListItem>
			<StyledLink {...props as any} active={active}>
				{children}
			</StyledLink>
		</StyledListItem>
	);
};

export default NavLink;
