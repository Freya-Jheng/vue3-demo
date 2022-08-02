import { apiHelper } from "../utili/helper";

export default {
    getCourses(){
        return apiHelper.get('/backend/admin/curriculum');
    },
    addCourses({name, file}) {
        return apiHelper.post('/backend/admin/curriculum', {
            name,
            file
        }); 
    },
}