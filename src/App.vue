<template>
  <v-app id="app">
    <v-main>
      <v-container class="app-container">
        <v-row><logo></logo></v-row>
        <v-col><finder @song-submit="updateQuery"></finder></v-col>
        <info :song="song"></info>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Logo from "./components/Logo.vue";
import Finder from "./components/Finder.vue";
import Info from "./components/Info.vue";
import X2js from "x2js";

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
        title: "",
        artist: "",
        album: "",
        lyrics: "",
        checksum: "",
        id: null,
      },
      searchArtist: "",
      searchSong: "",
    };
  },
  methods: {
    async updateQuery(qArtist, qSong) {
      try {
        //getting the artist and song name to search from the finder
        let finalSong = {};
        let finalResult = {};
        this.searchSong = qSong;
        this.searchArtist = qArtist;

        const res = await fetch(
          `http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=${qArtist}&song=${qSong}`
        );

        const body = await res.text();
        const x2js = new X2js();
        const json = x2js.xml2js(body);
        const songArray = json.ArrayOfSearchLyricResult.SearchLyricResult;
        const songColl = [];

        songArray.forEach((array) => {
          const songInfo = {};
          if (array.Artist != undefined && array.LyricId != 0) {
            songInfo.artist = array.Artist;
            songInfo.title = array.Song;
            songInfo.id = array.LyricId;
            songInfo.checksum = array.LyricChecksum;
            songColl.push(songInfo);
          }
        });

        //loop through the songCollection and check if the songs name and artist match to make the lyric other pass a message lyrics not found
        for (let song of songColl) {
          // console.log(song.title);
          if (song.title.toLowerCase() == qSong.toLowerCase()) {
            finalSong = song;
          }
        }
        //once the final song has data then to make the call for getting the lyrics
        if (finalSong.artist) {
          const res = await fetch(
            `http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=${finalSong.id}&lyricCheckSum=${finalSong.checksum}`
          );
          const body = await res.text();
          const x2js = new X2js();
          const json = x2js.xml2js(body);

          //assign the final result
          finalResult = json.GetLyricResult;

          console.log(finalResult);
          debugger;

          this.song.title = finalResult.LyricSong;
          this.song.id = finalResult.LyricId;
          this.song.artist = finalResult.LyricArtist;
          this.song.lyrics = finalResult.Lyric.replaceAll("\r", "<br/>");
          console.log(this.song.lyrics);
        }

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.app-container {
  background-size: cover;
  border-radius: 20px;
  min-height: 80%;
  margin: auto auto;
  box-shadow: 5px 5px 200px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 7rem auto;
  color: white;
}
#app {
  background: linear-gradient(
    109.69deg,
    rgba(255, 211, 25, 0.94) 8.14%,
    rgba(255, 144, 31, 0.93) 38.94%,
    rgba(255, 41, 117, 0.9) 74.6%,
    rgba(140, 30, 255, 0.75) 108.64%
  );
}
</style>
