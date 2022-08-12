import { apiHelper } from "../utili/helper";

export default {
    getCourses() {
        return apiHelper.get('/backend/admin/curriculum');
    },
    getCourse({ id }) {
        return apiHelper.get(`/backend/admin/curriculum/${id}`);
    },
    addCoursesDto({ name, date }) {
        return apiHelper.post('/backend/admin/curriculum/upload/dto', {
            name,
            date,
        })
    },
    editCoursesDto({ id, name, date }) {
        return apiHelper.put(`/backend/admin/curriculum/upload/${id}/dto`, {
            name,
            date
        })
    },
    addCoursesFile({ id, file }) {
        return apiHelper.post(`/backend/admin/curriculum/upload/${id}/file`, {
            file,
        },
            {
                headers: { 'content-type': 'multipart/form-data' }
            }
        )
    },
    addCoursesImage({ id, file }) {
        return apiHelper.post(`/backend/admin/curriculum/upload/${id}/image`, {
            file,
        },
            {
                headers: { 'content-type': 'multipart/form-data' }
            }
        )
    },
    deletCourses({ id }) {
        return apiHelper.delete(`/backend/admin/curriculum/${id}`);
    },

}

// POST
//     / backend / admin / curriculum / upload / { id } / image


// POST
//     / backend / admin / curriculum / upload / { id } / file


// POST
//     / backend / admin / curriculum / upload / dto


