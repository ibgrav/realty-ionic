import React from 'react';
import { withRouter } from "react-router";
import {
  IonContent, IonHeader,
  IonTitle, IonToolbar, IonIcon,
  IonSearchbar, IonFab, IonFabButton,
  IonFabList
} from '@ionic/react';
import { menu, cardOutline, walletOutline, barChartOutline, settingsOutline } from 'ionicons/icons';

import { useApp } from '../utils';

const FabMenu = ({ history }) => (
  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={menu} />
    </IonFabButton>
    <IonFabList side="top">

      <IonFabButton
        onClick={() => history.push('/settings')}
      >
        <IonIcon icon={settingsOutline} />
      </IonFabButton>
      <IonFabButton
        onClick={() => history.push('/reports')}
      >
        <IonIcon icon={barChartOutline} />
      </IonFabButton>
      <IonFabButton
        onClick={() => history.push('/expense')}
      >
        <IonIcon icon={walletOutline} />
      </IonFabButton>
      <IonFabButton
        onClick={() => history.push('/income')}
      >
        <IonIcon icon={cardOutline} />
      </IonFabButton>
    </IonFabList>
  </IonFab>
);

const Fab = withRouter(FabMenu);

export default ({ children, title }) => {
  const { search, setSearch } = useApp();

  return (
    <>
      <IonHeader translucent="true">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            showCancelButton="focus"
            animated
            inputmode="search"
            type="search"
            value={search}
            onIonChange={e => setSearch(e.detail.value)}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen="true">

        {children}

        <Fab />
      </IonContent>
    </>
  );
};