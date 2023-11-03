import Axios from './caller.service';

const login = (credentials: object) => {

    return Axios.post('/api/auth/login/', credentials)
};

const register = (credentials: object) => {
    return Axios.post('/api/auth/register/', credentials)
};

const saveToken = (token: string ) => {
    if (token) {
        window.localStorage['jwtToken'] = token;
    } else {
        window.localStorage.setItem('jwtToken', token);
    }
};

const logout = () => {
    window.localStorage.removeItem('jwtToken');
};

const getToken = () => {
    return window.localStorage['jwtToken'];
}

const isLoggedIn = () => {
    const token = getToken();
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
    } else {
        return false;
    }
}

export default {
    login,
    register,
    saveToken,
    logout,
    getToken,
    isLoggedIn
};