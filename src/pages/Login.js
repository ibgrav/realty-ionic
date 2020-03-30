import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar,
  IonList, IonItem,
  IonLabel, IonButton, IonInput,
  IonCard, IonCardContent
} from '@ionic/react';
import styled from 'styled-components';
import { useApp } from '../utils';

const ButtonBox = styled.div`
  margin: 16px;
  display: flex;
  flex-flow: column;
`;

export default () => {
  const { signIn, signUp } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedEmail = window.localStorage.getItem('email');
    const storedPass = window.localStorage.getItem('password');

    setEmail(storedEmail);
    setPassword(storedPass);
  }, []);

  return (
    <IonPage>
      <IonHeader translucent="true">
        <IonToolbar>
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollY={false}
      >
        <IonCard>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email"
                  value={email} onIonChange={e => setEmail(e.detail.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"
                  value={password} onIonChange={e => setPassword(e.detail.value)}
                />
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <ButtonBox>
          <IonButton
            shape="round"
            color="primary"
            onClick={() => signIn(email, password)}
          >Sign In</IonButton>
          <IonButton
            shape="round"
            color="warning"
            onClick={() => signUp(email, password)}
          >Create Account</IonButton>
        </ButtonBox>

      </IonContent>
    </IonPage>
  );
};
