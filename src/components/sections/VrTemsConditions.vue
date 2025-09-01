<template>
    <section class="tems-wrapper">
        <div class="container">
            <div class="tems-wrapp">
                <div class="tems-head">
                    <span  data-aos="fade-up" data-aos-duration="1000">Tems & Conditions</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Terms and Conditions</h2>
                    <p class="head-p" data-aos="fade-up" data-aos-duration="1000">Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services.</p>
                </div>
                <div class="tems-main">
                    <h3 data-aos="fade-up" data-aos-duration="1000">Acceptance of Term</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Use of Website and Services</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services: </p>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                      <li>In any way that violates any applicable federal, state, local or international law or regulation.</li>
                      <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
                      <li>To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any other person or entity.</li>
                      <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm [Company Name] or users of the website or services or expose them to liability.</li>
                    </ul>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Intellectual Property</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of [Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use any of our content or materials for commercial purposes without obtaining a license to do so from [Company Name] or its licensors.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Limitation of Liability</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Changes to Terms and Conditions</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms..</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Contact Us</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.tems-wrapper {
  margin-top: 150px;
  overflow: hidden;
  .tems-wrapp {
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-weight: 300;
        line-height: 28px;
        color: $grey-2;
    }
    .tems-head {
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

      .head-p{
        width: 87%;
        text-align: center;
      }
    }
    .tems-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 66%;
      h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        margin-bottom: 16px;
        text-align: left;
        width: 100%;
        align-self: flex-start;
      }
      .main-p {
        width: 100%;
        margin-bottom: 32px;
        text-align: left;
      }
      ul {
        margin-top: -32px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        list-style: disc;
        margin-left: 45px;
        margin-bottom: 32px;
        width: 100%;
      }
      li {
        font-weight: 300;
        line-height: 28px;
        color: $grey-2;
        width: 100%;
      }
    }
  }
}
</style>