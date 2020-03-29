import React from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonModal, IonButton, IonInput,
  IonItem, IonLabel, IonList
} from '@ionic/react';

import { useApp } from '../utils';

export default () => {
  const { showLogin, signIn } = useApp();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={showLogin}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={() => signIn('ibgrav@gmail.com', '907109')}>Login</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};