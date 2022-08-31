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
