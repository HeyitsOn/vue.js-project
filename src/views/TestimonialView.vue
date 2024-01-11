<template>
 <div >
    <h2>Testimonial</h2>
    <div class="card-container">
      <div
        class="card"
        v-for="test in $store.state.testData.Testimonial"
        :key="test.name"
        style="width: 14rem;"
      >
        <!-- <img
          src="https://drive.google.com/uc?export=download&id=1jBVrc1LkTNpEeRTjYjL27IHNh1kc1sb4"
          class="card-img-top"
          alt=""
        /> -->
        <div class="card-body">
          <h5 class="card-title">{{ test.name }}</h5>
          <p class="card-text">
            <!-- Some quick example text to build on the card title and make up the
            bulk of the card's content. -->
          </p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          <p>
          <img class="image" :src="test.image" alt="">
          </p>
          <p>
          {{ test.description }}
          </p>
          
          
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  export default {
    computed: {
    fetchDataTestimonial() {
      this.$store.dispatch('fetchTestData');
    }
  },
  mounted() {
    this.fetchDataTestimonial;
  }
}
  </script>

  <style>
  /* .section-header {
  background: linear-gradient(to right, #d3296a, #38b518, rgb(9, 192, 186));
 
} */
.card-container {
  display: flex;
}

.card {
  margin-right: 16px; 
}
.image{
  height: 200px;
  width: 180px;
}

</style>