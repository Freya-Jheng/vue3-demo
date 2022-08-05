import { apiHelper } from "../utili/helper";

export default {
    getAllCourses() {
        return apiHelper.get('/front/curriculum');
    },
}