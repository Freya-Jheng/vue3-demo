import { frontAPIHelper } from '../utili/helper';

export default {
    addPoster({
        date,
        time,
        price,
        place,
        contactor
    }) {
        return frontAPIHelper.post({
            date,
            time,
            price,
            place,
            contactor
        })
    }
}