import { apiHelper } from "../utili/helper";

export default {
    getAllCamps() {
        return apiHelper.get('/admin/camp');
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
        return apiHelper.delete(`/admin/camp/${id}`);
    },
    getIndividualCamp({ campId }) {
        return apiHelper.get(`/admin/camp/${campId}`);
    },
    // tag
    getAllTags() {
        return apiHelper.get('/admin/camp/tag');
    },
    getTag({id}) {
        return apiHelper.get(`/admin/camp/tag/${id}`);
    },
    addTag({tag}) {
        return apiHelper.post('/admin/camp/tag', {
            tag
        });
    },
    deleteTag({tagId}) {
        return apiHelper.delete(`/admin/camp/tag/${tagId}`);
    },
    editTag({tagId, tag}) {
        return apiHelper.put(`/admin/camp/tag/${tagId}`, {
            tag,
        });
    }
}