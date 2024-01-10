<template>
  <div class="Home">
    <h1>Welcome to my Portfolio</h1>
    <p>
    <div class="image-container">
      <img src="https://i.postimg.cc/Ls9bZqmG/port.png" alt="Your Alt Text">
  </div>
      I'm a full-stack web development student at Life Choices Academy, currently seeking an internship related to software development. My enthusiasm lies in robotics and cybersecurity, with a specific passion for robotics, where I can use code to impact people's lives by creating realistic approaches to everyday life with simulated intelligent assistance. As a writer passionate about technology, this propels my drive to create projects and solutions that will one day change a person's life.
    </p>
  </div>

</template>

<script>
export default {
  // Component logic here
}
</script>

<style scoped>
.Home {
  background-color: #8a2be2; /* Use a shade of purple for better readability */
  padding: 2%; /* Increase padding for better spacing */
}
img {
  width: 20%; /* Make the image fill its container */
  border-radius: 8px; /* Optional: Add border-radius for rounded corners */
}
.image-container {
  margin-left: 20%; /* Adjust the margin for spacing */
}
h1 {
  color: #fff; /* Set text color to white for better contrast */
}

p {
  text-align: justify; /* Align text to justify for better readability */
  color: #333; /* Set text color to a dark shade for better contrast */
}
</style>