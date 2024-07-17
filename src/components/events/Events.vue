<script setup>
import { computed } from "vue";

const events = [
  {
    date: "2024-09-27",
    title: "Release the River Album Release Show",
    secondTitle: "With Black Rabbit and Beyond the Pale",
    thirdTitle: "",
    urlTitle: "Nobel, Leiden",
    urlSubtitle: "Buy tickets here",
    url: "https://nobel.nl/programma/release-the-river-albumpresentatie-27-sep-2024/",
  },
  {
    date: "2024-10-12",
    title: "Clubshow",
    secondTitle: "With Epistulum and Defazer",
    thirdTitle: "",
    urlTitle: "Latenstaan, Zoetermeer",
    urlSubtitle: "More info here",
    url: "https://www.facebook.com/Latenstaan/events",
  },
  {
    date: "2024-10-26",
    title: "Clubshow",
    secondTitle: "With Defazer and Rages of Sin",
    thirdTitle: "",
    urlTitle: "The Cave, Amsterdam",
    urlSubtitle: "More info here",
    url: "https://www.thecaveamsterdam.nl/",
  },
  {
    date: "2024-12-07",
    title: "Clubshow",
    secondTitle: "",
    thirdTitle: "",
    urlTitle: "DB's, Utrecht",
    urlSubtitle: "Buy tickets here",
    url: "https://www.dbstudio.nl/",
  },
  {
    date: "2025-03-15",
    title: "March of the Black Horse indoor festival",
    secondTitle: "",
    thirdTitle: "",
    urlTitle: "Roosendaal",
    urlSubtitle: "Buy tickets here",
    url: "https://www.dbstudio.nl/",
  },
  {
    date: "2025-08-16",
    title: "Triple Threat Metalfest",
    secondTitle: "",
    thirdTitle: "",
    urlTitle: "Megaland, Landgraaf",
    urlSubtitle: "TBA",
    url: "",
  },
];

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based.
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const futureEvents = computed(() => {
  return events
    .filter((event) => event.date >= getCurrentDate())
    .sort((a, b) => new Date(a.date) - new Date(b.date));
});

const pastEvents = computed(() => {
  return events.filter((event) => event.date < getCurrentDate());
});

const hasFutureEvents = computed(() => futureEvents.value.length > 0);
const hasPastEvents = computed(() => pastEvents.value.length > 0);
</script>

<template>
  <section class="schedule-section section-padding" id="section_4">
    <div class="container">
      <div v-if="hasFutureEvents" class="row mb-4">
        <div class="col-12 text-center">
          <h2 class="text-white mb-4">Upcoming events</h2>

          <div class="table-responsive">
            <table class="schedule-table table table-dark">
              <thead>
                <tr>
                  <th scope="col">When</th>

                  <th scope="col">Where</th>

                  <th scope="col">Tickets</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="futureEvent in futureEvents">
                  <th scope="row">
                    {{ new Date(futureEvent.date).toLocaleDateString("nl-NL") }}
                  </th>

                  <td class="">
                    <h3>{{ futureEvent.title }}</h3>

                    <p class="mb-2">{{ futureEvent.secondTitle }}</p>

                    <p>{{ futureEvent.thirdTitle }}</p>
                  </td>
                  <td class="">
                    <p class="mb-2">{{ futureEvent.urlTitle }}</p>

                    <p>
                      <a
                        :href="futureEvent.url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-link-45deg"></i>
                        {{ futureEvent.urlSubtitle }}
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div v-if="hasPastEvents" class="row">
        <div class="col-12 text-center">
          <h2 class="text-white mb-4">Past events</h2>

          <div class="table-responsive">
            <table class="schedule-table table table-dark">
              <thead>
                <tr>
                  <th scope="col">When</th>

                  <th scope="col">Where</th>

                  <th scope="col">Tickets</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="pastEvent in pastEvents">
                  <th scope="row">
                    {{ new Date(pastEvent.date).toLocaleDateString("nl-NL") }}
                  </th>

                  <td class="">
                    <h3>{{ pastEvent.title }}</h3>

                    <p class="mb-2">{{ pastEvent.secondTitle }}</p>

                    <p>{{ pastEvent.thirdTitle }}</p>
                  </td>
                  <td class="">
                    <p class="mb-2">{{ pastEvent.urlTitle }}</p>

                    <p>
                      <a
                        :href="pastEvent.url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-link-45deg"></i>
                        {{ pastEvent.thirdTitle }}
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
