import { createStore } from 'vuex';
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
    },
    resumeData(state, data) {
      state.ResumeData = data;
    },
    ProjectsData(state, data) {
      state.ProjectsData = data;
    },
  },
  actions: {
    fetchTestData({ commit }) {
      axios.get('http://localhost:3000/data')
        .then(response => {
          console.log(response);
          commit('testimonialsData', response.data[2]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    fetchResumeData({ commit }) {
      axios.get('http://localhost:3000/data') 
        .then(response => {
          console.log(response);
          commit('resumeData', response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
  fetchProjectsData({ commit }) {
    axios.get('http://localhost:3000/data') 
      .then(response => {
        console.log(response);
        commit('ProjectsData', response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  modules: {},
});
