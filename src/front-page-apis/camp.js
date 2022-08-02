import { frontAPIHelper } from "../utili/helper";

export default {
    getAllCamp() {
        return frontAPIHelper.get('/front/camp');
    },
    // tags
    getAllTags() {
        return frontAPIHelper.get('/front/camp/tag');
    }
}