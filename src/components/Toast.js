import React from 'react';
import { IonToast } from '@ionic/react';

import { useApp } from '../utils';

export default () => {
    const { toast, setToast } = useApp();

    const dismissToast = () => {
        setToast({ show: false });
    }

    return (
        <IonToast
            isOpen={toast.show}
            onDidDismiss={dismissToast}
            message={toast.message}
            position="middle"
            duration={toast.duration || 2000}
            color={toast.color || "primary"}
        />
    );
}