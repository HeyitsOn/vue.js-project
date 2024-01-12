<template>
  <body class="container">
    <div class="image-container">
      <img src="https://cdn-thumbs.imagevenue.com/87/fc/3a/ME17GMQP_t.png" alt="Your Alt Text Here" class="img grow-shrink">
    </div>
    <div class="About text-container gradient-bg">
      <h1>About Me</h1>
      <p>
        I aim to contribute to innovative projects that enhance user satisfaction and drive business growth in Southern Africa and beyond, leveraging my creative and technical skills in the software development sector and beyond. I am looking for a position that allows me to leverage my technical skills while learning and applying advanced techniques to make informed business decisions and contribute to the success of the organization. I am eager to continue learning and refining my abilities as a customer service agent, digital marketer, writer, and website manager while consistently delivering high-quality work. I am determined to thrive in a role that encourages my growth and enables me to enhance my professional skills, capabilities, and knowledge. I am open to exploring various career fields as I firmly believe that with dedication and focus, I can excel in any area and utilize my versatility to its fullest potential.
      </p>
    </div>
    <div class="Interests text-container gradient-bg">
      <h1>Interests</h1>
      <p>
        Poetry <img src="https://cdn-thumbs.imagevenue.com/12/bd/fa/ME17GMXM_t.png" alt="Poetry Image">
      CODING <img src="https://cdn-thumbs.imagevenue.com/90/95/e1/ME17GMYI_t.png" alt="Coding Image">
      READING <img src="https://cdn-thumbs.imagevenue.com/52/ce/9b/ME17GMXA_t.png" alt="Reading Image">
      Digital Marketing <img src="https://cdn-thumbs.imagevenue.com/37/9c/23/ME17GMXR_t.png" alt="Digital Marketing Image">
      Social Media Management<img src="https://cdn-thumbs.imagevenue.com/89/16/9f/ME17GMZ6_t.png" alt="Social Media Management Image">
    </p>
    </div>
  </body>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
}

.image-container {
  margin-left: 50px;
}

.text-container {
  max-width: 40%;
  margin-top: 20px; 
}

.img {
  max-width: 100%; 
  height: auto;
  transition: transform 0.3s ease;
}

.grow-shrink:hover {
  transform: scale(1.1);
}

h1 {
  font-family: 'Inter', sans-serif;
}

.gradient-bg {
  background: linear-gradient(to right, #d3296a, #38b518, rgb(9, 192, 186));
  padding: 15px;
  color: white;
}

button {
  background-color: #84AF9B;
  box-shadow: 0 0 20px #84AF9B;
}
</style>
