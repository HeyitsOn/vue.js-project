<template>
  <div>
    <div v-if="loading" class="spinner-border m-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    fetchData() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
