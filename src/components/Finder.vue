<template>
  <div class="finder">
    <v-text-field type="text" v-model="input"/>
    <v-btn type="button" @click.prevent="OnSongSubmit">🎤 Find My Song</v-btn>
  </div>
</template>
<script>
export default {
  name: "Finder",
  input: "test",
  emits: ["song-submit"],
  data() {
    return {
      input: "Type Song Title",
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
