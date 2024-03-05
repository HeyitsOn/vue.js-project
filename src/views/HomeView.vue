<template>
  <div>
    <h1 class="welcome">Welcome to my Portfolio</h1>
    <div class="Home container">
      <div class="content-grid">
        <div class="text-box">
          <p class="fade-in">
            I'm a full-stack web development student at Life Choices Academy, currently seeking an internship related to software development. My enthusiasm lies in robotics and cybersecurity, with a specific passion for robotics, where I can use code to impact people's lives by creating realistic approaches to everyday life with simulated intelligent assistance. As a writer passionate about technology, this propels my drive to create projects and solutions that will one day change a person's life.
          </p>
        </div>
        <div class="image-box">
          <img src="https://cdn-thumbs.imagevenue.com/29/d7/06/ME17GN3X_t.png" alt="Your Alt Text" class="img zoom-in">
          <!-- <button class="download-btn" @click="downloadCV">Download CV</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      // You can replace the link with the actual link to your CV file
      const cvUrl = 'https://example.com/path-to-your-cv.pdf';
      window.open(cvUrl, '_blank');
    },
  },
};
</script>

<style scoped>
/* General Styles */
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ea4c4c;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Typography */
h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 20px;
  color: #333333;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #efefef;
}

/* Layout */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.text-box,
.image-box {
  padding: 20px;
  background-color: #326a21;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Animation */
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.zoom-in {
  animation: zoomIn 1s ease-in-out;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

/* Keyframe animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
