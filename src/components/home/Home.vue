<script setup>
import { ref } from "vue";

const password = ref("");
const isPasswordCorrect = ref(false);
const errorMessage = ref("");

const correctPassword = "enthralled";
const downloadLink = ref("");

const checkPassword = async () => {
  if (password.value === correctPassword) {
    isPasswordCorrect.value = true;
    fetchDownloadLink();
    errorMessage.value = ""; // Clear any previous error message
  } else {
    errorMessage.value = "Incorrect password. Please try again.";
  }
};

const fetchDownloadLink = () => {
  //I tried something nice here but workers sure are a bitch.
  downloadLink.value  = 'https://sg6tfyvvlkcj2rctwlqbudicjbyvryl27n6.releasetheriver.com/presskit.zip'
};
</script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-12 mt-auto mb-5 text-center">
          <img
            src="../../images/logo.svg"
            alt="Release the River logo"
            class="img-fluid mb-2 logo-img"
          />
          <h1 class="text-white mb-3">Presskit</h1>
          <p class="text-white mt-3">
            In this presskit you will find the band's biography, music, visuals,
            and more.
          </p>

          <div v-if="!isPasswordCorrect">
            <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
            <form @submit.prevent="checkPassword">
              <input
                type="password"
                v-model="password"
                placeholder="Enter password"
                class="form-control mb-2"
                autocomplete="new-password"
              />
              <button type="submit" class="btn btn-lg custom-btn-lg">
                Submit
              </button>
            </form>
          </div>

          <a
            v-if="isPasswordCorrect"
            class="btn btn-lg custom-btn-lg"
            :href="downloadLink"
            download
          >
            <i class="me-2 bi bi-download"></i> Download Presskit
          </a>
        </div>

        <div
          class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center align-items-center justify-content-center"
        >
          <div class="social-share">
            <ul
              class="social-icon d-flex align-items-center justify-content-center"
            >
              <li class="social-icon-item">
                <a
                  href="https://www.instagram.com/releasetheriverofficial/"
                  class="social-icon-link"
                >
                  <span class="bi-instagram"></span>
                </a>
              </li>
              <li class="social-icon-item">
                <a
                  href="https://www.facebook.com/Releasetheriver"
                  class="social-icon-link"
                >
                  <span class="bi-facebook"></span>
                </a>
              </li>
              <li class="social-icon-item">
                <a
                  href="https://linktr.ee/releasetheriver"
                  class="social-icon-link"
                >
                  <span class="bi-globe2"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form-control {
  max-width: 300px;
  margin: 0 auto;
}

.custom-btn-lg {
  margin-top: 10px;
}
</style>
