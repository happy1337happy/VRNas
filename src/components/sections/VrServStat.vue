<template>
    <section class="stat-wrapper">
        <div class="container">
            <div class="stat-wrapp">
                <div class="box">
                    <span  data-aos="fade-up" data-aos-duration="1000">HAPPY CLIENTS</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">123k+</h2>
                </div>
                <div class="box">
                    <span  data-aos="fade-up" data-aos-duration="1000">PROJECT COMPLETE</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">300k+</h2>
                </div>
                <div class="box">
                    <span  data-aos="fade-up" data-aos-duration="1000">YEARS EXPERIENCE</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">10+</h2>
                </div>
                <div class="background"></div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .stat-wrapper{
        margin: 209px 0;
        .stat-wrapp{
            display: flex;
            justify-content: space-around;
            position: relative;
            .box{
                display: flex;
                flex-direction: column;
                align-items: center;
                span{
                    font-weight: 500;
                    line-height: 100%;
                    background: $main-gradient;
                    background-clip: text;            
                    -webkit-background-clip: text;        
                    -webkit-text-fill-color: transparent;
                    display: inline-block;
                    margin-bottom: 12px;
                    letter-spacing: 1px;
                }
                h2{
                    font-weight: 600;
                    font-size: 48px;
                    line-height: 58px;

                }
            }
            .background{
                position: absolute;
                z-index: -2;
                background: radial-gradient(50% 50% at 50% 50%, #343445 0%, rgba(32, 32, 41, 0) 100%);
                top: -13px;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 125px;
                opacity: .6;
            }
        }
    }
</style>