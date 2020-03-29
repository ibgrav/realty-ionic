import React, { useState, useContext } from 'react';
import { fb_sign_out, fb_sign_in } from './firebase';
const Context = React.createContext([{}, () => { }]);

export const AppProvider = (props) => {
    const initialState = {
        showLogin: false,
        initialized: false,
        toast: {
            show: false,
            message: "",
            duration: 0
        }
    }

    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    )
}

export const useApp = () => {
    const [state, setState] = useContext(Context);

    const isInitialized = () => {
        if (!state.initialized)
            setState(state => ({ ...state, initialized: true }));
    }

    const setToast = (toast) => {
        setState(state => ({ ...state, toast }));
    }

    const setShowLogin = (showLogin) => {
        setState(state => ({ ...state, showLogin }));
    }

    const signIn = async (email, password) => {
        fb_sign_in(email, password).then(user => {
            setState(state => ({
                ...state,
                toast: { show: true, message: `Welcome ${user.user.email}!`, color: "success" },
                showLogin: false
            }));
        }).catch(error => {
            setState(state => ({
                ...state,
                toast: { show: true, message: error && (error.message || "Login Error"), color: "danger" }
            }));
        });
    }

    const signOut = async () => {
        await fb_sign_out();
        setState(state => ({
            ...state,
            toast: { show: true, message: "Successfully Logged Out", color: "warning" },
            showLogin: true
        }));
    }

    return {
        isInitialized,
        setShowLogin,
        setToast,
        signOut,
        signIn,
        toast: state.toast,
        initialized: state.initialized,
        showLogin: state.showLogin
    }
}