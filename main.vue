<template>
  <div id="app">
    <div v-scroll-reveal>
      <h1>{{ currentView }}</h1>
      <div v-if="currentView === 'home'">
        <div v-for="(news, index) in news" :key="index">
          <p v-if="index === currentNewsIndex">{{ news }}</p>
        </div>
      </div>
      <div v-html="sections[currentView].content"></div>
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue'; // Import Vue

const vScrollReveal = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal');
        }
      });
    }, {
      threshold: 0.1
    });
    observer.observe(el);
  }
};

export default {
  data() {
    return {
      currentView: 'home',
      currentNewsIndex: 0,
      news: [
        '2024 年度入學申請開始接受報名',
        '新增 AR/VR 實驗課程',
        '國際教育展將於下月舉行'
      ],
      sections: {
        about: {
          title: '關於我們<br>ABOUT US',
          content: `
            <div class="about-content">
              <div class="school-intro">
                <div class="intro-text">
                  <h3>辦學理念</h3>
                  <p>「廣闊探索、天賦自由」是我們的核心價值。我們相信每個學生都擁有獨特的天賦，透過數位科技與創新教學，幫助學生探索自我、發展潛能。</p>
                </div>
                <div class="intro-text">
                  <h3>教育願景</h3>
                  <p>打造一個沒有圍牆的校園，讓學習不受時空限制。結合實體與虛擬的混合式學習，培養具備未來競爭力的新世代人才。</p>
                </div>
                <div class="intro-text">
                  <h3>學校特色</h3>
                  <ul>
                    <li>彈性化的課程規劃，尊重學生的學習節奏</li>
                    <li>結合AR/VR技術的創新教學方式</li>
                    <li>強調跨領域學習與專案導向教學</li>
                    <li>重視學生的自主學習能力培養</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        admission: {
          title: '入學管道<br>ADMISSION',
          content: `
            <div class="admission-content">
              <h3>入學方式</h3>
              <div class="admission-grid">
                <div class="admission-item">
                  <h4>個人申請入學</h4>
                  <p>適合具有特殊才能或學習潛力的學生</p>
                  <ul>
                    <li>個人作品集展示</li>
                    <li>學習計畫書撰寫</li>
                    <li>面試及實作評量</li>
                  </ul>
                  <p class="deadline">報名期間：2024年3月1日至3月31日</p>
                </div>
                <div class="admission-item">
                  <h4>特殊選才管道</h4>
                  <p>針對以下領域的特殊人才：</p>
                  <ul>
                    <li>數位創作能力優異者</li>
                    <li>程式設計特殊表現者</li>
                    <li>創新科技應用傑出者</li>
                  </ul>
                  <p class="deadline">報名期間：2024年4月1日至4月30日</p>
                </div>
              </div>
            </div>
          `
        },
        resources: {
          title: '教學資源<br>TEACHING RESOURCES',
          content: `
            <div class="resources-content">
              <h3>數位學習資源</h3>
              <div class="resources-grid">
                <div class="resource-item">
                  <h4>智慧學習平台</h4>
                  <ul>
                    <li>個人化學習進度追蹤</li>
                    <li>AI輔助學習診斷</li>
                    <li>即時互動討論區</li>
                    <li>線上即時解答系統</li>
                  </ul>
                </div>
                <div class="resource-item">
                  <h4>創新教學工具</h4>
                  <ul>
                    <li>VR虛擬實驗室</li>
                    <li>AR擴增實境教材</li>
                    <li>3D建模工作室</li>
                    <li>程式設計實作環境</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        exchange: {
          title: '互動交流<br>INTERACTIVE EXCHANGE',
          content: `
            <div class="exchange-content">
              <h3>交流活動</h3>
              <div class="exchange-grid">
                <div class="exchange-item">
                  <h4>校內活動</h4>
                  <ul>
                    <li>每週主題式線上論壇</li>
                    <li>月度創新專案展示</li>
                    <li>跨班級協作工作坊</li>
                    <li>數位作品成果發表會</li>
                  </ul>
                </div>
                <div class="exchange-item">
                  <h4>國際交流</h4>
                  <ul>
                    <li>國際姊妹校線上共學</li>
                    <li>全球創新教育論壇</li>
                    <li>跨國專題研究合作</li>
                    <li>國際教育展演活動</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        }
      }; // 確保這裡沒有多餘的逗號
    },
  },
  methods: {
    startNewsRotation() {
      setInterval(() => {
        this.currentNewsIndex = (this.currentNewsIndex + 1) % this.news.length;
      }, 3000);
    }
  },
  mounted() {
    this.startNewsRotation();
  },
  directives: {
    scrollReveal: vScrollReveal
  }
};
</script>

<style scoped>
.reveal {
  opacity: 1; /* 顯示 */
  transition: opacity 0.5s ease-in;
}

[v-scroll-reveal] {
  opacity: 0; /* 初始隱藏 */
}
</style>