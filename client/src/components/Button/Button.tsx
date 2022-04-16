import styled from 'styled-components';
import React, { MouseEventHandler } from 'react';

export const Button = styled.button`
	margin: 0.3125em;
	padding: 8px 35px;
	transition: box-shadow .1s;
	box-shadow: 0 0 0 3px transparent;
	font-weight: 500;
	&:not([disabled]) {
		cursor: pointer;
	}
	border: 0;
	border-radius: 0.25em;
	background: initial;
	color: #fff;
	font-size: 1em;
	transition-duration: .3s;
	transition-property: background-color, color;
`;

export const NormalButton = styled(Button)`
    background: ${(props) => props.theme.palette.primary};
    color: #fff;
    &:hover{
        background-color: ${(props) => props.theme.palette.primaryHoverBg};
    }
`;

export const OutlinedButton = styled(Button)`
    color:${(props) => props.theme.palette.primary};
    border:1px solid ${(props) => props.theme.palette.primary};
    &:hover{
        background: ${(props) => props.theme.palette.primary};
        color: #fff;
    }
`;

const StyledIconButton = styled(NormalButton)`
	display: flex; 
	align-items: center; 
	padding: 8px 20px;
`;

interface IconBtnProps {
	Icon?: any;
}
export const IconButton: React.FC<IconBtnProps & React.HTMLProps<HTMLButtonElement>> = ({
	Icon,
	children,
	...props
}) => {
	return (
		<StyledIconButton {...props as any}>
			<Icon width={30} height={30} fill="#fff" />
			{children}
		</StyledIconButton>
	);
};
