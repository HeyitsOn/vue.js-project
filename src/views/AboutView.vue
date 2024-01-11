<template>
  <body class="container">
    <div class="image-container">
      <img src="https://drive.google.com/uc?export=download&id=1jBVrc1LkTNpEeRTjYjL27IHNh1kc1sb4" alt="Your Alt Text Here" class="img grow-shrink">
    </div>
    <div class="About text-container gradient-bg">
      <h1>About Me</h1>
      <p>
        I aim to contribute to innovative projects that enhance user satisfaction and drive business growth in Southern Africa and beyond, leveraging my creative and technical skills in the software development sector and beyond. I am looking for a position that allows me to leverage my technical skills while learning and applying advanced techniques to make informed business decisions and contribute to the success of the organization. I am eager to continue learning and refining my abilities as a customer service agent, digital marketer, writer, and website manager while consistently delivering high-quality work. I am determined to thrive in a role that encourages my growth and enables me to enhance my professional skills, capabilities, and knowledge. I am open to exploring various career fields as I firmly believe that with dedication and focus, I can excel in any area and utilize my versatility to its fullest potential.
      </p>
    </div>
    <div class="Interests text-container gradient-bg">
      <h1>Interests</h1>
      <p>POETRY</p>
      <p>CODING</p>
      <p>READING</p>
      <p>DIGITAL MARKETING</p>
      <p>SOCIAL MEDIA MANAGEMENT</p>
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
