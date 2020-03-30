import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useApp } from '../utils';
import Page from './Page';
import Login from './Login';
import Income from './Income';
import Expense from './Expense';
import Reports from './Reports';
import Settings from './Settings';

const Router = ({ location }) => {
    const { showLogin } = useApp();

    const { pathname } = location;

    const routes = [
        {
            title: 'Income',
            path: '/income',
            render: () => <Income />
        },
        {
            title: 'Expenses',
            path: '/expense',
            render: () => <Expense />
        },
        {
            title: 'Reports',
            path: '/reports',
            render: () => <Reports />
        },
        {
            title: 'Settings',
            path: '/settings',
            render: () => <Settings />
        },
    ];
    const currentRoute = routes.find(route => route.path === pathname) || {};

    return (
        showLogin ? <Login /> :
            <IonApp>
                <Page title={currentRoute.title}>
                    {routes.map((item, i) => (
                        <Route key={i} path={item.path} render={item.render} exact />
                    ))}
                    <Route exact path="/" render={() => <Redirect to="/income" />} />
                </Page>
            </IonApp>
    );
};

const RouterHooked = withRouter(Router);

export default () => (
    <IonReactRouter>
        <RouterHooked />
    </IonReactRouter>
);