import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { useApp } from '../utils';
import { getAllIncome, createNewIncome } from '../utils/api';
import { fb_get_user } from '../utils/firebase';

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
      title: "Get All Income",
      action: () => {
        const user = fb_get_user().uid;
        getAllIncome(user);
      }
    },
    {
      title: "Create New User Income",
      action: () => {
        const user = fb_get_user().uid;
        createNewIncome(user);
      }
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
    <IonList>
      {filteredSettings.map((item, i) => (
        <IonItem key={i}>
          <IonLabel
            onClick={() => item.action && item.action()}
          >{item.title}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};
