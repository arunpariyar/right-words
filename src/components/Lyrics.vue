<template>
  <hr />
  <p>{{ song.searchQuery }}</p>
  <div class="lyrics">
    <p>{{ song.lyrics }}</p>
  </div>
  <hr />
</template>
<script>
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
export default {
  name: "Lyrics",
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
.lyrics {
  margin: 40px 0;
}
</style>
