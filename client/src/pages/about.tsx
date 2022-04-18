import React from 'react';
import { Container } from '../components/Container/Container';
import Header from '../components/Navbar/Header';
import coderIllustration from '../assets/images/coder.svg';
import { Helmet } from 'react-helmet';
const AboutPage = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>About | Compilateur</title>
			</Helmet>
			<Header
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'About', path: '/about' },
					{ label: 'Editor', path: '/editor' }
				]}
			/>
			<Container>
				<h1 style={{ textAlign: 'center', marginBottom: 20 }}>About Compilateur</h1>
				<div style={{ textAlign: 'center' }}>
					<img
						style={{ width: 300, marginBottom: 30, marginTop: 30 }}
						src={coderIllustration}
						alt="Programmer"
					/>
				</div>
				<p>
					Compilateur is the in browser online compiler to run your source code on mobile or desktop or any
					other device without any environment setup. It can compile and run source code of various languages
					like C,C++,Java,Python,Javascript (Node JS),Golang,Rust,Ruby,Elixir,etc. We are going to add more
					and more languages in the future.
				</p>
			</Container>
		</React.Fragment>
	);
};

export default AboutPage;
