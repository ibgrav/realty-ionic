import React from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonSearchbar, IonMenuToggle,
  IonMenuButton, IonButtons, IonSplitPane,
  IonMenu, IonItem, IonList
} from '@ionic/react';

import { useApp } from '../utils';

const Menu = () => {
  const { signOut } = useApp();

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem onClick={signOut}>Log Out</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default ({ children }) => {
  return (
    <IonSplitPane contentId="main">
      <Menu />
      <IonPage id="main">
        <IonHeader translucent="true">
          <IonToolbar>
            <IonTitle size="large">Title</IonTitle>
            <IonButtons slot="primary">
              <IonMenuToggle>
                <IonMenuButton />
              </IonMenuToggle>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              showCancelButton="focus"
              animated
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen="true">
          {children}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};
