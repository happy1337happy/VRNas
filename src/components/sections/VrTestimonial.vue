<template>
    <section class="testimonial-wrapper">
            <div class="container">
                <div class="testimonial-wrapp">
                    <div class="testimonial-header">
                        <span  data-aos="fade-up" data-aos-duration="1000">TESTIMONIAL</span>
                        <h2  data-aos="fade-up" data-aos-duration="1000">What Our Clients Are Saying</h2>
                    </div>
                    <div class="circle-wrapp" data-aos="zoom-in" data-aos-duration="1000">
                        <div class="circle-1">
                            <div class="dude-border img-1" @click="selectTestimonial(1)" :class="{ active: activeTestimonialId === 1}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-1.png" alt="img">
                                </div>
                                <transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 1">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="dude-border img-2" @click="selectTestimonial(2)" :class="{ active: activeTestimonialId === 2}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-2.png" alt="img">
                                </div>
                                <Transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 2">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div class="circle-2">
                            <div class="dude-border img-3" @click="selectTestimonial(3)" :class="{ active: activeTestimonialId === 3}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-3.png" alt="img">
                                </div>
                                <Transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 3">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div class="circle-3">
                            <div class="dude-border img-4" @click="selectTestimonial(4)" :class="{ active: activeTestimonialId === 4}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-4.png" alt="img">
                                </div>
                                <Transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 4">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div class="circle-4">
                            <div class="dude-border img-5" @click="selectTestimonial(5)" :class="{ active: activeTestimonialId === 5}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-5.png" alt="img">
                                </div>
                                <Transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 5">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div class="circle-5">
                            <div class="dude-border img-6" @click="selectTestimonial(6)" :class="{ active: activeTestimonialId === 6}">
                                <div class="img-wrapp">
                                    <img src="/src/assets/img/circle-dude-6.png" alt="img">
                                </div>
                                <Transition name="testimonial">
                                    <div class="testimonial-box" v-if="activeTestimonialId === 6">
                                        <div class="testimonial-content">
                                            <p class="text">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                                            <div class="author">Robert Fox <span>- CEO Anono</span></div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div class="circle-6">
                            <div class="img-wrapp-6">
                                <img src="/src/assets/img/boy-4.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const activeTestimonialId = ref(null)

    function selectTestimonial(id){
        activeTestimonialId.value = activeTestimonialId.value === id ? null : id
    }
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.testimonial-wrapper {
  padding-top: 705px;
  padding-bottom: 705px;
  overflow: hidden;

  .testimonial-wrapp {
    position: relative;

    .testimonial-header {
      position: absolute;
      width: 100%;
      top: -485px;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-weight: 500;
        line-height: 100%;
        background: $main-gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        margin-bottom: 12px;
      }

      h2 {
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
      }
    }

    .circle-wrapp {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      .circle-1,
      .circle-1-1,
      .circle-2,
      .circle-3,
      .circle-4,
      .circle-5 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid rgba(255, 255, 255, 0.17);
        border-radius: 50%;
        aspect-ratio: 1 / 1;
      }

    .circle-1 {
        width: 1200px;
        transform: translate(-50%, -50%) rotate(300deg);
        .img-1 {
            transform: rotate(60deg) translateY(115px) translateX(-100px);
        }

        .img-2 {
            transform: rotate(60deg) translateY(840px) translateX(750px);
        }
    }
      .circle-2 {
        width: 1034px;
        transform: translate(-50%, -50%) rotate(240deg);
        .img-3 {
            transform: translate(-50%, -50%) rotate(120deg);
        }
      }

      .circle-3 {
        width: 850px;
        transform: translate(-50%, -50%) rotate(90deg);
        .img-4 {
            transform: translate(-50%, -50%) rotate(270deg);
        }
      }

      .circle-4 {
        width: 686px;
        transform: translate(-50%, -50%) rotate(40deg);
        .img-5 {
            transform: translate(-50%, -50%) rotate(320deg);
        }
      }

      .circle-5 {
        width: 515px;
        transform: translate(-50%, -50%) rotate(180deg);
        .img-6 {
            transform: translate(-50%, -50%) rotate(180deg);
        }
      }

      .circle-6 {
        z-index: -1;
        position: absolute;
        left: 50%;
        top: 14px;
        transform: translate(-50%, -50%);
        width: clamp(520px, 60vw, 700px);
      }

    .dude-border {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: center center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background: linear-gradient(
          94.92deg,
          rgba(255, 255, 255, 0.3) -0.29%,
          rgba(255, 255, 255, 0) 100%
        );
        padding: 2px;
        box-sizing: border-box;
        z-index: 1;
        cursor: pointer;
        &:hover{
            background: linear-gradient(94.92deg, #19B5F1 -0.29%, #CA6AEB 100%);
            padding: 1px;
        }
        &.active{
            background: linear-gradient(94.92deg, #19B5F1 -0.29%, #CA6AEB 100%);
            padding: 1px;

            .img-wrapp {
            background-color: #252532;
            }
            &::before{
                content: "";
                position: absolute;
                width: 80px;
                height: 58px;
                top: 8px;
                left: -3px;
                background: linear-gradient(90deg, #19B5F1 0%, #CA6AEB 100%);
                border-radius: 50%;
                z-index: 2;
                filter: blur(10px);
                opacity: 0.8;
                pointer-events: none;
                rotate: -20deg;
            }
        }
        .testimonial-box{
            position: absolute;
            left: 110%;
            top: -25px;
            bottom: 0;
            margin: auto 0;
            transform-origin: center center;
            width: 300px;
            .testimonial-content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 18px 19px 13px 23px;
                background-image: url(/src/assets/img/bg-testimonial.png);
                background-size: 100% 100%;
                .text{
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 20px;
                    color: $grey-2;
                    margin-bottom: 8px;
                }
                .author{
                    position: relative;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 24px;
                    color: $white;
                    width: fit-content;
                    span{
                        color: $grey-2;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background-image: $main-gradient;
                    }
                }
            }
        }
        &.img-2 .testimonial-box,
        &.img-4 .testimonial-box {
            left: auto;
            right: 110%;
        }
        &.img-2 .testimonial-content,
        &.img-4 .testimonial-content {
            background-image: none;
            position: relative;
        }

        &.img-2 .testimonial-content::before,
        &.img-4 .testimonial-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(/src/assets/img/bg-testimonial.png);
            background-size: 100% 100%;
            transform: rotate(180deg);
            z-index: -1;
        }
    }

      .img-wrapp {
        background-color: rgba(37, 37, 50, 0.6);
        width: 73px;
        height: 73px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          z-index: 3;  
          object-fit: cover;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
.testimonial-enter-active,
.testimonial-leave-active {
  transform-origin: center center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.testimonial-enter-from,
.testimonial-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.testimonial-enter-to,
.testimonial-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
</style>