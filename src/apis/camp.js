import { apiHelper } from "../utili/helper";

export default {
    getAllCamps() {
        return apiHelper.get('/admin/camp');
    },
    getAllCatrgories() {
        return apiHelper.get('/admin/camp/1');
    },
    addNewCamp({ title, campTagId, date, content }) {
        return apiHelper.post('/admin/camp', {
            title,
            campTagId,
            date,
            content,
        });
    },
    deleteCamp({id}) {
        return apiHelper.delete(`/admin/camp/${id}`)
    },
    getIndividualCamp({ campId }) {
        return apiHelper.get(`/admin/camp/${campId}`)
    },
    // tag
    getAllTags() {
        return apiHelper.get('/admin/camp/tag');
    },
}