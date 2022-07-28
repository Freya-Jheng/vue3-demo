import { apiHelper } from "../utili/helper";

export default {
    getArticles () {
        return apiHelper.get('/admin/article/tag');
    }
}