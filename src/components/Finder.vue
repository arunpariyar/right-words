<template>
  <div class="finder">
    <v-container>
      <v-form>
        <v-row class="justify-center">
          <v-col md="6">
            <v-text-field v-model="qArtist" placeholder="Enter Artist" />
            <v-text-field
              v-model="qSong"
              placeholder="Enter Song"
              @enter.prevent="OnSongSubmit"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center mt-5">
          <v-btn
            class="search-btn"
            rounded
            size="x-large"
            @click.prevent="OnSongSubmit"
            >🎤 Find My Song</v-btn
          >
        </v-row>
      </v-form>
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

.search-btn {
  background-color: #430bb45c;
  color: white;
  text-transform: uppercase;

  font-size: 1.2rem;
  border: 3px solid #ffca1aab;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
