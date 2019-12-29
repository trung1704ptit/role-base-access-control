import React, { Fragment } from 'react';

import Register from '../containers/Register';
import ForgotPassword from '../containers/ForgotPassword';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import NotFound from '../components/NotFound';

const PublicRoutes = ({ match }) => (
	<Fragment>
		<Switch>
			<Route path="/forgot-password" component={ForgotPassword} />
			<Route path="/register" component={Register} />
			<Route exact path="/" component={Login} />
			<Route component={NotFound} />
		</Switch>
	</Fragment>
);

export default PublicRoutes;
