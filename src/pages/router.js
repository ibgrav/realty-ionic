import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonApp } from '@ionic/react';
// import { cashOutline, walletOutline, barChartOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';

import { useApp } from '../utils';
import Login from './Login';
import Income from './Income';
import Expense from './Expense';
import Reports from './Reports';
import Settings from './Settings';

export default () => {
    const { showLogin } = useApp();

    return (
        showLogin ? <Login /> :
            <IonReactRouter>
                <IonApp>
                    <IonPage id="main">
                        <Route path="/income" render={() => <Income />} exact={true} />
                        <Route path="/expense" render={() => <Expense />} exact={true} />
                        <Route path="/reports" render={() => <Reports />} exact={true} />
                        <Route path="/settings" render={() => <Settings />} exact={true} />
                        <Route exact path="/" render={() => <Redirect to="/income" />} />
                    </IonPage>
                </IonApp>
            </IonReactRouter>
    );
};