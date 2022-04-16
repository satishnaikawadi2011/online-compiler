import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
body {
	font-family: PoppinsRegular;
	color:#fff;
}

h1 {
	font-family: PoppinsBold;
}

button{
	font-family:PoppinsSemiBold;
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	font-family: PoppinsRegular;
	font-size: 16px;
	font-weight: normal;
	line-height: 1.5;
	width: 100%;
	overflow-x: hidden;
	background: #19202b;
}

@media (max-width: 600px) {
	body {
		padding: 8px;
	}
	*::-webkit-scrollbar {
		display: none;
	}
}

*::-webkit-scrollbar {
	background: rgba(38, 47, 61, 0.44);
}
*::-webkit-scrollbar-thumb {
	background-color: #262f3d;
}
*::-webkit-scrollbar-thumb:hover {
	background-color: #465162;
}

h1 {
	line-height: 1.1;
}

button {
	font-family: PoppinsMedium;
}

`;

export default GlobalStyle;
