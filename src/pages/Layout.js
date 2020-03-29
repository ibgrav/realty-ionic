import React from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButtons, IonLoading
} from '@ionic/react';
import { useApp } from '../utils';
import Toast from '../components/Toast';
import Login from './Login';

export const Layout = ({ title, children }) => {
  const { initialized, signOut } = useApp();
  console.log({ initialized });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary" onClick={signOut}>
            <div>logout</div>
          </IonButtons>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Login />
        {
          initialized ? children :
            <IonLoading
              isOpen={true}
              message={'Working...'}
            />
        }
        <Toast />
      </IonContent>
    </IonPage>
  );
};