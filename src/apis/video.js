import { apiHelper } from '../utili/helper';

export default {
    getAllVideos() {
        return apiHelper.get('/backend/admin/video');
    },
    getVideo({ id }) {
        return apiHelper.get(`/backend/admin/video/${id}`);
    },
    deleteVideo({ id }) {
        return apiHelper.delete(`/backend/admin/video/${ id }`);
    },
}