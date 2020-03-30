import React, { useState } from 'react';
import Card from '../components/Card';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonSearchbar, IonMenuToggle,
  IonMenuButton
} from '@ionic/react';

import { HeaderMenu } from '../components/Header';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderMenu isOpen={menuOpen} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Income</IonTitle>
            <IonMenuToggle>
              <IonMenuButton />
            </IonMenuToggle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              showCancelButton="focus"
              animated
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Card title="Income 1" />
          <Card title="Income 2" />
          <Card title="Income 3" />
          <Card title="Income 4" />
          <Card title="Income 5" />
          <Card title="Income 6" />
          <Card title="Income 7" />
          <Card title="Income 8" />
          <Card title="Income 9" />
          <Card title="Income 10" />
        </IonContent>
      </IonPage>
    </>
  );
};
