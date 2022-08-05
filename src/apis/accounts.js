import { apiHelper } from "../utili/helper";

export default {
    // teacher
    getTeacherAccount() {
        return apiHelper.get('/backend/admin/user/general');
    },
    getIndividualTeacher({ id }) {
        return apiHelper.get(`/backend/admin/user/general/${id}`);
    },
    editIndividualTeacher({ id, account, password, remark }) {
        return apiHelper.put(`/backend/admin/user/general/${id}`, {
            account,
            password,
            remark,
        });
    },
    addIndividualTeacher({ account, password, remark }) {
        return apiHelper.post('/backend/admin/user/general', {
            account,
            password,
            remark,
        });
    },
    deleteIndividualTeacher({ id }) {
        return apiHelper.delete(`/backend/admin/user/general/${id}`)
    },
    // owner
    getOwnerAccount() {
        return apiHelper.get('/backend/admin/user/super');
    },
    getIndividualOwner({ id }) {
        return apiHelper.get(`/backend/admin/user/super/${id}`);
    },
    editIndividualOwner({ id, userDTO, roleDTO }) {
        return apiHelper.put(`/backend/admin/user/super/${id}`, {
            userDTO,
            roleDTO
        });
    },
    addIndividualOwner({ userDTO,roleDTO }) {
        return apiHelper.post('/backend/admin/user/super', {
            userDTO,
            roleDTO
        });
    },
    deleteIndividualOwner({ id }) {
        return apiHelper.delete(`/backend/admin/user/super/${id}`)
    },
}