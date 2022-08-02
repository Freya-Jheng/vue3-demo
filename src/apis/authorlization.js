import { apiHelper } from '../utili/helper';

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
