import { apiHelper } from "../utili/helper";

export default {
    getAllCamps() {
        return apiHelper.get('/backend/admin/camp');
    },
    addNewCamp({ title, campTagId, date, content }) {
        return apiHelper.post('/backend/admin/camp', {
            title,
            campTagId,
            date,
            content,
        });
    },
    deleteCamp({id}) {
        return apiHelper.delete(`/backend/admin/camp/${id}`);
    },
    getIndividualCamp({ campId }) {
        return apiHelper.get(`/backend/admin/camp/${campId}`);
    },
    getCampsByCampId({ tag }) {
        return apiHelper.get(`/backend/admin/camp/campTag?tag=${tag}`);
    },
    // tag
    getAllTags() {
        return apiHelper.get('/backend/admin/camp/tag');
    },
    getTag({id}) {
        return apiHelper.get(`/backend/admin/camp/tag/${id}`);
    },
    addTag({tag}) {
        return apiHelper.post('/backend/admin/camp/tag', {
            tag
        });
    },
    deleteTag({tagId}) {
        return apiHelper.delete(`/backend/admin/camp/tag/${tagId}`);
    },
    editTag({tagId, tag}) {
        return apiHelper.put(`/backend/admin/camp/tag/${tagId}`, {
            tag,
        });
    }
}