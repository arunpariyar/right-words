<template>
  <div class="info">
    <h2>Song Details</h2>
    <p>Title: {{ song.title }}</p>
    <p>Artist: {{ song.artist }}</p>
    <p>Album: {{ song.album }}</p>
  </div>
</template>
<script>
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
export default {
  name: "Info",
  setup() {
    const songStore = useSongStore();
    const { song } = storeToRefs(songStore);

    return {
      song,
    };
  },
};
</script>
<style scoped>
.info {
  margin-bottom: 20px;
}
</style>
