import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppStylesProvider } from './styles/Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppStylesProvider>
			<App />
		</AppStylesProvider>
	</React.StrictMode>
);
