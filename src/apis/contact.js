import { apiHelper } from "../utili/helper";

export default {
    get(){
        return apiHelper.get('/admin/contactUs');
    },
    deleteContact({ id }) {
        return apiHelper.delete(`/admin/contactUs/${id}`)
    }
}