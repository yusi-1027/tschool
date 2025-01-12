<template>
    <div id="app">
      <div v-scroll-reveal>
        <h1>{{ sections[currentView].title }}</h1>
        <div v-html="sections[currentView].content"></div>
      </div>
      <div class="news">
        <p v-for="(newsItem, index) in news" :key="index" v-if="index === currentNewsIndex">{{ newsItem }}</p>
      </div>
    </div>
</template>

<script>
import { createApp } from 'vue';

// 自定義滾動顯示指令
const vScrollReveal = {
    mounted: (el) => {
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

let newsInterval;

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
                    title: '關於我們',
                    content: '<p>這是關於我們的內容。</p>'
                },
                admission: { 
                    title: '入學管道',
                    content: '<p>這是入學管道的內容。</p>' 
                },
                resources: { 
                    title: '教學資源',
                    content: '<p>這是教學資源的內容。</p>' 
                },
                exchange: { 
                    title: '互動交流',
                    content: '<p>這是互動交流的內容。</p>'
                }   
            }
        };
    },
    methods: {
        startNewsRotation() {
            newsInterval = setInterval(() => {
                this.currentNewsIndex = (this.currentNewsIndex + 1) % this.news.length;
            }, 3000);
        }
    },
    mounted() {
        this.startNewsRotation();
    },
    beforeUnmount() {
        clearInterval(newsInterval);
    },
    directives: {
        'scroll-reveal': vScrollReveal
    }
};

console.log('Vue app initialized');
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error occurred: ', message, ' at ', source, ':', lineno, ':', colno);
};
</script>

<style scoped>
/* Add your styles here */
.reveal {
    opacity: 0; /* 初始狀態 */
    transition: opacity 0.5s ease-in; /* 過渡效果 */
}
</style>