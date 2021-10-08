import React from 'react';
import { Route } from 'react-router-dom';

function AppRoute({ component: Component, ...rest }) {
	document.title = rest.title;

	return (
		<Route
			render={(props) => (
				<Component {...props} />
			)}
		/>
	);
}

export default AppRoute;