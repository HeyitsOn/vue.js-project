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
p {
  text-align: center;
}

.welcome {
  background-color: #10eb55;
  padding: 20px;
}

.Home {
  background-color: #10eb55;
  padding: 20px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.text-box {
  padding: 20px;
  margin-top: 30px;
  background-color: #df0f66;
}

.image-box {
  padding: 20px;
  margin-top: 30px;
  background-color: #0fc0df;
  padding: 100px;
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.zoom-in {
  animation: zoomIn 1s ease-in-out;
}

/* .download-btn {
  background-color: #e91212;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.20s ease;
  margin-top: 20px;
} */

/* .download-btn:hover {
  background-color: #0fa67d;
} */

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
