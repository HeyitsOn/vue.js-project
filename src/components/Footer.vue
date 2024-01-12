<template>
    <footer>
      <p>&copy; {{ currentYear }} Onika Sileku </p>
      <div>
        <a href="https://github.com/HeyitsOn" class="center">
          <img src="https://cdn-thumbs.imagevenue.com/f1/16/40/ME17GMO7_t.png" alt="GitHub" class="icon">
        </a>
        <a href="mailto:silekuonika02@gmail.com" class="center">
          <img src="https://cdn-thumbs.imagevenue.com/bf/b6/f9/ME17GMO1_t.png" alt="Email" class="icon">
        </a>
        <a href="https://www.linkedin.com/in/onika-sileku-a725aa260/?trk=contact-info" class="center">
          <img src="https://cdn-thumbs.imagevenue.com/67/44/7c/ME17GMO5_t.png" alt="Linkedin" class="icon">
        </a>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 5px; /* Adjust the padding to reduce the height */
    bottom: 0;
    width: 100%;
    position: fixed;
  }
  
  a {
    margin: 0 10px;
  }
  
  /* Add styling for the icon */
  .icon {
    width: 20px; /* Adjust the size as needed */
    height: 20px;
    display: inline-block;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  