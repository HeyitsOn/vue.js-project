<template>
  <div class="split-screen">
    <div class="left-panel">
      <!-- <div class="inner-panel"></div> -->
      <!-- <img
      
        src="https://cdn-thumbs.imagevenue.com/29/d7/06/ME17GN3X_t.png"
        alt="Your Alt Text"
      /> -->
    </div>
    <div class="right-panel">
      <h1>Hello</h1>
      <h3>
        I'm a full-stack web development student at Life Choices Academy, currently
        seeking an internship related to software development.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  // methods: {
  //   downloadCV() {
  //     // You can replace the link with the actual link to your CV file
  //     const cvUrl = 'https://example.com/path-to-your-cv.pdf';
  //     window.open(cvUrl, '_blank');
  //   },
  // },
};
</script>

<style scoped>
.split-screen {
  display: flex;
  height: 100vh;
}

.left-panel {
  flex: 1;
  background-color:#5AA05E;
}

.right-panel {
  flex: 1;
  background-color:#77C87C;
  padding: 15%;
  overflow-y: auto; /* Add scrollbar when content exceeds panel height */
}
.inner-panel{
  height: 75%;
  background-color: rgb(199, 160, 119);
  margin: auto;
}

</style>
