import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container/Container';

const VerticallyCenter = styled.div`
	min-height: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	line-height: 2;
`;

const TextCenter = styled.div`text-align: center;`;

const StyledLink = styled.a`
	color: ${(props) => props.theme.palette.primary};
	cursor: pointer;
`;

const NotFoundPage = () => {
	let navigate = useNavigate();
	return (
		<VerticallyCenter>
			<Helmet>
				<title>Page Not Found | Compilateur</title>
			</Helmet>
			<Container>
				<TextCenter>
					<h1>😮</h1>
					<h2>Oops! Page Not Be Found</h2>
					<p>Sorry but the page you are looking for does not exist.</p>
					<StyledLink onClick={() => navigate('/')}>Back to homepage</StyledLink>
				</TextCenter>
			</Container>
		</VerticallyCenter>
	);
};

export default NotFoundPage;
