<template>
  <div class="container">
    <logo></logo>
    <finder @song-submit="updateQuery"></finder>
    <info :song="song"></info>
    <lyrics :song="song" :searchQuery="searchQuery"></lyrics>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Finder from "./components/Finder.vue";
import Info from "./components/Info.vue";
import Lyrics from "./components/Lyrics.vue";
import X2js from "x2js";

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
        // const res = await fetch(
        //   "https://private-anon-18345d477a-lyricsovh.apiary-mock.com/v1/Coldplay/Adventure%20of%20a%20Lifetime"
        // );

        const res = await fetch(
          "http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=1710&lyricCheckSum=b6d42dee5adafc97b7c0247a5740c57f"
        );

        const body = await res.text();
        const x2js = new X2js();
        const json = x2js.xml2js(body);
        console.log(json.GetLyricResult.Lyric, this.searchQuery);

        // const data = await res.json();

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
