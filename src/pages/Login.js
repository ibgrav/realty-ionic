import React from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonSearchbar, IonList, IonItem,
  IonLabel, IonButton, IonInput
} from '@ionic/react';
import { useApp } from '../utils';

export default () => {
  const { signIn } = useApp();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Income</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            showCancelButton="focus"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
      </IonContent>
    </IonPage>
  );
};
