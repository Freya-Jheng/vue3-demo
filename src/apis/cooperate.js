import { apiHelper } from "../utili/helper";

export default {
    // person
    getAllIndividual() {
        return apiHelper.get('/backend/admin/application/personal');
    },
    deleteIndividual({ id }) {
        return apiHelper.delete(`/backend/admin/application/personal/${id}`);
    },
    getIndividualByTimeCampId({ personDTO }) {
        return apiHelper.get(`/backend/admin/application/personal/find?campTagId=${personDTO.campTagId}&date=${personDTO.date}`, {
            personDTO,
        });
    },
    getIndividualByCampId({ campTagId }) {
        return apiHelper.get(`/backend/admin/application/personal/find/tag?tagId=${campTagId}`);
    },
    // teams
    getAllTeam() {
        return apiHelper.get('/backend/admin/application/team');
    },
    deleteTeam({id}) {
        return apiHelper.delete(`/backend/admin/application/team/${id}`);
    },
    // church
    getAllChurch() {
        return apiHelper.get('/backend/admin/application/church');
    },
    deleteChurch({ id }) {
        return apiHelper.delete(`/backend/admin/application/church/${id}`);
    },
}