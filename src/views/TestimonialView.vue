<template>
  <div>
    <h2>Testimonials</h2>
    <div class="card-container">
      <div
        class="card"
        v-for="Testimonials in Testimonial"
        :key="Testimonials.name"
        style="width: 14rem;"
      >
        <div class="card-body">
          <h5 class="card-title">{{ Testimonials.name }}</h5>
          <p class="card-text">
            <img class="image" :src="Testimonials.image" alt="">
          </p>
          <p>{{ Testimonials.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Testimonial() {
      return this.$store.state.Testimonial;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
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
