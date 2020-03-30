import React, { useState, useContext } from 'react';
import { fb_sign_out, fb_sign_in, fb_sign_up } from './firebase';
import { createNewIncome, getAllIncome } from '../utils/api';

const Context = React.createContext([{}, () => { }]);

export const AppProvider = (props) => {
    const initialState = {
        showLogin: false,
        initialized: false,
        search: '',
        income: [],
        toast: {
            show: false,
            message: "",
            duration: 0
        },
        loading: {
            show: false,
            message: 0
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

    const setSearch = (search) => {
        setState(state => ({ ...state, search }));
    }

    const setLoading = (loading) => {
        setState(state => ({ ...state, loading }));
    }

    const setIncome = (income) => {
        setState(state => ({ ...state, income }));
    }

    const authSuccess = (user, email, password) => {
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('password', password);
        setState(state => ({
            ...state,
            toast: { show: true, message: `Welcome ${user.email}!`, color: "success" },
            showLogin: false,
            loading: { show: false }
        }));
    }

    const authError = (error) => {
        setState(state => ({
            ...state,
            toast: { show: true, message: error && (error.message || "Login Error"), color: "danger" },
            loading: { show: false }
        }));
    }

    const signIn = async (email, password) => {
        setLoading({ show: true, message: "Signing in..." });
        fb_sign_in(email, password).then(info => {
            const { user } = info;
            authSuccess(user, email, password)
        }).catch(error => authError(error))
    }

    const signUp = async (email, password) => {
        setLoading({ show: true, message: "Creating Account..." });
        fb_sign_up(email, password).then(async (info) => {
            const { user } = info;
            console.log('new user', user);
            const newIncome = await createNewIncome(user.uid);
            console.log({ newIncome });
            authSuccess(user, email, password);
        }).catch(error => authError(error));
    }

    const signOut = async () => {
        setLoading({ show: true });
        await fb_sign_out();
        setState(state => ({
            ...state,
            toast: { show: true, message: "Successfully Logged Out", color: "warning" },
            showLogin: true
        }));
    }

    const setUserData = async (user) => {
        const income = await getAllIncome();
        if (!income.error) {
            setState(state => ({
                ...state,
                income
            }))
        }
    }

    const incomeSync = async () => {
        const income = await getAllIncome();
        if (!income.error) {
            setState(state => ({
                ...state,
                income
            }))
        }
    }

    const expenseSync = async () => {

    }

    return {
        isInitialized,
        setLoading,
        setShowLogin,
        setUserData,
        setSearch,
        setToast,
        setIncome,
        signOut,
        signIn,
        signUp,
        incomeSync,
        expenseSync,
        income: state.income,
        loading: state.loading,
        search: state.search,
        toast: state.toast,
        initialized: state.initialized,
        showLogin: state.showLogin
    }
}