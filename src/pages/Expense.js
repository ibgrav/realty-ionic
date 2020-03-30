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
          <IonTitle size="large">Expenses</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            showCancelButton="focus"
            animated
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Card title="Expense 1" />
        <Card title="Expense 2" />
        <Card title="Expense 3" />
        <Card title="Expense 4" />
        <Card title="Expense 5" />
        <Card title="Expense 6" />
        <Card title="Expense 7" />
        <Card title="Expense 8" />
        <Card title="Expense 9" />
        <Card title="Expense 10" />
      </IonContent>
    </IonPage>
  );
};
