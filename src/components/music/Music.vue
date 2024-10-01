<script setup>
import { isVirtuesOfTheVileReleased } from "../functions";
</script>
<template>
  <section class="music-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="mb-4">Releases</h2>
        </div>

        <div v-if="isVirtuesOfTheVileReleased" class="col-lg-4 col-12">
          <div class="music-thumb">
            <div class="music-image-wrap">
              <img
                src="../../images/music/virtuesofthevile.jpg"
                class="music-image img-fluid"
              />
            </div>

            <div class="music-hover">
              <p>
                <strong>Name:</strong>
                Virtues of the Vile
              </p>

              <p>
                <strong>Release date:</strong>
                25th of September 2024
              </p>

              <p>
                <strong>Type:</strong>
                Full length album
              </p>

              <hr />

              <p class="mb-0">
                <strong>Available on:</strong>
                <a href="https://distrokid.com/hyperfollow/releasetheriver/virtues-of-the-vile">All major streaming platforms</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="music-thumb">
            <div class="music-image-wrap">
              <img
                src="../../images/music/enthralled.jpg"
                class="music-image img-fluid"
              />
            </div>

            <div class="music-hover">
              <p>
                <strong>Name:</strong>
                Enthralled
              </p>

              <p>
                <strong>Release date:</strong>
                24th of April 2024
              </p>

              <p>
                <strong>Type:</strong>
                Single
              </p>

              <hr />

              <p class="mb-0">
                <strong>Available on:</strong>
                <a href="https://open.spotify.com/album/1V94GzoWWJfuTq1FSloTJW"
                  >All major streaming platforms</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="music-thumb">
            <div class="music-image-wrap">
              <img
                src="../../images/music/darkmirrorofthesoul.jpg"
                class="music-image img-fluid"
              />
            </div>

            <div class="music-hover">
              <p>
                <strong>Name:</strong>
                Dark Mirror of the Soul
              </p>

              <p>
                <strong>Release date:</strong>
                31st of August 2023
              </p>

              <p>
                <strong>Type:</strong>
                Single
              </p>

              <hr />

              <p class="mb-0">
                <strong>Available on:</strong>
                <a href="https://open.spotify.com/album/3mBFwy4IUbQzBQt1zsvy69"
                  >All major streaming platforms</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="music-thumb">
            <div class="music-image-wrap">
              <img
                src="../../images/music/spiritcorrupt.jpg"
                class="music-image img-fluid"
              />
            </div>

            <div class="music-hover">
              <p>
                <strong>Name:</strong>
                Spirit Corrupt
              </p>

              <p>
                <strong>Release date:</strong>
                11th of February 2022
              </p>

              <p>
                <strong>Type:</strong>
                Extended play
              </p>

              <hr />

              <p class="mb-0">
                <strong>Available on:</strong>
                <a href="https://open.spotify.com/album/1IIDp4ihjJZ8sy4RUQjP5I"
                  >All major streaming platforms</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="music-thumb">
            <div class="music-image-wrap">
              <img
                src="../../images/music/frostgod.jpg"
                class="music-image img-fluid"
              />
            </div>

            <div class="music-hover">
              <p>
                <strong>Name:</strong>
                Frost god
              </p>

              <p>
                <strong>Release date:</strong>
                26th of February 2021
              </p>

              <p>
                <strong>Type:</strong>
                Single
              </p>

              <hr />

              <p class="mb-0">
                <strong>Available on:</strong>
                <a href="https://releasetheriver.bandcamp.com/track/frost-god"
                  >Bandcamp</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
