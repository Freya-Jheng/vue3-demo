import { payMentHelper } from "../utili/helper";
import { apiHelper } from "../utili/helper";

export default {
    postPayment({
        name,
        price,
        phone,
        address,
        MerchantID,
        MerchantTradeNo,
        MerchantTradeDate,
        PaymentType,
        TotalAmount,
        TradeDesc,
        ItemName,
        ReturnURL,
        ChoosePayment,
        CheckMacValue,
        EncryptType, }) {
        return payMentHelper.post('', {
            name,
            price,
            phone,
            address,
            MerchantID,
            MerchantTradeNo,
            MerchantTradeDate,
            PaymentType,
            TotalAmount,
            TradeDesc,
            ItemName,
            ReturnURL,
            ChoosePayment,
            CheckMacValue,
            EncryptType,
        })
    },
    getInform({ name, price, phone, address }) {
        return apiHelper.post('/front/donate', {
            name,
            price,
            phone,
            address
        });
    },
    ecpayConnect({ formData }) {
        return payMentHelper.post('https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5', {
            formData,
        })
    },
}