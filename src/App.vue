<template>
  <div class="container-fluid">
    <Navigation/>

    <router-view/>

<!-- <spinner/> -->
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
    // spinner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Navigation {
  padding: 30px;
}

.Navigation a {
  font-weight: bold;
  color: #2c3e50;
}

.Navigation a.router-link-exact-active {
  color: #42b983;
}
</style>
