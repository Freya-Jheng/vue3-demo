import { apiHelper } from "../utili/helper";

export default {
    // teacher
    getTeacherAccount() {
        return apiHelper.get('/admin/user/general');
    },
    getIndividualTeacher({ id }) {
        return apiHelper.get(`/admin/user/general/${id}`);
    },
    editIndividualTeacher({ id, account, pwd, remark }) {
        return apiHelper.put(`/admin/user/general/${id}`, {
            account,
            pwd,
            remark,
        });
    },
    addIndividualTeacher({ account, pwd, remark }) {
        return apiHelper.post('/admin/user/general', {
            account,
            pwd,
            remark,
        });
    },
    deleteIndividualTeacher({ id }) {
        return apiHelper.delete(`/admin/user/general/${id}`)
    },
    // owner
    getOwnerAccount() {
        return apiHelper.get('/admin/user/super');
    },
    getIndividualOwner({ id }) {
        return apiHelper.get(`/admin/user/super/${id}`);
    },
    editIndividualOwner({ id, account, pwd, name, email, roleName }) {
        return apiHelper.put(`/admin/user/super/${id}`, {
            account,
            pwd,
            name,
            email,
            roleName
        });
    },
    addIndividualOwner({ account, pwd, name, email, roleName }) {
        return apiHelper.post('/admin/user/super', {
            account,
            pwd,
            name,
            email,
            roleName
        });
    },
    deleteIndividualOwner({ id }) {
        return apiHelper.delete(`/admin/user/super/${id}`)
    },
}