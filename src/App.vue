<template>
  <div class="container">
    <logo></logo>
  </div>
</template>
<script>
import Logo from "./components/Logo.vue";

export default {
  name: "App",
  components: {
    Logo,
  },
};
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(228, 227, 227);
  color: rgb(22, 22, 22);
}
.container {
  width: 700px;
  margin: 15px auto;
  position: relative;
}
</style>
