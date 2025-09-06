<template>
    <div class="card-wrapper"  v-for=" employee in employees" :key="employee.id">
        <div class="img-wrapp">
            <img :src="useImageLoader(`@/assets/img/${employee.photo}`)" alt="img">
        </div>
        <div class="name-position">
            <div class="links">
                <a href="https://x.com/" target="_blank" class="link">
                    <img src="/src/assets/img/net-icon-1.svg" alt="icon" class="link-icon">
                </a>
                <a href="https://www.facebook.com/" target="_blank" class="link">
                    <img src="/src/assets/img/net-icon-2.svg" alt="icon" class="link-icon">
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="link">
                    <img src="/src/assets/img/net-icon-3.svg" alt="icon" class="link-icon">
                </a>
            </div>
            <p class="name">{{ employee.name }}</p>
            <p class="position">{{ employee.position }}</p>
        </div>
    </div>
</template>

<script setup>
    import { employees } from '../../utils/employees';
    import { useImageLoader } from '../../composables/useImageLoader';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .card-wrapper{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(37, 37, 50, 0.6);
        width: min(100%, 379px);
        aspect-ratio: 379 / 503;    
        border: 1px solid transparent;
        border-image-source: linear-gradient(
            94.92deg,
            rgba(255, 255, 255, 0.3) -0.29%,
            rgba(255, 255, 255, 0) 100%
        );
        border-image-slice: 1;
        transition: all .3s ease;
        &:hover{
            border: 1px solid;
            border-image: $main-gradient 1;
            .name-position .links{
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
        .img-wrapp{
            width: 94%;
            height: 96%;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background:linear-gradient(180deg, rgba(50, 70, 188, 0) 0%, #192883 100%);
                z-index: 2;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .name-position{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 8%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            z-index: 2;
            .links{
                display: flex;
                gap: clamp( 10px, 2rem, 25px);
                margin-bottom: 16px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all .3s ease;
                .link-icon{
                    transition: all .3s ease ;
                    &:hover{
                        transform: scale(1.1);
                    }
                }
            }
            .name{
                font-weight: 400;
                font-size: 20px;
                line-height: 100%;
                white-space: nowrap;
                margin-bottom: 5px;
            }
            .position{
                font-weight: 400;
                font-size: 14px;
                line-height: 100%;
                color: $grey-1;
            }
        }
    }
</style>