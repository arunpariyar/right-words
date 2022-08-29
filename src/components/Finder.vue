<template>
  <div class="finder">
    <input type="text" v-model="input" placeholder="Type Song" />
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
      input: "",
    };
  },
  methods: {
    OnSongSubmit() {
      this.$emit("song-submit", this.input);
    },
  },
};
</script>
<style scoped>
.finder {
  margin-bottom: 20px;
}
</style>
