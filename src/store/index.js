import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    
    ResumeData: [],
    ProjectsData: [],
    testData: [],
  
  },
  getters: {},
  mutations: {
    testimonialsData(state, data) {
      state.testData = data;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get('http://localhost:3000/data')
        .then(response => {
          console.log(response);
          commit('testimonialsData', response.data[2]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  modules: {}
});