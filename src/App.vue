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
      searchArtist: "",
      searchSong: "",
    };
  },
  methods: {
    async updateQuery(qArtist, qSong) {
      try {
        //getting the artist and song name to search from the finder
        this.searchSong = qSong;
        this.searchArtist = qArtist;

        const testArtist = "U2";
        const testSong = "beautiful day";

        console.log(this.searchArtist, this.searchSong);
        // const res = await fetch(
        //   "https://private-anon-18345d477a-lyricsovh.apiary-mock.com/v1/Coldplay/Adventure%20of%20a%20Lifetime"
        // );

        // const res = await fetch(
        //   "http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=1710&lyricCheckSum=b6d42dee5adafc97b7c0247a5740c57f"
        // );

        // const res = await fetch(
        //   `http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${qArtist}&song=${qSong}`
        // );

        const res = await fetch(
          `http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=${testArtist}&song=${testSong}`
        );
        // Michael Mittermeier

        const body = await res.text();
        const x2js = new X2js();
        const json = x2js.xml2js(body);
        const songArray = json.ArrayOfSearchLyricResult.SearchLyricResult;
        const songColl = [];
        // console.log(songArray);
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

        // console.log(songColl);

        //loop through the songCollection and check if the songs name and artist match to make the lyric other pass a message lyrics not found
        let finalSong = {};
        for (let song of songColl) {
          // console.log(song.title);
          if (song.title.toLowerCase() == testSong.toLowerCase()) {
            finalSong = song;
          }
        }

        console.log(finalSong);

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
