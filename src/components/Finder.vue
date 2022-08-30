<template>
  <div class="finder">
    <input type="text" v-model="input" placeholder="Type Song" />
    <button type="button" @click.prevent="onSongSubmit">🎤 Find My Song</button>
  </div>
</template>
<script>
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
export default {
  name: "Finder",
  input: "test",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    // OnSongSubmit() {
    //   this.song.searchQuery = this.input;
    //   this.songStore.searchSong(this.input);
    // },
  },
  setup() {
    const songStore = useSongStore();
    const { song } = storeToRefs(songStore);
    const { searchSong } = songStore;

    return {
      song,
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
