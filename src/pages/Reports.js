import React from 'react';
import Card from '../components/Card';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonSearchbar
} from '@ionic/react';

export default () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Reports</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            showCancelButton="focus"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Card title="Reports 1" />
        <Card title="Reports 2" />
        <Card title="Reports 3" />
        <Card title="Reports 4" />
        <Card title="Reports 5" />
        <Card title="Reports 6" />
        <Card title="Reports 7" />
        <Card title="Reports 8" />
        <Card title="Reports 9" />
        <Card title="Reports 10" />
      </IonContent>
    </IonPage>
  );
};
