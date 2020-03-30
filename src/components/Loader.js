import React from 'react';
import { IonLoading } from '@ionic/react';

import { useApp } from '../utils';

export default () => {
    const { loading, setLoading } = useApp();

    const dismiss = () => {
        setLoading({ show: false });
    }

    return (
        <IonLoading
            isOpen={loading.show}
            onDidDismiss={dismiss}
            message={loading.message}
        />
    );
}