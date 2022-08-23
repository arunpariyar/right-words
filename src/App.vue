<template>
  <div class="container">
    <logo></logo>
    <finder></finder>
    <info :song="song"></info>
  </div>
</template>
<script>
import Logo from "./components/Logo.vue";
import Finder from "./components/Finder.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",
  components: {
    Logo,
    Finder,
    Info,
  },
  data() {
    return {
      song: {
        title: "This I Love",
        artist: "Guns & Roses",
        album: "Chinese Democracy",
      },
    };
  },
};
</script>
<style>
.container {
  width: 700px;
  margin: 15px auto;
  position: relative;
}
</style>
