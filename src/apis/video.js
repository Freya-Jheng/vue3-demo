import { apiHelper } from '../utili/helper';

export default {
    getAllVideos() {
        return apiHelper.get('/backend/admin/video');
    },
    getVideo({ id }) {
        return apiHelper.get(`/backend/admin/video/${id}`);
    },
    addVideoDto({ name }) {
        return apiHelper.post('/backend/admin/video/upload/dto', {
            name,
        })
    },
    addVideoFile({ id, file }) {
        return apiHelper.post(`/backend/admin/video/upload/${id}/file`,
            {
                file,
            },
            {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }

        )
    },
    addVideoImage({ id, file }) {
        return apiHelper.post(`/backend/admin/video/upload/${id}/image`,
            {
                file,
            },
            {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }

        )
    },
    deleteVideo({ id }) {
        return apiHelper.delete(`/backend/admin/video/${id}`);
    },
    editVideosDto({ id, name }) {
        return apiHelper.put(`/backend/admin/video/upload/dto/${id}`, {
            name,
        })
    }
}