import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NormalButton, OutlinedButton } from '../Button/Button';
import { Container } from '../Container/Container';

const StyledBanner = styled.section`
	margin-top: 150px;
	@media screen and (max-width: 740px) {
		margin-top: 100px;
	}
`;

const BannerContainer = styled(Container)`
    padding: 0px 7%;
`;

const Details = styled.div`
	width: 350px;
	margin-bottom: 40px;
	color: #e4e4e4;
	h1 {
		font-size: 50px;
		font-weight: 600;
		line-height: 1;
		margin-bottom: 20px;
	}
`;

const Actions = styled.div``;

const Banner = () => {
	let navigate = useNavigate();
	return (
		<StyledBanner>
			<BannerContainer>
				<Details>
					<h1>Compile,Run Anywhere</h1>
					<p>
						Compilateur is the in browser online compiler to run your source code on mobile or desktop or
						any other device without any environment setup.
					</p>
				</Details>
				<Actions>
					<NormalButton onClick={() => navigate('/editor')}>Editor</NormalButton>
					<OutlinedButton onClick={() => navigate('/about')}>Know more</OutlinedButton>
				</Actions>
			</BannerContainer>
		</StyledBanner>
	);
};

export default Banner;
