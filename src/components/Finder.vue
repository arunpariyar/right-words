<template>
  <div class="finder">
    <v-container>
      <v-row class="justify-center">
        <v-col md="6">
          <v-text-field v-model="qArtist" placeholder="Enter Artist" />
          <v-text-field v-model="qSong" placeholder="Enter Song" />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-btn
          class="pa-6"
          color="success"
          type="button"
          @click.prevent="OnSongSubmit"
          >🎤 Find My Song</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Finder",
  input: "test",
  emits: ["song-submit"],
  data() {
    return {
      qArtist: "",
      qSong: "",
    };
  },
  methods: {
    OnSongSubmit() {
      this.$emit("song-submit", this.qArtist, this.qSong);
    },
  },
};
</script>
<style scoped>
.finder {
  margin-bottom: 20px;
}
</style>
