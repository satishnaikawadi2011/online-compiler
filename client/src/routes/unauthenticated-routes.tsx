import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages';
import AboutPage from '../pages/about';
import EditorPage from '../pages/editor';
import NotFoundPage from '../pages/not-found';

export interface RouteType {
	path: string;
	element: JSX.Element;
}

const ClientRoutes: RouteType[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/editor', element: <EditorPage /> },
	{ path: '/about', element: <AboutPage /> }
];

const UnauthenticatedRoutes = () => {
	return (
		<Router>
			<Routes>
				{ClientRoutes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default UnauthenticatedRoutes;
