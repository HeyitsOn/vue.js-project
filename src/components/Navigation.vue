<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/testimonial" class="nav-link">Testimonials</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComp'
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(28, 11, 212, 0.1);
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: red;
  background-color:rgba(94, 3, 119, 0.1);
}
</style>
