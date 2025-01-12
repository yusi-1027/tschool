<template>
    <div class="app">
      <nav class="nav" ref="nav">
        <div class="logo">數位實驗高中</div>
        <div class="nav-links">
          <a href="#" @click="changeSection('home')" :class="{ active: currentSection === 'home' }">首頁</a>
          <a href="#" @click="changeSection('features')" :class="{ active: currentSection === 'features' }">特色課程</a>
          <a href="#" @click="changeSection('innovation')" :class="{ active: currentSection === 'innovation' }">創新教學</a>
          <a href="#" @click="changeSection('admission')" :class="{ active: currentSection === 'admission' }">入學資訊</a>
        </div>
      </nav>
  
      <main>
        <section v-if="currentSection === 'home'" class="hero" ref="hero">
          <h1>開創數位學習新紀元</h1>
          <p class="subtitle">結合科技與教育的未來式學習環境</p>
          <div class="features-grid">
            <div class="feature-card" v-for="(feature, index) in features" :key="index" ref="featureCards">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </section>
  
        <section v-if="currentSection === 'features'" class="courses" ref="courses">
          <h2>特色課程</h2>
          <div class="course-list">
            <div class="course-item" v-for="course in courses" :key="course.id" ref="courseItems">
              <h3>{{ course.name }}</h3>
              <p>{{ course.description }}</p>
            </div>
          </div>
        </section>
  
        <!-- Add more sections as needed -->
      </main>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  export default {
    setup() {
      const currentSection = ref('home')
      const nav = ref(null)
      const hero = ref(null)
      const featureCards = ref([])
      const courseItems = ref([])
  
      const features = [
        { title: '創新教學模式', description: 'AR/VR 實境教學，打破傳統學習界限' },
        { title: '個人化學習', description: 'AI 輔助系統，依據學生特質調整進度' },
        { title: '跨域整合', description: '結合科技與人文，培養全方位人才' },
        { title: '國際視野', description: '全球教育資源，接軌國際教育趨勢' }
      ]
  
      const courses = [
        { id: 1, name: '元宇宙創作工坊', description: '探索虛擬實境內容創作' },
        { id: 2, name: 'AI 應用開發', description: '人工智慧與機器學習實務' },
        { id: 3, name: '數位敘事與傳播', description: '新媒體內容製作與傳播策略' }
      ]
  
      const changeSection = (section) => {
        currentSection.value = section
        animateSection(section)
      }
  
      const animateSection = (section) => {
        if (section === 'home') {
          gsap.from(hero.value, {
            opacity: 0,
            y: 50,
            duration: 1
          })
          gsap.from(featureCards.value, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8
          })
        }
        if (section === 'features') {
          gsap.from(courseItems.value, {
            opacity: 0,
            x: -50,
            stagger: 0.3,
            duration: 0.8
          })
        }
      }
  
      onMounted(() => {
        gsap.from(nav.value, {
          y: -100,
          opacity: 0,
          duration: 1
        })
        animateSection('home')
      })
  
      return {
        currentSection,
        features,
        courses,
        nav,
        hero,
        featureCards,
        courseItems,
        changeSection
      }
    }
  }
  </script>
  
  <style scoped>
  .app {
    font-family: 'Noto Sans TC', sans-serif;
  }
  
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .nav-links a {
    margin-left: 2rem;
    text-decoration: none;
    color: #2c3e50;
    transition: color 0.3s;
  }
  
  .nav-links a:hover, .nav-links a.active {
    color: #42b983;
  }
  
  main {
    padding-top: 80px;
  }
  
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
    color: white;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    color: #2c3e50;
  }
  
  .courses {
    padding: 4rem 2rem;
  }
  
  .course-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .course-item {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  