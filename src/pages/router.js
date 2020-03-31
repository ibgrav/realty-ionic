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
import IncomeEditPage from './Page';

const Router = (props) => {
  const { showLogin, incomeSync, expenseSync } = useApp();
  const { pathname } = props.location;
  const { params } = props.match;

  console.log({ props });

  const pages = [
    {
      title: 'Income',
      path: '/income',
      render: () => <Income />,
      dataSync: incomeSync,
      searchBar: true
    },
    {
      title: 'Expenses',
      path: '/expense',
      render: () => <Expense />,
      dataSync: expenseSync,
      searchBar: true
    },
    {
      title: 'Reports',
      path: '/reports',
      render: () => <Reports />,
      searchBar: false
    },
    {
      title: 'Settings',
      path: '/settings',
      render: () => <Settings />,
      searchBar: false
    }
  ];

  const currentPage = pages.find(page => page.path === pathname) || { title: 'Edit', searchBar: false };

  return (
    showLogin ? <Login /> :
      <IonApp>
        <Page title={currentPage.title} dataSync={currentPage.dataSync} searchBar={currentPage.searchBar}>
          <Route path='/edit/:edit/:id' render={(props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
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