import { createStore } from 'vuex'
const dataUrl = "https://heyitson.github.io/VueData/Data/"
export default createStore({
  state: {
    Testimonial : null ,
    skills : null,
    experience : null,
    education: null,
    Projects: null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, Testimonial) {
      state.Testimonial = Testimonial
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setExperience(state, experience) {
      state.experience = experience
    },
    setEducation(state, education) {
      state.education = education
    },
    setProjects(state, Projects) {
      state.Projects = Projects
    },

  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let testimonialResponse = await fetch(dataUrl)
        let { Testimonial } = await testimonialResponse.json()
        context.commit('setTestimonials', Testimonial)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchProjects(context) {
      try {
        let projectsResponse = await fetch(dataUrl)
        let { Projects } = await projectsResponse.json()
        context.commit('setProjects', Projects)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchEducation(context) {
      try {
        let educationResponse = await fetch(dataUrl)
        let { Education } = await educationResponse.json()
        context.commit('setEducation', Education)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchExperience(context) {
      try {
        let experienceResponse = await fetch(dataUrl)
        let { Experience } = await experienceResponse.json()
        context.commit('setExperience', Experience)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSkills(context) {
      try {
        let skillsResponse = await fetch(dataUrl)
        let { Skills } = await skillsResponse.json()
        context.commit('setSkills', Skills)
      } catch (error) {
        console.error(error)
      }
    },
  },
  
  modules: {
  }
})