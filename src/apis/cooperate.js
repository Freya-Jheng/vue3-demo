import { apiHelper } from "../utili/helper";

export default {
    getAllIndividual () {
        return apiHelper.get('/admin/application/personal');
    },
}