<template>
  <div class="row">
    <div class="col-md-6">
      <div class="contact-container">
        <h1>Contact</h1>
        <div class="form-container">
          <form action="https://formspree.io/f/xgegvewy" method="POST" class="float start">
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
    </div>
    <div class="col-md-6">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.2583237631507!2d18.674428075512402!3d-33.96019927319165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4e3827e6825d%3A0x7c126e3f9a2dc485!2s19%20Cobia%20St%2C%20Kuils%20River%2C%20Cape%20Town%2C%207580!5e0!3m2!1sen!2sza!4v1705043073986!5m2!1sen!2sza"
          width="100%"
          height="300px"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="map-info">
          <h3>Location</h3>
          <p>19 Cobia St, Kuils River, Cape Town, 7580</p>
          <h3>Contact Details</h3>
          <p>Phone: +27 (083) 667-3314</p>
          <p>Email: silekuonika02@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-container {
  text-align: center;
  max-width: 800px;
  margin: auto;
}

h1 {
  font-family: 'Inter', sans-serif;
  color: #333;
  margin-bottom: 20px;
}

.form-container,
.map-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e71515;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container {
  margin-right: 15px;
}

.map-info {
  margin-top: 15px;
}

iframe {
  width: 100%;
  height: 300px;
}

form {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #60ce0c;
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
