<template>
  <div class="info">
    <h2>Song Details</h2>
    <p>Title: {{ song.title }}</p>
    <p>Artist: {{ song.artist }}</p>
    <p>Album: {{ song.album }}</p>
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
