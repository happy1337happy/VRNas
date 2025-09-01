<template>
    <section class="faq-wrapper">
        <div class="background-light"></div>
        <div class="container">
            <div class="faq-wrapp">
                <div class="faq-head">
                    <span  data-aos="fade-up" data-aos-duration="1000">FAQ</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
                </div>
                <accordion :items="accordionItems"></accordion>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Accordion from '../ui/Accordion.vue';

    const accordionItems = [
    {
        title: 'What is virtual reality?',
        content:
        'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.',
    },
    {
        title: 'What types of VR services do you offer?',
        content:
        'We offer a variety of VR services including interactive training modules, immersive education programs, virtual tours, product simulations, and entertainment experiences tailored to your specific goals.',
    },
    {
        title: 'How much does your VR services cost?',
        content:
        'Our pricing depends on the scope and complexity of your project. We offer flexible packages for individuals, businesses, and institutions, ensuring affordability without compromising quality.',
    },
    {
        title: 'What equipment do I need to use your VR services?',
        content:
        'To use our VR services, you typically need a VR headset (such as Oculus, HTC Vive, or others), a compatible device, and stable internet. For advanced solutions, we provide full setup and guidance.',
    },
    {
        title: 'Can I try out your VR services before I commit?',
        content:
        'Yes, we offer free demos and trial experiences so you can explore our services firsthand. This allows you to evaluate the quality, usability, and immersion before making a commitment.',
    },
    ];

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.faq-wrapper {
  margin-top: 150px;
  overflow: hidden;
    .background-light{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 454px;
            height: 200px;
            top: 110px;
            right: 20px;
            background: linear-gradient(25.54deg, rgba(28, 196, 249, 0.8) 0.72%, rgba(254, 105, 254, 0.8) 70%);
            border-radius: 50%;
            z-index: -1;
            filter: blur(60px);
            opacity: .6;
            pointer-events: none;
            rotate: -10deg;
        }
    }
  .faq-wrapp {
    display: flex;
    flex-direction: column;
    align-items: center;

    .faq-head {
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
        margin-bottom: 24px;
      }

      p {
        font-weight: 300;
        line-height: 28px;
        color: $grey-2;
        width: 65%;
        text-align: center;
      }
    }

    .accordion {
      width: 100%;
      max-width: 790px;
      margin-bottom: 150px;

      .accordion-item {
        margin-bottom: 48px;
        background-color: rgba(37, 37, 50, 0.81);
        border: 1px solid transparent;
        border-image-source: linear-gradient(
          94.92deg,
          rgba(255, 255, 255, 0.3) -0.29%,
          rgba(255, 255, 255, 0) 100%
        );
        border-image-slice: 1;
        padding: 24px;
        &.active {
          border-image-source: linear-gradient(-45deg, #ff00ff, #00ffff);
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          h3 {
            font-weight: 500;
            font-size: 20px;
            line-height: 100%;
          }

          .arrow {
            width: 6px;
            height: 3.5px;
            transition: transform 0.3s ease;
            transform: rotate(0deg);

            &.active {
              transform: rotate(180deg);
            }
          }
        }

        .accordion-content {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s ease-in-out;
          position: relative;

          &::before {
            content: '';
            display: block;
            height: 24px;
            transform: scaleY(0);
            transition: transform 0.3s ease;
          }

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.35);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }

          &.active {
            max-height: 300px;

            &::before {
              transform: scaleY(1);
            }

            &::after {
              transform: scaleX(1);
            }
          }

          p {
            font-weight: 400;
            line-height: 28px;
            color: $grey-2;
          }
        }
      }
    }
  }
}
</style>