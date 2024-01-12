<template>
  <div class="resume container">
    <h1 class="mt-4 gradient-bg">Resume</h1>
    
    <div class="education-section mt-4">
      <h2>Education</h2>
      <div class="card-deck">
        <div v-for="(education, index) in educations" :key="index" class="card mb-4">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">{{ education.institution }}</h6>
            <p class="card-text">{{ education.description }}</p>
            <p class="card-text"><small class="text-muted">{{ education.date }}</small></p>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-section mt-4">
      <h2>Skills</h2>
      <div class="skills-container">
        <ul class="list-group">
          <li class="list-group-item">
            <img src="https://cdn-thumbs.imagevenue.com/2d/75/11/ME17GN1M_t.png" alt="HTML Icon"> HTML
          </li>
          <li class="list-group-item">
            <img src="https://cdn-thumbs.imagevenue.com/95/f5/24/ME17GN1K_t.png" alt="CSS Icon"> CSS
          </li>
          <li class="list-group-item">
            <img src="https://cdn-thumbs.imagevenue.com/7e/5e/34/ME17GN1C_t.png" alt="Bootstrap Icon"> Bootstrap
          </li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item">
            <img src="https://cdn-thumbs.imagevenue.com/c4/bc/7e/ME17GN1Q_t.png" alt="JavaScript Icon"> JavaScript
          </li>
          <li class="list-group-item">
            <img src="https://cdn-thumbs.imagevenue.com/b2/f5/c3/ME17GN20_t.png" alt="Vue.js Icon"> Vue.js
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          institution: 'President High School',
          description: 'Grade 12',
          date: '2021'
        },
        {
          institution: 'The open University',
          description: 'Digital Marketing',
          date: '2022'
        },
        {
          institution: 'Life Choices Academy',
          description: 'Web Development',
          date: '2023 - present'
        },
      ],
    };
  }
};
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: auto;
}

.gradient-bg {
  background: linear-gradient(to right, #d3296a, #38b518, rgb(9, 192, 186));
  padding: 15px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.education-section,
.skills-section {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skills-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.list-group {
  margin-top: 10px;
  flex-basis: calc(50% - 10px); /* Adjust the width based on your preference */
}

.list-group-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.list-group-item img {
  margin-right: 10px;
}
</style>
