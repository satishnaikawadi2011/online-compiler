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
import { Backdrop, TextField} from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles((theme:any) =>
  createStyles({
	  backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    },
	  inputModal: {
      height: "fit-content",
      width: "90%",
      maxHeight: 500,
      maxWidth: 400,
      background: "#19202b",
      borderRadius: "5px",
      padding: 15,
      textAlign: "left",
      "& h3": {
        display: "block",
        color: "#7357fa",
		  fontSize: "20px",
		  fontFamily: 'PoppinsSemiBold !important',
		  marginBottom:10
      },
      "& p": {
        display: "block",
		  fontSize: "14px",
		  fontFamily: 'PoppinsRegular !important',
		marginBottom:10
      }
    },
    modalInput: {
      width: "100%",
		marginTop: "10px",
    },
  })
) as any;

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
	const muiClasses = useStyles();
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
	] = useState('');

	const [
		responseData,
		setResponseData
	] = useState<ResponseDataType | null>(null);
	
	const [takeInput, setTakeInput] = useState(false);

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
		setTakeInput(true);
	};

	const handleInputRun = async () => {
		const inputArr = input.split('\n');
		await runSourceCode(languages[currentLanguage], code, inputArr);
	}

	if (loading) {
		return <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
			<LoadingSpinner />
		</div>
	}

	return (
		<EditorContainer>
		<Backdrop
        className={muiClasses.backdrop}
        open={takeInput}
        onClick={() => {
          setTakeInput(false);
        }}
      >
        <div
          className={muiClasses.inputModal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h3>Input</h3>
          <p>
            If your code requires an input, please type it down below otherwise
            leave it empty. For multiple inputs, type in all your inputs line by
            line.
          </p>
          <TextField
            id="outlined-basic"
            label="STD Input"
            variant="filled"
            className={muiClasses.modalInput}
            value={input}
            onChange={(e) => {
              setInput(e.target.value as any);
						}}
            spellCheck={false}
            maxRows={7}
            multiline
          />
         <IconButton style={{marginTop:10}} onClick={handleInputRun} Icon={RunIcon}>
						Run
		</IconButton>
        </div>
      </Backdrop>
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
