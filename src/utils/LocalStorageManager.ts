export default class LocalStorageManager {

    static setUserToken(userToken: string) {
        localStorage.setItem('lsUserToken', JSON.stringify(userToken));
    }

    static removeUserToken() {
        localStorage.removeItem('lsUserToken');
    }

    static getUserToken() {
        const lsUserToken = localStorage.getItem('lsUserToken');
        if (typeof lsUserToken === 'string'){
            return JSON.parse(lsUserToken);
        } else {
            return lsUserToken;
        }
    }
}
