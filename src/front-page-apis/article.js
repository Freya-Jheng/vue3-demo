import { apiHelper } from "../utili/helper";

export default {
    getAllArticles() {
        return apiHelper.get('/front/article');
    },
    getArticleImage({id}) {
        return apiHelper.get(`/front/article/browse/${id}`);
    },
}