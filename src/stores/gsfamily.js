import { defineStore } from 'pinia';
import campAPI from '../apis/camp';
import articleAPI from '../apis/articles';
import frontVideosAPI from '../front-page-apis/videos';
import frontCampAPI from '../front-page-apis/camp';

export const useGsFamily = defineStore('GsFamily', {
  state: () => ({
    campTags: [],
    articaleTags: [],
    frontCamps: [],
  }),
  getters: {

  },
  actions: {
    async getTags() {
      try {
        const response = await campAPI.getAllTags();
        
        if(response.status !== 200) {
          throw new Error (response.status);
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
        console.log(response);
      } catch(err) {
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
        console.log('camp',response);
      } catch(err) {
        console.log(err);
      }
    }
   }
})
