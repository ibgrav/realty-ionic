import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

export default () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.</IonCardContent>
        </IonCard>
    );
}