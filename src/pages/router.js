import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { calendar, people } from 'ionicons/icons';

import { useApp } from '../utils';
import Login from './Login';
import Income from './Income';
import Expense from './Expense';
import Reports from './Reports';

const AuthRoute = ({ path, render }) => {
    const { showLogin } = useApp();
    if (showLogin) return <Login />
    else return <Route path={path} render={render} exact={true} />
}

export default () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <AuthRoute path="/income" render={() => <Income />} exact={true} />
                <AuthRoute path="/expense" render={() => <Expense />} exact={true} />
                <AuthRoute path="/reports" render={() => <Reports />} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/income" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="income" href="/income">
                    <IonIcon icon={calendar} />
                    <IonLabel>income</IonLabel>
                </IonTabButton>
                <IonTabButton tab="expense" href="/expense">
                    <IonIcon icon={people} />
                    <IonLabel>expense</IonLabel>
                </IonTabButton>
                <IonTabButton tab="reports" href="/reports">
                    <IonIcon icon={people} />
                    <IonLabel>reports</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};