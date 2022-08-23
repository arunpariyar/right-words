<template>
  <hr />
  <p>{{ searchQuery }}</p>
  <div class="lyrics">
    <p>{{ song.lyrics }}</p>
  </div>
  <hr />
</template>
<script>
export default {
  name: "Lyrics",
  props: ["song", "searchQuery"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.lyrics {
  margin: 40px 0;
}
</style>
