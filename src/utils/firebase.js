import * as firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth';

export const fb_initialize = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDtB1VNnSfZ_GfJbIvOpRv9Q5NYh3H2L5I",
        authDomain: "realty-ionic.firebaseapp.com",
        databaseURL: "https://realty-ionic.firebaseio.com",
        projectId: "realty-ionic",
        storageBucket: "realty-ionic.appspot.com",
        messagingSenderId: "15092977249",
        appId: "1:15092977249:web:a7122e05540f6fab63a420",
        measurementId: "G-SL960B6EM5",
        clientId: "15092977249-g7k7f9jltrkkuvjdbirch80jd247pqut.apps.googleusercontent.com",
        clientSecret: "LuumeEODvYzJqXR91j9bhKkj"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export const fb_auth_change = (isInitialized, setShowLogin, setUserData) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        console.log('firebase.auth().onAuthStateChanged', user);

        if (user && user.uid) {
            await setUserData(user);
        }

        setShowLogin(user ? false : true);
        isInitialized(true);
    });
}

export const fb_sign_up = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(user);
            }).catch((error) => {
                console.log({ error });
                reject(error);
            });
    });
}

export const fb_sign_in = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(user);
            }).catch((error) => {
                console.log({ error });
                reject(error);
            });
    });
}

export const fb_sign_out = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => {
                resolve(true);
            }).catch((error) => {
                console.log({ error });
                reject(error);
            });
    });
}

export const fb_get_user = () => {
    return firebase.auth().currentUser;
}