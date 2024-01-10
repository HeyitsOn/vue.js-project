<template>
    <div class="contact-container">
      <h1>Contact</h1>
      <div class="background-image"></div>
      <div class="form-container">
        <form action="https://formspree.io/f/xgegvewy" method="POST">
          <h4>Get in Touch</h4>
          <div class="form-row">
            <label for="name">Name</label>
            <input name="name" id="name" type="text" required>
          </div>
          <div class="form-row">
            <label for="number">Contact Number</label>
            <input name="number" id="number" type="tel" required>
          </div>
          <div class="form-row">
            <label for="email">Your Email</label>
            <input name="email" id="email" type="email" required>
          </div>
          <div class="form-row">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>
          </div>
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .contact-container {
    position: relative;
    text-align: center;
    margin-top: 5px;
  }
  
  h1 {
    position: relative;
    display: inline-block;
    margin-bottom: 3px;
    font-family: 'Inter', sans-serif;
    color: #333;
    z-index: 2;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://drive.google.com/uc?export=download&id=1xhUtNlPqg-ekcIB_D0zCI6Jr5Tj13YOm');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: 1;
  }
  
  .form-container {
    position: relative;
    z-index: 2;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;
  }
  
  button {
    background-color: #84AF9B;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.20s ease;
  }
  
  .btn:hover {
    background-color: #12e990;
  }
  </style>
  