import { apiHelper } from "../utili/helper";

export default {
    getArticles() {
        return apiHelper.get('/admin/article');
    },
    addArticles({ dto, file }) {
        return apiHelper.post('/admin/article', {
            dto,
            file
        });
    },
    // tags
    getAllArticleTags() {
        return apiHelper.get('/admin/article/tag');
    },
}