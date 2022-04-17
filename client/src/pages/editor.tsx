import React from 'react';
import styled from 'styled-components';
import Editor from '../components/Editor/Editor';
import Header from '../components/Navbar/Header';

const EditorContainer = styled.div`
	position: absolute;
	margin: auto;
	top: 62px;
	right: 0;
	left: 0;
	bottom: 0;
	font-family: sans-serif;
	text-align: center;
	padding: 10px;
	width: 100%;
	height: calc(100% - 62px);
	margin-top: 0;
`;

const EditorPageHeader = styled(Header)`
padding-top:10px;
padding-bottom:0;
`;

const EditorPage = () => {
	return (
		<React.Fragment>
			<EditorPageHeader noLinks items={[]} />
			<EditorContainer>
				<Editor />
			</EditorContainer>
		</React.Fragment>
	);
};

export default EditorPage;
