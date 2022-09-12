<template>
  <v-row justify="center">
    <img class="logo" src="../assets/images/Logo.png" alt="Logo" />
  </v-row>
</template>
<script>
export default {
  name: "Logo",
  data() {
    return {
      logo: "Right Words",
    };
  },
};
</script>
<style scoped>
.logo {
  margin: 3.5rem;
  height: 85px;
  width: 85px;
}
</style>
