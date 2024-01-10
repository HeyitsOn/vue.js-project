<template>
        <h1>Welcome to my Portfolio</h1>
  <div class="Home container">
    <div class="text-container">
      <p>
        I'm a full-stack web development student at Life Choices Academy, currently seeking an internship related to software development. My enthusiasm lies in robotics and cybersecurity, with a specific passion for robotics, where I can use code to impact people's lives by creating realistic approaches to everyday life with simulated intelligent assistance. As a writer passionate about technology, this propels my drive to create projects and solutions that will one day change a person's life.
      </p>
    </div>
    <div class="image-container">
      <img src="https://drive.google.com/uc?export=download&id=1jBVrc1LkTNpEeRTjYjL27IHNh1kc1sb4" alt="Your Alt Text" class="img">
    </div>
  </div>
</template>

<script>
export default {
  // Component logic here
}
</script>

<style scoped>
.Home {
  background: url('https://drive.google.com/uc?export=download&id=1xhUtNlPqg-ekcIB_D0zCI6Jr5Tj13YOm');
  background-size: cover;
  background-position: center;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
}

.text-container {
  max-width: 40%;
  margin-top: 100px;
}

.image-container {
  margin-left: 50px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

h1 {
  color: #fff;
  font-family: 'Inter', sans-serif;
}

p {
  text-align: justify;
  color: #fff;
}

button {
  background-color: #84AF9B;
  box-shadow: 0 0 20px #84AF9B;
}
</style>

