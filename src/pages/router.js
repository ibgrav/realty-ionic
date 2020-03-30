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
    const { showLogin, incomeSync, expenseSync } = useApp();

    const { pathname } = location;

    const pages = [
        {
            title: 'Income',
            path: '/income',
            render: () => <Income />,
            dataSync: incomeSync
        },
        {
            title: 'Expenses',
            path: '/expense',
            render: () => <Expense />,
            dataSync: expenseSync
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
        }
    ];
    const currentPage = pages.find(page => page.path === pathname) || {};

    return (
        showLogin ? <Login /> :
            <IonApp>
                <Page title={currentPage.title} dataSync={currentPage.dataSync}>
                    {pages.map((page, i) => (
                        <Route key={i} path={page.path} render={page.render} exact />
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