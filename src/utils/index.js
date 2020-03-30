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

export const niceDate = (d) => {
    const date = new Date(d);
    if (!isNaN(date.getMinutes())) {
        const uglyMin = date.getMinutes();
        const uglySec = date.getSeconds();
        const uglyHour = date.getHours();
        const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const daysLong = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            date: date.getDate(),
            hour: uglyHour > 12 ? uglyHour - 12 : uglyHour,
            AMPM: uglyHour > 12 ? 'PM' : 'AM',
            ampm: uglyHour > 12 ? 'am' : 'pm',
            minute: (uglyMin > 10) ? uglyMin : `0${uglyMin}`,
            minute: (uglySec > 10) ? uglySec : `0${uglySec}`,
            dayShort: daysShort[date.getDay()],
            dayLong: daysLong[date.getDay()]
        }
    } else return {}
}