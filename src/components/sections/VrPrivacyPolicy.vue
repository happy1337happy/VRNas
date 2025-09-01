<template>
    <section class="privacy-wrapper">
        <div class="container">
            <div class="privacy-wrapp">
                <div class="privacy-head">
                    <span  data-aos="fade-up" data-aos-duration="1000">Privacy Policy</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Privacy Policy</h2>
                    <p class="head-p" data-aos="fade-up" data-aos-duration="1000">This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of our website visitors and customers.</p>
                </div>
                <div class="privacy-main">
                    <h3 data-aos="fade-up" data-aos-duration="1000">We may collect the following types of personal information:</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services: </p>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                      <li>Name, email address, and other contact information.</li>
                      <li>Demographic information such as age, gender, and location.</li>
                      <li>Payment information such as credit card detailsli</li>
                      <li>Information about how you use our website and services.</li>
                    </ul>
                    <h3 data-aos="fade-up" data-aos-duration="1000">How We Use Your Information</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We may use your personal information for the following purposes:</p>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                      <li>To provide you with our services and products.</li>
                      <li>To process payments and fulfill orders.</li>
                      <li>To send you marketing and promotional materials.</li>
                      <li>To improve our website and services.</li>
                    </ul>
                    <h3 data-aos="fade-up" data-aos-duration="1000">How We Protect Your Information</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Information Sharing</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Cookies and Tracking</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Your Rights</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Changes to Privacy Policy</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Contact Us</h3>
                    <p class="main-p" data-aos="fade-up" data-aos-duration="1000">If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.privacy-wrapper {
  margin-top: 150px;
  overflow: hidden;
  .privacy-wrapp {
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-weight: 300;
        line-height: 28px;
        color: $grey-2;
    }
    .privacy-head {
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
    .privacy-main {
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