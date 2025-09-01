<template>
  <section class="blog-content-wrapper">
    <div class="container">
    <TopNav :blog-text="article.text" data-aos="fade-up" data-aos-duration="1000"></TopNav>
      <div class="blog-content-wrapp">
        <div class="blog-box">
          <div class="card-title" data-aos="fade-up" data-aos-duration="1000">
            <h4>{{ article.title }}</h4>
          </div>
          <p class="card-text" data-aos="fade-up" data-aos-duration="1000">{{ article.text }}</p>
          <div class="meta" data-aos="fade-up" data-aos-duration="1000">
            <span class="grad">{{ article.author }}</span> | <span class="grad">{{ article.time }}</span>
          </div>
          <div class="head-img-wrapp" data-aos="fade-up" data-aos-duration="1000">
            <img :src="article.image" alt="img">
          </div>
          <div class="blog-box-mane" data-aos="fade-up" data-aos-duration="1000">
            <template v-for="(block, index) in article.blocks" :key="index">
              <p v-if="block.type === 'text'" class="blog-text">
                {{ block.content }}
              </p>
              <div v-else-if="block.type === 'images'" class="blog-images">
                <img v-for="(img, idx) in block.items" :key="idx" :src="img" alt="blog image">
              </div>
            </template>
          </div>
          <div class="tags-wrapp" data-aos="fade-up" data-aos-duration="1000">
            <p class="tags-text">Post Tags:</p>
            <div class="tags">{{ article.tags }}</div>
          </div>
          <div class="share-wrapp" data-aos="fade-up" data-aos-duration="1000">
            <p class="share-text">Share:</p>
            <div class="icons">
              <a class="link-img" href="#"><img src="/src/assets/img/twiter.svg" alt="icon"></a>
              <a class="link-img" href="#"><img src="/src/assets/img/facebook.svg" alt="icon"></a>
              <a class="link-img" href="#"><img src="/src/assets/img/instagram.svg" alt="icon"></a>
            </div>
          </div>
        </div>
        <div class="blog-others" data-aos="fade-up" data-aos-duration="1000">
          <p class="others-title">Recent Article</p>
          <div v-if="filteredArticles.length" class="others-card" v-for="item in filteredArticles.slice(0, 4)" :key="item.id" @click="goToArticle(item.id)">
            <div class="card-img">
              <img :src="item.image" alt="img">
            </div>
            <div class="card-left">
              <div class="card-title">
                <h4>{{ item.title }}</h4>
              </div>
              <p class="card-text">{{ item.text }}</p>
            </div>
          </div>
          <p v-else>Нет других статей (Debug: {{ filteredArticles.length }})</p>
          <div class="hash">
            <p class="hash-head">Popular Hashtag</p>
            <div class="hash-box">
                <div class="hash-wrapp">
                    <p class="hash-text">#VRDesign</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#ArchitectureInnovation</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#DesignThinking</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#VirtualRealityArchitecture</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#BringingDesignsToLife</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#DesignVisualization</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#ArchitecturalVisualization</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#RevolutionizingArchitecture</p>
                </div>
                <div class="hash-wrapp">
                    <p class="hash-text">#BuildingInVR</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import TopNav from '../ui/TopNav.vue';

const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  articles: {
    type: Array,
    default: () => []
  }
});

const router = useRouter();
const route = useRoute();
const currentId = ref(Number(route.params.id));

watch(
  () => route.params.id,
  (newId) => {
    currentId.value = Number(newId);
    console.log('Updated currentId:', currentId.value);
  }
);

const filteredArticles = computed(() => {
  console.log('Filtering articles with currentId:', currentId.value, 'Articles:', props.articles);
  return props.articles.filter(item => item.id !== currentId.value);
});

const goToArticle = (id) => {
  router.push({ name: 'BlogContent', params: { id } });
};

console.log('Articles in VrBlogContent:', props.articles, 'Filtered Articles:', filteredArticles.value);
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
.blog-content-wrapper {
  margin-top: 55px;
  margin-bottom: 143px;
  .blog-content-wrapp {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .blog-box {
      display: flex;
      flex-direction: column;
      flex: 0 1 789px;
      max-width: 789px;
      width: 100%;
      .card-title {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 16px;
        padding: 2px 10px;
        width: fit-content;
        margin-bottom: 12px;
        h4 {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }
      }
      .card-text {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 12px;
      }
      .meta {
        display: flex;
        flex-direction: row;
        font-weight: 500;
        line-height: 100%;
        background: linear-gradient(90deg, $color-blue 0%, $color-purple 23%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        margin-bottom: 24px;
      }
      .head-img-wrapp {
        width: 789px;
        height: 528px;
        margin-bottom: 30px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .blog-box-mane {
        display: flex;
        flex-direction: column;
        gap: 24px;
        .blog-text {
          font-weight: 300;
          line-height: 28px;
          color: $grey-2;
        }
        .blog-images {
          margin: 56px 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 34px;
          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }
      .tags-wrapp {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        .tags-text {
          font-weight: 600;
          line-height: 28px;
        }
        .tags {
          display: flex;
          flex-direction: row;
          font-weight: 300;
          line-height: 28px;
          background: $main-gradient;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
      }
      .share-wrapp {
        margin-top: 17px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        .share-text {
          font-weight: 600;
          line-height: 28px;
        }
        .icons {
          display: flex;
          gap: 18px;
          .link-img {
            width: 20px;
            height: 20px;
            img {
              width: 100%;
              height: 100%;
              transition: 0.3s ease;
              &:hover {
                transform: scale(1.15);
              }
            }
          }
        }
      }
    }
    .blog-others {
      display: flex;
      flex-direction: column;
      flex: 0 1 333px;
      max-width: 333px;
      width: 100%;
      .others-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
      }
      .others-card {
        display: flex;
        gap: 15px;
        margin-top: 24px;
        padding-bottom: 24px;
        position: relative;
        transition: all 0.3s ease;
        cursor: pointer;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.15);
        }
        &:hover {
          transform: scale(1.1);
        }
        .card-img {
          width: 102px;
          height: 65px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .card-left {
          width: 64%;
          .card-title {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            padding: 2px 7px;
            width: fit-content;
            margin-bottom: 6px;
            h4 {
              font-weight: 500;
              font-size: 10px;
              line-height: 14px;
              text-align: center;
            }
          }
          .card-text {
            display: -webkit-box;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
      .hash{
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        .hash-head{
            font-weight: 500;
            font-size: 20px;
            line-height: 100%;
            margin-bottom: 24px;
        }
        .hash-box{
            display: flex;
            flex-direction: row;
            gap: 12px;
            flex-wrap: wrap;
            .hash-wrapp{
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 16px;
                padding: 2px 7px;
                width: fit-content;
                margin-bottom: 6px;
                .hash-text{
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 14px;
                    text-align: center;
                }
            }
        }
      }
    }
  }
}
</style>