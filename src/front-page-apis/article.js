import { frontAPIHelper } from "../utili/helper";

export default {
    getAllArticles() {
        return frontAPIHelper.get('/front/article');
    },
    getArticle({ id }) {
        return frontAPIHelper.get(`/front/article/${id}`);
    },
    getArticleImage({ id }) {
        return frontAPIHelper.get(`/front/article/browse/${id}`);
    },
    getArtcleTags() {
        return frontAPIHelper.get('/front/article/tag');
    }
}