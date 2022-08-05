import { apiHelper } from "../utili/helper";

export default {
    getAllArticles() {
        return apiHelper.get('/front/article');
    },
    getArticle({ id }) {
        return apiHelper.get(`/front/article/${ id }`);
    },
    getArticleImage({ id }) {
        return apiHelper.get(`/front/article/browse/${ id }`);
    },
}