<template>
    <footer>
      <p>&copy; {{ currentYear }} Onika Sileku </p>
      <div>
        <a href="https://github.com/HeyitsOn" class="center">
          <img src="https://drive.google.com/uc?export=download&id=1kg-GppjR_Gq0DRnQlIK2bYE1jJSiTV1L" alt="GitHub" class="icon">
        </a>
        <a href="mailto:silekuonika02@gmail.com" class="center">
          <img src="https://drive.google.com/uc?export=download&id=1dElCb7A97Rkuraibq1s8mc-w-CMeTcv6" alt="Email" class="icon">
        </a>
        <a href="https://www.linkedin.com/in/onika-sileku-a725aa260/?trk=contact-info" class="center">
          <img src="https://drive.google.com/uc?export=download&id=1rdWj0xRcBe3QAbLViS62pTKICb7PWi38" alt="Linkedin" class="icon">
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
    height: auto;
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
  