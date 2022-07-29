import { apiHelper } from "../utili/helper";

export default {
    getCourses(){
        return apiHelper.get('admin/curriculum');
    },
    addCourses({name, file}) {
        return apiHelper.post('admin/curriculum', {
            name,
            file
        }); 
    },
}