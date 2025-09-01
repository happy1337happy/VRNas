<template>
  <div class="partners-wrapper">
    <div class="container">
      <div class="partners-wrapp">
        <div class="partners-header">
          <span data-aos="fade-up" data-aos-duration="1000">Our Trusted Partners</span>
          <h2 data-aos="fade-up" data-aos-duration="1000">Discover the Companies We Work With</h2>
        </div>
        <div class="partners-mane" data-aos="fade-up" data-aos-duration="1000">
          <div class="arch-wrapp">
            <div class="arch-1">
                <img src="/src/assets/img/sigma-arch.svg" alt="img" class="arch-img-1" />
                <div class="circle-wrapp-1">
                    <div class="circle">
                        <img src="/src/assets/img/partner-1.svg" alt="logo" class="logo-icon-1" />
                    </div>
                </div>
                <div class="circle-wrapp-2">
                    <div class="circle ">
                        <img src="/src/assets/img/partner-2.svg" alt="logo" class="logo-icon-2"/>
                    </div>
                    <div class="circle ">
                        <img src="/src/assets/img/partner-3.svg" alt="logo" class="logo-icon-3"/>
                    </div>
                </div>
                <div class="circle-wrapp-3">
                    <div class="circle ">
                        <img src="/src/assets/img/partner-4.svg" alt="logo" class="logo-icon-4"/>
                    </div>
                    <div class="circle ">
                        <img src="/src/assets/img/partner-5.svg" alt="logo" class="logo-icon-5"/>
                    </div>
                </div>
                <div class="circle-wrapp-4">
                    <div class="circle ">
                        <img src="/src/assets/img/partner-6.svg" alt="logo" class="logo-icon-6"/>
                    </div>
                    <div class="circle">
                        <img src="/src/assets/img/partner-7.svg" alt="logo" class="logo-icon-7"/>
                    </div>
                </div>
            </div>
          </div>
          <div class="partners-dude">
            <img src="/src/assets/img/boy-6.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.partners-wrapper {
  .partners-wrapp {

    .partners-header {
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
      }
    }
    .partners-mane {
      margin-top: 58px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .arch-wrapp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 0;
        .arch-1 {
            position: relative;
            width: clamp(430px, 90vw, 1054px);
            height: clamp(430px, 90vw, 741px);
            display: flex;
            flex-direction: column;
            .circle-wrapp-1,
            .circle-wrapp-2,
            .circle-wrapp-3,
            .circle-wrapp-4{
                position: absolute;
                display: flex;
                justify-content: space-between;
                width: 100%;
                z-index: 3;
                .circle{
                    position: relative;
                    width: 102px;
                    height: 102px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                    z-index: 3;
                    &::before{
                      content: '';
                      position: absolute;
                      width: 102px;
                      height: 102px; 
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background-image: url('/src/assets/img/circle-bg.png');
                      background-size: contain;
                      background-repeat: no-repeat;
                      background-position: center;
                      z-index: 2;
                    }
                    &:hover {
                        transform: scale(1.2);
                        &::before {
                            transform: translate(-50%, -50%) scale(1.2);
                        }
                        .logo-icon-1 {
                            filter: brightness(0) saturate(100%) invert(71%) sepia(76%) saturate(1355%) hue-rotate(171deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-2 {
                             filter: brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(1350%) hue-rotate(255deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-3 {
                             filter: brightness(0) saturate(100%) invert(45%) sepia(90%) saturate(1350%) hue-rotate(120deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-4 {
                             filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(3000%) hue-rotate(0deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-5 {
                            filter: brightness(0) saturate(100%) invert(80%) sepia(90%) saturate(2000%) hue-rotate(30deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-6 {
                             filter: brightness(0) saturate(100%) invert(71%) sepia(76%) saturate(1355%) hue-rotate(171deg) brightness(95%) contrast(101%);
                        }
                        .logo-icon-7 {
                             filter: brightness(0) saturate(100%) invert(71%) sepia(76%) saturate(1355%) hue-rotate(171deg) brightness(95%) contrast(101%);
                        }
                    }
                    img{
                        z-index: 3;
                    }
                }
            }
            .circle-wrapp-1{
                display: flex;
                justify-content: center;
                top: 15px;
            }
            .circle-wrapp-2{
                top: 85px;
                padding: 0 23%;
            }
            .circle-wrapp-3{
                top: 240px;
                padding: 0 8%;
            }
            .circle-wrapp-4{
                top: 440px;
                padding: 0 2%;
            }
        }
      }

      .partners-dude {
        position: absolute;
        top: 180px;
        width: 950px;
        height: 700px;
        z-index: 1;
        pointer-events: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
