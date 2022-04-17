import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import Header from '../components/Navbar/Header';
import bg from '../assets/images/laptop.jpg';

const Hero = styled.section`
	width: 100%;
	height: 100vh;
	background: url(${bg});
	background-color: rgba(39, 39, 39, .7);
	background-blend-mode: color-burn;
	background-repeat: no-repeat;
	background-position: left center;
	background-size: cover;
	position: relative;
`;

const HomePage = () => {
	return (
		<Hero>
			<Header
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'About', path: '/about' },
					{ label: 'Editor', path: '/editor' }
				]}
			/>
			<Banner />
		</Hero>
	);
};

export default HomePage;
