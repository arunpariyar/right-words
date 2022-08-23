<template>
  <div>
    <h2 class="logo">{{ logo }}</h2>
  </div>
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
  color: orangered;
  margin-bottom: 40px;
}
</style>
