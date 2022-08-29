<template>
  <v-app>
    <v-main>
      <v-container>
        <logo></logo>
        <finder @song-submit="updateQuery"></finder>
        <info :song="song"></info>
        <lyrics :song="song" :searchQuery="searchQuery"></lyrics>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "./components/Logo.vue";
import Finder from "./components/Finder.vue";
import Info from "./components/Info.vue";
import Lyrics from "./components/Lyrics.vue";

export default {
  name: 'App',

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
      searchQuery: "test",
    };
  },
  methods: {
    updateQuery(song) {
      this.searchQuery = song;
    },
  },
};
</script>
