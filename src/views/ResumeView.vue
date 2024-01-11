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
      <ul class="list-group">
        <li v-for="(skill, index) in skills" :key="index" class="list-group-item">{{ skill }}</li>
      </ul>
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
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue.js',
        'Writer',
      ]
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

.list-group {
  margin-top: 10px;
}
</style>
