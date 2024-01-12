<template>
  <div class="project-component">
    <h2>Projects</h2>
    <div class="card-container">
      <div
        class="card"
        v-for="project in Projects"
        :key="project.name"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">
            <img class="image" :src="project.image" :alt="project.name">
          </p>
          <a :href="project.link" class="btn btn-primary" target="_blank">View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Projects() {
      return this.$store.state.Projects;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  }
};
</script>

<style scoped>
.project-component {
  background-color: #19db8e; /* Set your desired background color */
  padding: 20px; /* Add padding for better visual appearance */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin-right: 16px;
  margin-bottom: 16px;
}

.image {
  height: 200px;
  width: 100%;
}
</style>
