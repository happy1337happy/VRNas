<template>
    <section class="meet-tema-wrapper">
        <div class="container">
            <div class="meet-tema-wrapp">
                <div class="meet-header">
                    <span  data-aos="fade-up" data-aos-duration="1000">OUR TEAM</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Meet Our Amazing Team</h2>
                </div>
                <div class="team-box">
                    <PortretCard></PortretCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import PortretCard from '../ui/PortretCard.vue';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .meet-tema-wrapper{
        margin-top: 150px;
        .meet-tema-wrapp{
            .meet-header{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 48px;
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
                }
            }
            .team-box{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
            }
        }
    }
</style>