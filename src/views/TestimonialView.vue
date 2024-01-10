<template>
  <div>
<h2>Testimonial{{ $store.state.TestimonialsData}}</h2>
    <ul>
      <li v-for="Testimonial in $store.state.TestimonialsData[2].Testimonial" :key="Testimonial.name">
        {{ Testimonial.Name }} - {{ Testimonial.description}}
      </li>
    </ul>
  </div>
  <!-- <h1>Onika </h1>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i.postimg.cc/Ls9bZqmG/port.png" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has s upporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div> -->
  </template>

  <script>
  export default {
    computed: {
    fetchDatatestimonial() {
      this.$store.dispatch('fetchData');
    }
  },
  mounted() {
    this.fetchDatatestimonial;
  }
}
  </script>

  <style>
</style>