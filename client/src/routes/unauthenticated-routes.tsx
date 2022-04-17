import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages';

export interface RouteType {
	path: string;
	element: JSX.Element;
}

const ClientRoutes: RouteType[] = [
	{ path: '/', element: <HomePage /> }
];

const UnauthenticatedRoutes = () => {
	return (
		<Router>
			<Routes>
				{ClientRoutes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
			</Routes>
		</Router>
	);
};

export default UnauthenticatedRoutes;
