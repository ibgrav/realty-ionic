import React, { useEffect } from 'react';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useApp } from '../utils';
import { ErrorBoundary, AppProvider, splashScreen } from '../utils';
import { fb_auth_change } from '../utils/firebase';
import Router from '../pages/Router';
import Toast from '../components/Toast';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './variables.css';

document.addEventListener("deviceready", function () {
  console.log('___DEVICE READY___');
  splashScreen.hide();
});

const App = () => {
  const { initialized, isInitialized, setShowLogin } = useApp();

  useEffect(() => {
    console.log({ initialized })
    fb_auth_change(isInitialized, setShowLogin);
  }, []);

  if (initialized)
    return (
      <IonReactRouter>
        <Router />
      </IonReactRouter>
    )
  else return (
    <IonLoading
      isOpen={true}
      message={'Working...'}
    />
  );
};

export default () => (
  <ErrorBoundary>
    <IonApp>
      <AppProvider>
        <Toast />
        <App />
      </AppProvider>
    </IonApp>
  </ErrorBoundary>
);
