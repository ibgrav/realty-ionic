import React from 'react';
import { withRouter } from "react-router";
import {
  IonContent, IonHeader, IonButtons,
  IonTitle, IonToolbar, IonIcon,
  IonSearchbar, IonFab, IonFabButton,
  IonFabList, IonPage, IonRefresher,
  IonRefresherContent, IonBackButton
} from '@ionic/react';
import { menu, cardOutline, walletOutline, barChartOutline, settingsOutline } from 'ionicons/icons';

import { useApp } from '../utils';

const Fab = ({ history }) => (
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

const Page = ({ children, title, history, dataSync, searchBar }) => {
  const { search, setSearch } = useApp();

  const doRefresh = async (refresh) => {
    await dataSync();
    refresh.detail.complete();
  }

  return (
    <IonPage id="main">
      <IonHeader translucent="true">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
        {searchBar && <IonToolbar>
          <IonSearchbar
            showCancelButton="focus"
            animated
            inputmode="search"
            type="search"
            value={search}
            onIonChange={e => setSearch(e.detail.value)}
          ></IonSearchbar>
        </IonToolbar>}
      </IonHeader>
      <IonContent fullscreen="true">
        {dataSync && <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>}

        {children}

        <div style={{ marginBottom: '100px' }} />
        <Fab history={history} />
      </IonContent>
    </IonPage>
  );
};

export const IncomeEditPage = ({ title, children }) => (
  <IonPage id="main">
    <IonHeader translucent="true">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
      <IonToolbar>
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen="true">
      {children}
    </IonContent>
  </IonPage>
);

export default withRouter(Page);