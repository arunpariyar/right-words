<template>
  <div class="container">
    <logo></logo>
    <finder></finder>
    <info></info>
    <lyrics></lyrics>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Finder from "./components/Finder.vue";
import Info from "./components/Info.vue";
import Lyrics from "./components/Lyrics.vue";

export default {
  name: "App",
  components: {
    Logo,
    Finder,
    Info,
    Lyrics,
  },
  data() {
    return {
      song: {
        title: "This I Love",
        artist: "Guns & Roses",
        album: "Chinese Democracy",
        lyrics: `And now I dont know why
        your wouldnt say goodbye
        It just might be that I
        Have seen in your eyes`,
      },
      searchQuery: "",
    };
  },
  methods: {
    async updateQuery(song) {
      try {
        this.searchQuery = song;
        const res = await fetch(
          "https://private-anon-18345d477a-lyricsovh.apiary-mock.com/v1/Coldplay/Adventure%20of%20a%20Lifetime"
        );
        const data = await res.json();
        console.log(data, this.searchQuery);
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      } catch (err) {
        console.log(err);
      }
      //change this and make an api call here

      //make an api call here
    },
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
