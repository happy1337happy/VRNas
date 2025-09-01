<template>
    <section class="faq-wrapper">
        <div class="container">
            <div class="faq-wrapp">
                <div class="faq-head">
                    <span  data-aos="fade-up" data-aos-duration="1000">FAQ</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:</p>
                    <div class="accordion-filter" data-aos="fade-up" data-aos-duration="1000">
                        <MyButton 
                            @click="setCategory('All')" 
                            :class="{ active:selectedCategory === 'All'}"
                            :is-active="selectedCategory === 'All'"
                        >
                            All
                        </MyButton>
                        <MyButton 
                            @click="setCategory('VR Service')" 
                            :class="{ active:selectedCategory === 'VR Service'}"
                            :is-active="selectedCategory === 'VR Service'"
                        >
                            VR Service
                        </MyButton>
                        <MyButton 
                            @click="setCategory('Pricing')" 
                            :class="{ active:selectedCategory === 'Pricing'}"
                            :is-active="selectedCategory === 'Pricing'"
                        >
                            Pricing
                        </MyButton>
                    </div>
                </div>
                <accordion :items="filteredItems"></accordion>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import Accordion from '../ui/Accordion.vue';
    import MyButton from '../ui/MyButton.vue';


    const accordionItems = ref ([
    {
        title: 'What is virtual reality?',
        content:
        'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.',
        category: 'VR Service',
    },
    {
        title: 'What types of VR services do you offer?',
        content:
        'We offer a variety of VR services including interactive training modules, immersive education programs, virtual tours, product simulations, and entertainment experiences tailored to your specific goals.',
        category: 'VR Service',
    },
    {
        title: 'How much does your VR services cost?',
        content:
        'Our pricing depends on the scope and complexity of your project. We offer flexible packages for individuals, businesses, and institutions, ensuring affordability without compromising quality.',
        category: 'Pricing',
    },
    {
        title: 'What equipment do I need to use your VR services?',
        content:
        'To use our VR services, you typically need a VR headset (such as Oculus, HTC Vive, or others), a compatible device, and stable internet. For advanced solutions, we provide full setup and guidance.',
        category: 'VR Service',
    },
    {
        title: 'Can I try out your VR services before I commit?',
        content:
        'Yes, we offer free demos and trial experiences so you can explore our services firsthand. This allows you to evaluate the quality, usability, and immersion before making a commitment.',
        category: 'VR Service',
    },
    ]);

    const selectedCategory = ref('All');

    const setCategory = (category) => {
        selectedCategory.value = category;
    };

    const filteredItems = computed(() => {
        if(selectedCategory.value === 'All') return accordionItems.value;
        return accordionItems.value.filter((item) => item.category === selectedCategory.value);
    });

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.faq-wrapper {
  margin-top: 150px;
  overflow: hidden;
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
        text-align: center;
      }

      p {
        font-weight: 300;
        line-height: 28px;
        color: $grey-2;
        width: 65%;
        text-align: center;
      }
      .accordion-filter{
        margin-top: 32px;
        display: flex;
        gap: 25px;
      }
    }
  }
}
</style>