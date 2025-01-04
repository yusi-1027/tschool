const { createApp } = Vue

// 自定義滾動顯示指令
const vScrollReveal = {
    mounted: (el) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal')
                }
            })
        }, {
            threshold: 0.1
        })
        observer.observe(el)
    }
}

const app = createApp({
    data() {
        return {
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
                                <div class="motto-section">
                                    <h2>標語</h2>
                                    <p class="motto">「廣闊探索、天賦自由」</p>
                                    <p>一所打破時空限制的行動校園，為學生打造個人化學習模式，發展學生天賦潛能。</p>
                                </div>
                                <div class="mission-section">
                                    <h2>宗旨</h2>
                                    <p>一所讓學生廣闊探索、天賦自由的新型態高中，融合數位科技與探究實作，實踐個人化深度學習，並致力為每一位學生量身打造最合適自己的教育模式，幫助學生發揮潛能，促進個人自我實現與社會共榮。</p>
                                </div>
                                <div class="vision-section">
                                    <h2>學校五大願景</h2>
                                    <div class="vision-grid">
                                        <div class="vision-item">
                                            <h3>（一）生生不凡</h3>
                                            <p>發掘每一位學生個別的學習潛力與天賦才能。</p>
                                        </div>
                                        <div class="vision-item">
                                            <h3>（二）自我實現</h3>
                                            <p>運用數位科技提供學生發揮天賦潛能的舞臺，促進個人自我實現與社會共榮。</p>
                                        </div>
                                        <div class="vision-item">
                                            <h3>（三）歷程獨特</h3>
                                            <p>打造每一位學生專屬的學習歷程與教育模式。</p>
                                        </div>
                                        <div class="vision-item">
                                            <h3>（四）世界公民</h3>
                                            <p>培育具有終身學習的學習力、社會參與的影響力、國際視野的移動力之新世代世界公民。</p>
                                        </div>
                                        <div class="vision-item">
                                            <h3>（五）跨域教師</h3>
                                            <p>期許教師肩負創新思維力、合作行動力與彈性適應力之學習引導者的責任。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `,
                },
                admission: {
                    title: '入學管道<br>ADMISSION',
                    content: `
                        <div class="admission-content">
                            <h3>入學方式</h3>
                            <div class="admission-grid">
                                <div class="admission-item">
                                    <h4>個人申請入學</h4>
                                    <p>適合具有特殊才能或學習潛力的學生：</p>
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
                            <div class="admission-note">
                                <h4>入學準備說明會</h4>
                                <p>每月舉辦線上說明會，介紹學校特色及入學準備事項。</p>
                                <p>下次說明會時間：2024年1月15日 19:00</p>
                            </div>
                        </div>
                    `,
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
                            <div class="resources-support">
                                <h4>學習支援服務</h4>
                                <ul>
                                    <li>24/7 線上學習諮詢</li>
                                    <li>專業教師一對一指導</li>
                                    <li>同儕學習小組配對</li>
                                    <li>學習歷程檔案建置協助</li>
                                </ul>
                            </div>
                        </div>
                    `,
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
                            <div class="upcoming-events">
                                <h4>近期活動預告</h4>
                                <ul>
                                    <li>2024年1月：新年數位藝術展</li>
                                    <li>2024年2月：AI與教育創新論壇</li>
                                    <li>2024年3月：春季專題發表會</li>
                                </ul>
                            </div>
                        </div>
                    `,
                }
            },
            currentView: 'home',
            currentNewsIndex: 0,
            news: [
                '2024學年度招生簡章現已公告，歡迎下載查看',
                '線上說明會將於1月15日舉行，請準時參加',
                '寒假探索營開放報名中，名額有限請把握機會',
                '12月份學生作品展示已更新，歡迎瀏覽'
            ]
        }
    },
    methods: {
        startNewsRotation() {
            setInterval(() => {
                this.currentNewsIndex = (this.currentNewsIndex + 1) % this.news.length
            }, 5000)
        }
    },
    mounted() {
        this.startNewsRotation()
    }
})

// 註冊自定義指令
app.directive('scroll-reveal', vScrollReveal)

// 掛載應用
app.mount('#app')
