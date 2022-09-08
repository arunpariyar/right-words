<template>
  <div class="info">
    <v-container>
      <v-row class="justify-center">
        <v-col md="6">
          <v-row class="ma-2">
            <p>Title: {{ song.title }}</p>
          </v-row>
          <v-row class="ma-2">
            <p>Artist: {{ song.artist }}</p>
          </v-row>
          <v-row class="ma-2">
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
.info {
  margin-bottom: 20px;
}
</style>
