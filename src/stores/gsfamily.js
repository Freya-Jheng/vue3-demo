import { defineStore } from 'pinia';
import campAPI from '../apis/camp';

export const useGsFamily = defineStore('GsFamily', {
  state: () => ({
    campTags: []
  }),
  getters: {

  },
  actions: {
    async getTags() {
      try {
        const response = await campAPI.getAllTags();
        this.campTags = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
