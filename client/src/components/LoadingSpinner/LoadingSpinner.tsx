import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
	position: relative;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.palette.common.backdropColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	& div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid ${(props) => props.theme.palette.primary};
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${(props) => props.theme.palette.primary}; transparent transparent transparent;
	}
	& div:nth-child(1) {
		animation-delay: -0.45s;
	}
	& div:nth-child(2) {
		animation-delay: -0.3s;
	}
	& div:nth-child(3) {
		animation-delay: -0.15s;
	}
	animation: ${rotate} 0.8s linear infinite;
`;

const LoadingSpinner: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
	return (
		<SpinnerContainer {...props as any}>
			<Spinner>
				<div />
				<div />
				<div />
				<div />
			</Spinner>
		</SpinnerContainer>
	);
};

export default LoadingSpinner;
