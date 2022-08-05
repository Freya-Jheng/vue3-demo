import { frontAPIHelper } from '../utili/helper';

export default {
    postContact(dto, file) {
        return frontAPIHelper.post('/front/contactUs', {
            dto,
            file
        })
    }
}