import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue'; 
import ResumeView from '../views/ResumeView.vue';
import TestimonialView from '../views/TestimonialView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjectsView // Corrected case
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: ResumeView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/Testimonial',
    name: 'Testimonial',
    component: TestimonialView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;