import { defineStore } from 'pinia';
import campAPI from '../apis/camp';
import articleAPI from '../apis/articles';
import frontVideosAPI from '../front-page-apis/videos';
import frontCampAPI from '../front-page-apis/camp';
import frontArticleAPI from '../front-page-apis/article';

export const useGsFamily = defineStore('GsFamily', {
  state: () => ({
    campTags: [],
    articaleTags: [],
    frontCamps: [],
    frontCampsTag: [],
    frontArticles: [],
    frontArticlesTag: [],
    frontVideos: [],
  }),
  getters: {

  },
  actions: {
    async getTags() {
      try {
        const response = await campAPI.getAllTags();

        if (response.status !== 200) {
          throw new Error(response.status);
        };

        this.campTags = response.data;
      } catch (err) {
        console.log(err)
      }
    },
    async getArticleTags() {
      try {
        const response = await articleAPI.getAllArticleTags();

        if (response.status !== 200) {
          throw new Error(response.status);
        };

        this.articaleTags = response.data;

      } catch (err) {
        console.log(err);
      }
    },
    async getAllFrontVideos() {
      try {
        const response = await frontVideosAPI.getAllVideos();

        if (response.status !== 200) {
          throw new Error(response.status);
        };

        this.frontVideos = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getAllFrontCamps() {
      try {
        const response = await frontCampAPI.getAllCamp();

        if (response.status !== 200) {
          throw new Error(response.status)
        }

        this.frontCamps = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async getAllFrontCampTags() {
      try {
        const response = await frontCampAPI.getAllTags();
        this.frontCampsTag = response.data;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getAllFrontArticles() {
      try {
        const response = await frontArticleAPI.getAllArticles();

        if (response.status !== 200) {
          throw new Error(response.status);
        };
        this.frontArticles = response.data;
        this.getImage(response.data[0].id)
        console.log(response.data, 'article', response)
      } catch (err) {
        console.log(err);
      }
    },
    async getAllFrontArticleTags() {
      try {
        const response = await frontArticleAPI.getArtcleTags();

        if (response.status !== 200) {
          throw new Error(response.status);
        };

        this.frontArticlesTag = response.data;

      } catch (err) {
        console.log(err);
      }
    },
    async getImage(id) {
      try {
        const response = await frontArticleAPI.getArticleImage({ id });

        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
})
