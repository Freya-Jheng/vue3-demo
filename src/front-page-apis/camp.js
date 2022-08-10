import { frontAPIHelper } from "../utili/helper";

export default {
    getAllCamp() {
        return frontAPIHelper.get('/front/camp');
    },
    // tags
    getAllTags() {
        return frontAPIHelper.get('/front/camp/tag');
    },
    // applys
    applyIndividualCamp({ personalName, phone, email, campId }) {
        return frontAPIHelper.post('/front/application/personal',{
            personalName,
            phone,
            email,
            campId
        });
    },
    applyGroupCamp({ teamName, name, phone, email, campId }) {
        return frontAPIHelper.post('/front/application/team', {
            teamName,
            name,
            phone,
            email,
            campId
        });
    },
    applyChurchCamp({ churchName, numbers, name, phone, email, campId, address }) {
        return frontAPIHelper.post('/front/application/church', {
            churchName,
            numbers,
            name,
            phone,
            email,
            campId,
            address
        });
    },
}