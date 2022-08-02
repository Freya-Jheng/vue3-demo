import { apiHelper } from "../utili/helper";

export default {
    getArticles() {
        return apiHelper.get('/backend/admin/article');
    },
    addArticles({ dto, file }) {
        return apiHelper.post('/backend/admin/article', {
            dto,
            file
        });
    },
    // tags
    getAllArticleTags() {
        return apiHelper.get('/backend/admin/article/tag');
    },
}