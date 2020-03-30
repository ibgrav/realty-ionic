import React from 'react';
import { menuController } from '@ionic/core';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton } from '@ionic/react';

export const HeaderMenu = () => {
    const closeMenu = () => {
        menuController.toggle();
    }

    async function getMenus() {
        const menus = await menuController.getMenus();
        console.log({ menus });
    }
    getMenus();

    return (
        <IonMenu
            menuId="header-menu"
            contentId="header-menu"
            id="header-menu"
            side="end" type="overlay"
        >
            <IonHeader>
                <IonToolbar>
                    <IonButton onClick={closeMenu}>Close</IonButton>
                    <IonTitle>Header Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}