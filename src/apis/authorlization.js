import { apiHelper } from '../utili/helper';
const getToken = () => localStorage.getItem('token');

export default {
    logIn({ account, password }) {
        return apiHelper.post('/auth/login', {
            account,
            password
        })
    },
    logOut() {
        return apiHelper.get('/auth/logout');
    },
}
