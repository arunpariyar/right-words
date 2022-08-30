import { defineStore } from "pinia";

export const useSongStore = defineStore({
  id: "song",
  state: () => ({
    song: {
      title: "This I Love",
      artist: "Guns & Roses",
      album: "Chinese Democracy",
      lyrics: `And now I dont know why
      your wouldnt say goodbye
      It just might be that I
      Have seen in your eyes`,
      // searchQuery: "",
    },
    getters: {},
    actions: {
      async searchSong(song) {
        try {
          // this.searchQuery = song;
          const res = await fetch(
            "https://private-anon-18345d477a-lyricsovh.apiary-mock.com/v1/Coldplay/Adventure%20of%20a%20Lifetime"
          );

          const data = await res.json();
          console.log(song, data);
          if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        } catch (err) {
          console.log(err);
        }
      },
    },
  }),
});
