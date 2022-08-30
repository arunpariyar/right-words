<template>
  <div class="finder">
    <input type="text" v-model="input" placeholder="Type Song" />
    <button type="button" @click.prevent="OnSongSubmit">🎤 Find My Song</button>
  </div>
</template>
<script>
import { useSongStore } from "@/stores/song";
export default {
  name: "Finder",
  input: "test",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    OnSongSubmit() {
      searchSong(this.input);
    },
  },
  setup() {
    const songStore = useSongStore();
    const { searchSong } = songStore;

    return {
      searchSong,
    };
  },
};
</script>
<style scoped>
.finder {
  margin-bottom: 20px;
}
</style>
