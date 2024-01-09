import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    HomeData: [],
    AboutData: [],
    ResumeData: [],
    ProjectsData: [],
    TestimonialsData: [],
    ContactsData: []
  },
  getters: {},
  mutations: {
    TestimonialsData(state, Testimonial) {
      state.TestimonialsData = Testimonial;
    }
  },
  actions: {
    fetchData({ context }) {
      axios.get(' http://localhost:3000/Testimonials')
        .then(response => {
          context('TestimonialData', response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  modules: {}
});