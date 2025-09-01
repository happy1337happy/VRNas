<template>
    <div class="blog-card-wrapp" v-for=" article in articles" :key="article.id" data-aos="fade-up" data-aos-duration="1000"> 
        <div class="card-top">
            <img :src="article.image" alt="img">
        </div>
        <div class="card-bottom">
            <div class="card-title">
                <h4>{{ article.title }}</h4>
            </div>
            <p class="card-text">{{ article.text }}</p>
            <div class="link">
                <RouterLink :to="`/blog/${article.id}`">READ MORE</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { articles } from '../../utils/articles';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .blog-card-wrapp{
        width: 100%;
        max-width: 379px;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: $black-50;
        border: 1px solid transparent;
        border-image-source: linear-gradient(
            94.92deg,
            rgba(255, 255, 255, 0.3) -0.29%,
            rgba(255, 255, 255, 0) 100%
        );
        border-image-slice: 1;
        .card-top{
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .card-bottom{
            padding: 16px 24px 32px 24px;
            .card-title{
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 16px;
                padding: 2px 10px;
                width: fit-content;
                margin-bottom: 12px;
                h4{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                }
            }
            .card-text{
                font-weight: 400;
                font-size: 18px;
                line-height: 1.3;
                margin-bottom: 5px;
            }
            .link{
                position: relative;
                font-weight: 700;
                font-size: 14px;
                line-height: 14px;
                background: $main-gradient;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                &::before{
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-image: $main-gradient;
                }
            }
        }
    }
</style>