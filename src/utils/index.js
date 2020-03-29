export { ErrorBoundary } from './ErrorBoundary';
export { AppProvider, useApp } from './context';
export { statusBar, splashScreen } from './plugins';

export const getCookieValue = (cookieName) => {
    let cookieVal = null;
    const cookies = document.cookie.split("; ");

    cookies.forEach(cookie => {
        let vals = cookie.split('=');
        if (vals[0] === cookieName) cookieVal = vals[1]
    });

    return cookieVal;
}

export const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName};path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export const setCookie = (name, val) => {
    document.cookie = `${name}=${val};path=/;`;
}

export const prefersDarkMode = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark;
}

export const debounce = (fn, time) => {
    let timeout;
    return function () {
        const functionCall = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}