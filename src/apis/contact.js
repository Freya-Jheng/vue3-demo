import { apiHelper } from "../utili/helper";

export default {
    get(){
        return apiHelper.get('/backend/admin/contactUs');
    },
    deleteContact({ id }) {
        return apiHelper.delete(`/backend/admin/contactUs/${id}`)
    }
}