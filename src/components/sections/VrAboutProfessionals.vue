<template>
    <section class="professionals-wrapper">
        <div class="container">
            <div class="professionals-wrapp">
                <div class="professionals-head">
                    <div class="head-text">
                        <span  data-aos="fade-up" data-aos-duration="1000">OUR TEAM</span>
                        <h2  data-aos="fade-up" data-aos-duration="1000">Our Professionals Team</h2>
                    </div>
                    <div class="btn-wrapp"  data-aos="fade-up" data-aos-duration="1000">
                        <MyButton to="/team">see all</MyButton>
                    </div>
                </div>
                <div class="professionals-bottom" data-aos="fade-up" data-aos-duration="1000">
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/team-1.png" alt="team">
                        </div>
                        <div class="name-position">
                            <p class="name">Taras Shevchenko</p>
                            <p class="position">CEO</p>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/team-2.png" alt="team">
                        </div>
                        <div class="name-position">
                            <p class="name">Bayu Aji</p>
                            <p class="position">VR Development</p>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/team-3.png" alt="team">
                        </div>
                        <div class="name-position">
                            <p class="name">Agung Brandon</p>
                            <p class="position">VR Artist</p>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/team-4.png" alt="team">
                        </div>
                        <div class="name-position">
                            <p class="name">Aril Laso</p>
                            <p class="position">UI / UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import MyButton from '../ui/MyButton.vue';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .professionals-wrapper{
        margin-top: 80px;
        margin-bottom: 150px;
        .professionals-wrapp{
            .professionals-head{
                display: flex;
                justify-content: space-between;
                margin-bottom: 41px;
                .head-text{
                    display: flex;
                    flex-direction: column;
                    span {
                        font-weight: 500;
                        line-height: 100%;
                        background: linear-gradient(90deg, #0CBAF1 0%, #E95CE9 12%);
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
                    }
                }
                .btn-wrapp{
                    display: flex;
                    flex-direction: column-reverse;
                }
            }
            .professionals-bottom{
                display: flex;
                justify-content: space-between;
                gap: 5px;
                .img-wrapper{
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(37, 37, 50, 0.6);
                    width: min(100%, 293px);
                    aspect-ratio: 293 / 388.9;    
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
                        bottom: 5%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        z-index: 2;
                        .name{
                            font-weight: 600;
                            line-height: 28px;
                            white-space: nowrap;
                        }
                        .position{
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 20px;
                            color: $grey-1;
                        }
                    }
                }
            }
        }
    }
</style>