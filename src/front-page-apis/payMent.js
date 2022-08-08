import { payMentHelper } from "../utili/helper";

export default {
    postPayment({ name, price, phone, address }) {
        return payMentHelper.post('/', {
            name,
            price,
            phone,
            address,
        })
    }
}