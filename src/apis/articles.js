import { apiHelper } from "../utili/helper";

export default {
    getArticles() {
        return apiHelper.get('/backend/admin/article');
    },
    getArticle({ id }) {
        return apiHelper.get(`/backend/admin/article/${id}`);
    },
    addArticleDto({
        title,
        articleTagId,
        date,
        content,
        keywords,
        narrative
    }) {
        return apiHelper.post('/backend/admin/article/upload/dto', {
            title,
            articleTagId,
            date,
            content,
            keywords,
            narrative,
        })
    },
    addArticleFile({ id, file }) {
        return apiHelper.post(`/backend/admin/article/upload/${id}/file`,
            {
                file: file,
            },
            {
                headers: { 'content-type': 'multipart/form-data' }
            },
        )
    },
    editArticleDto({
        id,
        title,
        articleTagId,
        date,
        content,
        keywords,
        narrative
    }) {
        return apiHelper.put(`/backend/admin/article/${id}`, {
            title,
            articleTagId,
            date,
            content,
            keywords,
            narrative,
        })
    },
    editArticleFile({
        id,
        file
    }) {
        return apiHelper.put(`/backend/admin/article/${id}/file`, {
            file
        },
            {
                headers: { 'content-type': 'multipart/form-data' },
            }
        )
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