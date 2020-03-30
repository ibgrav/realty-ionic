import React from 'react';
import Page from './Page';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { useApp } from '../utils';

export default () => {
  const { search, signOut } = useApp();

  const settings = [
    {
      title: "Setting 1"
    },
    {
      title: "Setting 1"
    },
    {
      title: "Sign Out",
      action: signOut
    }
  ]

  const filteredSettings = search ? settings.filter(item => {
    item.title.match(/1/g)
    const regex = new RegExp(search, "gi");
    return item.title.match(regex);
  }) : settings;

  return (
    <Page title="Income">
      <IonList>
        {filteredSettings.map((item, i) => (
          <IonItem key={i}>
            <IonLabel
              onClick={() => item.action && item.action()}
            >{item.title}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </Page>
  );
};
