<template>
  <v-app>
    <v-main>
      <v-container>
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
        title: "This I Love",
        artist: "Guns & Roses",
        album: "Chinese Democracy",
        lyrics: " Test Lyrics",
        checksum: "",
        id: 101,
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

        console.log();

        // console.log(this.searchArtist, this.searchSong);

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

          finalResult = json.GetLyricResult;

          this.song.title = finalResult.LyricSong;
          this.song.id = finalResult.LyricId;
          this.song.artist = finalResult.LyricArtist;
          this.song.lyrics = finalResult.Lyric;
        }

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
