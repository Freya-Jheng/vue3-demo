import { defineStore } from 'pinia';
import campAPI from '../apis/camp';
import articleAPI from '../apis/articles';

export const useGsFamily = defineStore('GsFamily', {
  state: () => ({
    campTags: [],
    articaleTags: [],
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
    }
  }
})
