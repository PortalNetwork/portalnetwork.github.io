<script>
export default {};
</script>

<template>
  <div class="wrap">
    <div class="header">
      <div class="header-container">
        <a href="/">
          <img src="images/logo/column_logo.png" />
        </a>

        <ul class="outline">
          <li>
            <a href="./blog.html" target="_blank">Blog</a>
          </li>
          <li>
            <a href="https://search.portal.network/" target="_blank">Showcase</a>
          </li>
          <li>
            <a href="https://hackathon.portal.network/" target="_blank">Hackathon</a>
          </li>
          <li>
            <a href="https://forum.portal.network/" target="_blank">Forum</a>
          </li>
        </ul>

      </div>
    </div>

    <div id="roadmap">
      <a href="https://t.me/portalnetworkofficial" class="telegramBtn" target="_blank"><img src="images/roadmap/tel.png" alt=""></a>
      <div class="nav">
        <div class="nav-item" @click="scrollToChapter(0)">
          <span class="title">Chapter 1</span>
          <span class="chapter-name">Community Contribution</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(1)">
          <span class="title">Chapter 2</span>
          <span class="chapter-name">Development Progress</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(2)">
          <span class="title">Chapter 3</span>
          <span class="chapter-name">Education & Partnership</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(3)">
          <span class="title">Chapter 4</span>
          <span class="chapter-name">Event</span>
        </div>
      </div>

      <div class="main">
        <div class="chapter" v-for="(chapter, chapterIdx) in roadmapData" :key="chapterIdx">
          <div class="banner">
            <div class="icon">
              <img :src="chapter.icon" />
            </div>
            <span class="title">{{ chapter.title }}</span>
          </div>

          <div class="flag" v-for="(flag, flagIdx) in chapter.flags" :key="flagIdx">
            <div class="headline-container">
              <h1 class="headline">{{ flag.title }}</h1>
              <div class="icons-container">
                <ul class="icon_list" v-if="flag.links.length > 0">
                  <li v-for="(link, linkIdx) in flag.links" :key="linkIdx">
                    <a :href="link.url" :class="{icon: true, link: true }" target="_blank">{{ flag.links.length >= 2 ? link.title: '' }}</a>
                  </li>
                </ul>

                <ul class="icon_list">
                  <li v-for="(video, videoIdx) in flag.videos" :key="videoIdx">
                    <a :href="video.url" :class="{icon: true, video: true, expand: flag.videos.length >= 2 }" target="_blank">{{ flag.videos.length >= 2 ? video.title: '' }}</a>
                  </li>
                </ul>

                <a v-for="(file, fileIdx) in flag.files" :key="fileIdx" :href="file.url" :class="{icon: true, file: true, expand: flag.files.length >= 2 }"
                  target="_blank">
                  {{ flag.files.length >= 2 ? file.title: '' }}
                </a>

                <a v-for="(github, githubIdx) in flag.githubs" :key="githubIdx" :href="github.url" :class="{icon: true, github: true, expand: flag.githubs.length >= 2 }"
                  target="_blank">
                  {{ flag.githubs.length >= 2 ? github.title: '' }}
                </a>
              </div>
            </div>

            <div class="time-location">
              {{flag.time}},{{flag.location}}
            </div>

            <div class="content">
              <div :class="{description: true, 'has-photos': flag.photos !== null}" v-html="flag.content"></div>
              <div class="photos" v-if="flag.photos !== null">
                <div v-for="(photo, photoIdx) in flag.photos" @click="openModal(flag.photos)" :class="{ cover: flag.photos.length > 2 && photoIdx === 1}" 
                  :key="photoIdx" v-if="photoIdx < 2">
                  <img :src="photo" alt="">
                  <span class="number">+{{flag.photos.length}}</span>
                </div>
              </div>
            </div>

            <div class="progress-container" v-if="flag.progress > 0">
              <div class="progress-bar">
                <div class="progress" :style="{ width: flag.progress + '%'}"></div>
              </div>
              <span class="number">{{flag.progress}}%</span>
            </div>
          </div>
        </div>
      </div>

      <div v-show="isOpenPop" class="photoPop">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(photo, photoIdx) in nowPhotos" :key="photoIdx">
              <img :src="photo" alt="" />
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>
        <a @click="closeModal" class="closeBtn">
          <i class="fas fa-times fa-2x"></i>
        </a>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

