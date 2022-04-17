import { useEffect, useState } from 'react';
import * as classes from './editor.module.css';

import styled from 'styled-components';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-python';

import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';
import { IconButton } from '../Button/Button';
import RunIcon from '../Icons/Run';
import LanguageMenu from './Menu/LanguageMenu';
import { ResponseDataType } from '../../api/code';
import codeApi from '../../api/code';
import useApi from '../../hooks/useApi';
import { useAppStore } from '../../store';
import { languages } from '../../constants';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export interface ITestComponent{
	'data-testid'?: string;
}

const EditorContainer = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: auto 200px;
	grid-gap: 0 20px;
	& * {
		font-family: monospace !important;
	}
	& .ace_gutter {
		background-color: ${(props) => props.theme.palette.common.bodyBgColor};
	}
	& .ace_editor {
		background-color: ${(props) => props.theme.palette.common.bodyBgColor};
	}
	& .ace_support.ace_function {
		color: ${(props) => props.theme.palette.primary};
	}
	@media only screen and (min-width: 600px) {
		grid-template-rows: unset;
		grid-template-columns: auto 350px;
	}
`;

const OutputContainer = styled.div<ITestComponent>`
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

const CodeContainer = styled.div<ITestComponent>``;

const OutputTitle = styled.div`
	color: ${(props) => props.theme.palette.primary};
	margin: 7px 0px;
	text-align: left !important;
`;

const OutputContent = styled.div`
	text-align: left;
	color: white;
	overflow: auto;
	white-space: pre-line;
	font-family: monospace;
	font-size: 17px;
`;

const OutputActions = styled.div`
	text-align: left !important;
	display: flex;
`;

const languageModes = {
	'C++': 'c_cpp',
	'C': 'c_cpp',
	'Java': 'java',
	'Rust': 'rust',
	'Ruby': 'ruby',
	'Elixir': 'elixir',
	'Node JS': 'javascript',
	'Python': 'python',
	'Go':'golang'
}

const Editor = () => {
	const { data, error, loading, request: runSourceCode } = useApi(codeApi.runSourceCode);
	const { currentLanguage } = useAppStore();

	const onChange = (newValue: any) => {
		setCode(newValue);
	};

	const [
		code,
		setCode
	] = useState(``);

	const [
		input,
		setInput
	] = useState<any[]>([]);

	const [
		responseData,
		setResponseData
	] = useState<ResponseDataType|null>(null);

	useEffect(
		() => {
			if (data) {
				let resData: any = data;
				setResponseData(resData.result);
			}
		},
		[
			data
		]
	);

	const handleRun = async () => {
		await runSourceCode(languages[currentLanguage], code, input);
	};

	if (loading) {
		return <LoadingSpinner style={{height:'100%'}}/>
	}

	return (
		<EditorContainer>
			<CodeContainer data-testid='code-section'>
				<AceEditor
					mode={(languageModes as any)[currentLanguage]}
					theme="dracula"
					onChange={onChange}
					name="@satishnaikawadi2001/oc"
					setOptions={{
						showPrintMargin: false,
						fontSize: 20
					}}
					className={(classes as any).editor}
					value={code}
					readOnly={loading}
				/>
			</CodeContainer>
			<OutputContainer data-testid='output-section'>
				<OutputTitle>Output</OutputTitle>
				<OutputContent>{responseData?.stdout ? responseData?.stdout : responseData?.stderr}</OutputContent>
				<OutputActions>
					<div style={{display:'flex',}}>
						<IconButton onClick={handleRun} Icon={RunIcon}>
						Run
					</IconButton>
						<LanguageMenu />
					</div>
				</OutputActions>
			</OutputContainer>
		</EditorContainer>
	);
};

export default Editor;
