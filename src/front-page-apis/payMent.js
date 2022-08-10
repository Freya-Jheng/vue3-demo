import { payMentHelper } from "../utili/helper";

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
        return payMentHelper.post('',{
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
    }
}