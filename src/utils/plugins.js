import {
    Plugins,
    StatusBarStyle,
} from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

export const statusBar = {
    isDark: (isDark) => {
        StatusBar.setStyle({
            style: isDark ? StatusBarStyle.Dark : StatusBarStyle.Light
        });

        // Display content under transparent status bar (Android only)
        StatusBar.setOverlaysWebView({
            overlay: true
        });
    },
    hide: () => {
        StatusBar.hide();
    },
    show: () => {
        StatusBar.show();
    }
}

export const splashScreen = {
    hide: () => {
        SplashScreen.hide();
    },
    show: () => {
        SplashScreen.show({
            autoHide: false
        });
    }
}