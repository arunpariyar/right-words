<template>
  <div class="info">
    <v-container class="">
      <v-row align="start">
        <v-col cols="3">
          <v-sheet class="">Search Results</v-sheet>
          <!-- //turn this into a component-->
        </v-col>
        <v-col cols="6">
          <v-row class="ma-1">
            <p class="font-weight-medium">Song Details</p>
          </v-row>
          <v-row class="ma-1">
            <p>Title: {{ song.title }}</p>
          </v-row>
          <v-row class="ma-1">
            <p>Artist: {{ song.artist }}</p>
          </v-row>
          <v-row class="ma-1">
            <p>Album: {{ song.album }}</p>
          </v-row>
          <v-row class="ma-1">
            <p class="font-weight-medium">Lyrics:</p>
            <p>{{ song.lyrics }}</p>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-sheet class="">Saved</v-sheet>
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
.info {
  margin-bottom: 20px;
}
</style>
