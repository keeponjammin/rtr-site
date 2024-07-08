<script setup>
const events = [
  {
    date: "2025-04-01",
    title: "Spring Festival",
    secondTitle: "Celebration of Nature",
    thirdTitle: "Outdoor Activities",
    urlTitle: "Spring Festival Details",
    url: "https://example.com/spring-festival",
  },
  {
    date: "2025-06-15",
    title: "Summer Solstice",
    secondTitle: "Longest Day Party",
    thirdTitle: "Beach Bonfire",
    urlTitle: "Summer Solstice Information",
    url: "https://example.com/summer-solstice",
  },
  {
    date: "2025-10-31",
    title: "Halloween Bash",
    secondTitle: "Costume Contest",
    thirdTitle: "Haunted House",
    urlTitle: "Halloween Bash Details",
    url: "https://example.com/halloween-bash",
  },
  {
    date: "2025-12-25",
    title: "Christmas Gala",
    secondTitle: "Gift Exchange",
    thirdTitle: "Christmas Carols",
    urlTitle: "Christmas Gala Information",
    url: "https://example.com/christmas-gala",
  },
];

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based.
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getFutureEvents = () => {
  return events
    .filter((event) => event.date >= getCurrentDate())
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

const getPastEvents = () => {
  return events.filter((event) => event.date < getCurrentDate());
};
</script>

<template>
  <section class="schedule-section section-padding" id="section_4">
    <div class="container">
      <div class="row mb-4">
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
                <tr v-for="futureEvent in getFutureEvents()">
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
                        {{ futureEvent.thirdTitle }}
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
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
                <tr v-for="pastEvent in getPastEvents()">
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
