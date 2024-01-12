<template>
  <div>
    <h2>Projects</h2>
    <div class="card-container">
      <div
        class="card"
        v-for="Project in Projects"
        :key="Project.name"
        style="width: 14rem;"
      >
        <div class="card-body">
          <h5 class="card-title">{{ Project.name }}</h5>
          <p class="card-text">
            <img class="image" :src="Project.image" alt="Project.name">
          </p>
          <a :href="Project.link" class="btn btn-primary" target="_blank"></a>
           <a :href="Project.link" class="btn btn-primary" target="_blank"></a>
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
