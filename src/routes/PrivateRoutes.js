import React, { Component, Fragment } from 'react';
import { uniqBy } from 'lodash';
import { Switch, Route }  from 'react-router-dom';
import AdminOnly from '../containers/AdminOnly';
import Users from '../containers/Users';
import Dashboard from '../containers/Dashboard';
import Manager from '../containers/Manager';
import Customers from '../containers/Customers';
import Service1 from '../containers/Service1';
import Service2 from '../containers/Service2';
import Profile from '../containers/Profile';
import Home from '../containers/Home';
import Navigation from '../components/Navigation';
import { rolesConfig } from '../config/roles';

const Routes = {
	AdminOnly,
	Users,
	Dashboard,
	Manager,
	Customers,
	Service1,
	Service2,
	Profile,
	Home
};

export default class PrivateRoutes extends Component {
    state = {
        allowedRoutes: []
    }

    componentDidMount() {
        let roles = JSON.parse(localStorage.getItem('roles'));

        if (roles) {
            roles = ['common', ...roles];

            // loop the each role
            let allowedRoutes = roles.reduce((acc, role) => {
                // return routes for each roles and combine into one array.
                // acc is an array of routes
                // finally return an array
                return [...acc, ...rolesConfig[role].routes]
            })

            allowedRoutes = uniqBy(allowedRoutes, 'url');
            this.setState({ allowedRoutes });
        }
    }

    render () {
        return (
            <Fragment>
                <Navigation
                    routes={this.state.allowedRoutes}
                    path={this.props.match.path}
                />
                <Switch>
                    <Route
                        exact
                        key="home-route"
                        component={Routes.Home}
                        path={`${this.props.match.path}`}
                    />
                    {this.state.allowedRoutes.map(route => (
                        <Route
                            key={route.url}
                            component={Routes[route.component]}
                            path={`${this.props.match.path}${route.url}`}
                        />
                    ))}
                </Switch>
            </Fragment>
        )
    }
}