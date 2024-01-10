import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    
    ResumeData: [],
    ProjectsData: [],
    TestimonialsData: [],
  
  },
  getters: {},
  mutations: {
    testimonialsData(state, data) {
      state.TestimonialsData = data;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get(' http://localhost:3000/Testimonials')
        .then(response => {
          console.log(response.data);
          commit('testimonialData', response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  modules: {}
});