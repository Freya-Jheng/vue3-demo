import { frontAPIHelper } from "../utili/helper";

export default {
    getAllVideos() {
        return frontAPIHelper.get('/front/video');
    }
}