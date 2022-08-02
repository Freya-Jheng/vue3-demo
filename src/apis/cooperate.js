import { apiHelper } from "../utili/helper";

export default {
    getAllIndividual () {
        return apiHelper.get('/backend/admin/application/personal');
    },
}