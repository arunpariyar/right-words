<template>
  <div class="finder">
    <input type="text" v-model="qArtist" placeholder="Enter Artist" />
    <input type="text" v-model="qSong" placeholder="Enter Song" />
    <button type="button" @click.prevent="OnSongSubmit">🎤 Find My Song</button>
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
