
<script setup>
import { isVirtuesOfTheVileReleased } from '../functions';
</script>
<template>
  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="about-info">
            <h2 class="text-white mb-4">About Release the River</h2>

            <p class="text-white">
              An unrelenting powertrio rising from the depths of medieval Leiden
              poised to redefine the landscape of blackened deathmetal. With a
              mere of three souls they stand as a powerhouse crafting colossal
              walls of sound and bringing forth musical tempests.
            </p>

            <p class="text-white">
              A fusion of metal music. Release the River fuses the fiery
              rhythmic power of deathmetal and hardcore with the haunting
              atmosphere and blastbeats from the Nordic realms of blackmetal.
            </p>

            <p v-if=isVirtuesOfTheVileReleased class="text-white">
              RELEASE THE RIVER unleashed their debut full-length album,
              'Virtues of the Vile', in September 2024. This release stands as a
              testament to the strength found in the unholy trinity of their
              musical communion. Dive into the abyss with us and explore the
              vile tendencies of humanity on earth.
            </p>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img
              src="../../images/band.jpg"
              class="about-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
