<template>
  <div class="info">
    <v-container>
      <v-row class="justify-center">
        <v-col md="6">
          <v-row class="ma-2 lyrics-info justify-center">
            <p>{{ song.title }}</p>
          </v-row>
          <v-row class="ma-2 lyrics-info justify-center">
            <p>{{ song.artist }}</p>
          </v-row>
          <v-row class="ma-2 lyrics justify-center">
            <p v-html="song.lyrics"></p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: ["song"],
  date() {
    return {};
  },
};
</script>
<style scoped>
.lyrics-info {
  font-size: x-large;
  font-weight: bolder;
}
.lyrics {
  font-size: 1.2rem;
  line-height: 1.7;
}
</style>
