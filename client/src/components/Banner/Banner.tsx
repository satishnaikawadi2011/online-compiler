import React from 'react';
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
	return (
		<StyledBanner>
			<BannerContainer>
				<Details>
					<h1>Helps brand to grow</h1>
					<p>
						Cavetoo is the industry standard software to get your subscription pricing on the right track to
						unlocking more growth
					</p>
				</Details>
				<Actions>
					<NormalButton>Editor</NormalButton>
					<OutlinedButton>Know more</OutlinedButton>
				</Actions>
			</BannerContainer>
		</StyledBanner>
	);
};

export default Banner;
