<template>
    <header class="header-wrapper" :class="{'scrolled' : isScrolled}">
        <div class="container">
            <div class="header-wrapp">
                <div class="logo"><RouterLink to="/"><img src="/src/assets/img/VRNas.logo.svg" alt="logo"></RouterLink></div>
                <nav class="navigation">
                    <ul>
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/about-us">About us</RouterLink></li>
                        <li><RouterLink to="/service">Service</RouterLink></li>
                        <li><RouterLink to="/blog">Blog</RouterLink></li>
                        <li class="has-dropdown">
                            <a 
                                href="#" 
                                class="combo" 
                                @click.prevent="toggleMenu('page')"
                                :aria-expanded="isPageOpen.toString()"
                                aria-controls="dropdown-page"
                            >
                                Page 
                                <img src="/src/assets/img/arrow-bot.svg" alt="icon" class="arrow" :class="{'rotated': isPageOpen}">
                            </a>
                            <transition name="fade-slide">
                                <ul 
                                    v-if="isPageOpen" 
                                    id="dropdown-page" 
                                    class="dropdown" 
                                    :aria-hidden="(!isPageOpen).toString()"
                                >
                                    <li><RouterLink to="/pricing-plan" @click="toggleMenu('page')">Pricing Plan</RouterLink></li>
                                    <li><RouterLink to="/team" @click="toggleMenu('page')">Our Team</RouterLink></li>
                                </ul>
                            </transition>
                        </li>
                    </ul>
                </nav>
                <MyButton fontWeight="300" fontSize="lg" size="md" :noneUppercase="true" to="/contact-us">Contact us</MyButton>
            </div>
        </div>
    </header>
</template>

<script setup>
    import MyButton from '../ui/MyButton.vue';
    import { ref , onMounted, onUnmounted, handleError } from 'vue';
    import { useRouter } from 'vue-router';

    const isPageOpen = ref(false);
    const isBlogOpen = ref(false);
    const router = useRouter();

    function toggleMenu(menu){
        if (menu === 'page'){
            isPageOpen.value=!isPageOpen.value;
            isBlogOpen.value=false;

        } else if (menu === 'blog'){
            isBlogOpen.value=!isBlogOpen.value;
            isPageOpen.value=false;
        }
    }

    const isScrolled = ref(false);

    const heandleScroll = () =>{
        isScrolled.value = window.scrollY > 30
    }

    onMounted(()=>{
        window.addEventListener('scroll', heandleScroll)
    })

    onUnmounted(()=>{
        window.removeEventListener('scroll', heandleScroll)
    })
</script>

<style scoped lang="scss">
  @use '@/assets/styles/variables.scss' as *;
    .header-wrapper{
        padding: 31px 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        transition: background-color 0.3s ease, box-shadow 0.3s ease ;
        background-color: transparent;
        &.scrolled{
            background-color: $black-glass;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            padding: 15px 0;
        }
        .header-wrapp{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            .navigation{
                ul{
                    display: flex;
                    gap: 64px;
                    li{
                        font-weight: 300;
                        line-height: 28px;
                        position: relative;
                        a{
                            transition: 0.3s ease;
                            &:hover{
                                color: $grey-2
                            }
                        }
                        &.has-dropdown{
                            .combo{
                                display: flex;
                                gap: 7px;
                                .arrow{
                                    transition: transform 0.3s ease;
                                    &.rotated{
                                        transform: rotate(180deg);
                                    }
                                }
                            }
                            .dropdown{
                                width: 115px;
                                background-color: $black-50;
                                padding: 10px 10px 10px 10px;
                                position: absolute;
                                top: 100%;
                                left: -2px;
                                display: flex;
                                flex-direction: column;
                                gap: 10px;
                                border: 1px solid transparent;
                                border-image-source: linear-gradient(
                                    94.92deg,
                                    rgba(255, 255, 255, 0.3) -0.29%,
                                    rgba(255, 255, 255, 0) 100%
                                );
                                border-image-slice: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    .fade-slide-enter-active,
    .fade-slide-leave-active{
        transition: opacity 0.5s ease,transform 0.5s ease;
        transform-origin: top;
    }
    .fade-slide-enter-from,
    .fade-slide-leave-to{
        opacity: 0;
        transform: scaleY(0);
    }
    .fade-slide-enter-to,
    .fade-slide-leave-from{
        opacity: 1;
        transform: scaleY(1);
    }
</style>