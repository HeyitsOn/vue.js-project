<template>
  <div>
    <h1 class="welcome">Welcome to my Portfolio</h1>
    <div class="Home container">
      <div class="text-container">
        <p>
          I'm a full-stack web development student at Life Choices Academy, currently seeking an internship related to software development. My enthusiasm lies in robotics and cybersecurity, with a specific passion for robotics, where I can use code to impact people's lives by creating realistic approaches to everyday life with simulated intelligent assistance. As a writer passionate about technology, this propels my drive to create projects and solutions that will one day change a person's life.
        </p>
      </div>
      <div class="image-container">
        <img src="https://cdn-thumbs.imagevenue.com/29/d7/06/ME17GN3X_t.png" alt="Your Alt Text" class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Component logic here
};
</script>

<style scoped>
  .welcome {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  .Home {
    background: linear-gradient(to right, #d3296a, #38b518, rgb(9, 192, 186));
    background-size: cover;
    background-position: center;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
  }

  .text-container {
    max-width: 50%;
    color: #fff;
    line-height: 1.6;
  }

  .image-container {
    margin-left: 50px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  p {
    text-align: justify;
  }
</style>
