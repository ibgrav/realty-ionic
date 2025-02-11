import React from 'react';
import {
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent,
  IonItem, IonLabel
} from '@ionic/react';
import { useApp, niceDate } from '../utils';

export default () => {
  const { search, income } = useApp();

  console.log({ search });

  const filteredIncome = search ? income.filter(item => {
    item.title.match(/1/g)
    const regex = new RegExp(search, "gi");
    return item.title.match(regex);
  }) : income;

  console.log({ income });

  return (
    <>
      {filteredIncome && filteredIncome.map((item, i) => {
        const time = niceDate(item.updated_at);

        const subtitle = time ?
          `Updated: ${time.month}/${time.date}/${time.year} @ ${time.hour}:${time.minute} ${time.ampm}`
          : ''

        return (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardSubtitle>{subtitle}</IonCardSubtitle>
              <IonCardTitle>{item.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem href="/income/12345">
                <IonLabel>Card Link Item 1 activated</IonLabel>
              </IonItem>

              <IonItem href="#">
                <IonLabel>Card Link Item 2</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Card Button Item 1 activated</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Card Button Item 2</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        );
      })}
    </>
  );
};
