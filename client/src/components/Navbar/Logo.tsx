import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
	& h2 a {
		text-decoration: none;
		font-size: 28px;
		font-weight: bold;
		color: #e4e4e4;
		cursor: pointer;
	}

	& h2 span {
		display: inline-block;
		width: 15px;
		height: 15px;
		margin-right: 5px;
		border-radius: 4px;
		background: ${(props) => props.theme.palette.primary};
		vertical-align: middle;
	}
`;

interface ILogoProps {
	style?: CSSProperties;
}

const Logo: React.FC<ILogoProps> = ({ style }) => {
	let navigate = useNavigate();
	return (
		<StyledLogo style={style}>
			<h2>
				<a onClick={() => navigate('/')}>
					<span />compilateur
				</a>
			</h2>
		</StyledLogo>
	);
};

export default Logo;
