import { apiHelper } from "../utili/helper";

export default {
    getArticles() {
        return apiHelper.get('/backend/admin/article');
    },
    getArticle({ id }) {
        return apiHelper.get(`/backend/admin/article/${id}`);
    },
    getArticlesImage({ id }) {
        return apiHelper.get(`/backend/admin/article/browse/${id}`);
    },
    addArticles({ dto, file }) {
        return apiHelper.post('/backend/admin/article', {
            dto,
            file
        });
    },
    deleteArticle({ id }) {
        return apiHelper.delete(`/backend/admin/article/${id}`);
    },
    searchArticleByTagId({ tagId }) {
        return apiHelper.get(`backend/admin/article/find?tagId=${tagId}`);
    },
    // tags
    getAllArticleTags() {
        return apiHelper.get('/backend/admin/article/tag');
    },
    getArticleTag({ id }) {
        return apiHelper.get(`/backend/admin/article/tag/${id}`);
    },
    addArticleTags({ tag }) {
        return apiHelper.post('/backend/admin/article/tag', {
            tag,
        });
    },
    deleteArticleTags({ id }) {
        return apiHelper.delete(`backend/admin/article/tag/${id}`);
    },
    editArticleTags({ id, tag }) {
        return apiHelper.put(`backend/admin/article/tag/${id}`, {
            tag,
        });
    },
}