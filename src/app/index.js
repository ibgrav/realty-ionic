import React, { useState } from 'react';
import { IonLoading } from '@ionic/react';
import { useApp } from '../utils';
import { ErrorBoundary, AppProvider, splashScreen } from '../utils';
import { fb_auth_change } from '../utils/firebase';
import Router from '../pages/Router';
import Toast from '../components/Toast';
import Loader from '../components/Loader';

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
  const [init, setInit] = useState(false);
  const { initialized, isInitialized, setShowLogin, setUserData } = useApp();

  if (!init) {
    fb_auth_change(isInitialized, setShowLogin, setUserData);
    setInit(true);
  }

  if (initialized)
    return <Router />
  else return (
    <IonLoading
      isOpen={true}
    />
  );
};

export default () => (
  <ErrorBoundary>
    <AppProvider>
      <Toast />
      <Loader />
      <App />
    </AppProvider>
  </ErrorBoundary>
);
