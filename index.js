const baseUrl = "https://dkrrest.azurewebsites.net/api/MusicRs"

Vue.createApp({
  data() {
    return {
      record: [],
      title: null
    }
  },
  async created() {
    this.getAll(baseUrl)
  },
  methods: {
    async getAll(url) {
        try {
            const response = await axios.get(url)
            this.record = await response.data
            console.log(this.record)
        } catch (ex) {
            alert(ex.message)
        }
    },
    filterByTitle() {
      const filtered = this.record.filter(music => {
        return music.title.toLowerCase().includes(this.title.toLowerCase());
      });
      this.record = filtered;
    },
    sortById() {
      this.record.sort((music1, music2) => music1.id - music2.id);
    },
    sortByTitle() {
      this.record.sort((music1, music2) => music1.title.localeCompare(music2.title));
    },
    sortByArtist() {
      this.record.sort((music1, music2) => music1.artist.localeCompare(music2.artist));
    },
    sortByDuration() {
      this.record.sort((music1, music2) => music1.duration - music2.duration);
    },
    sortByPublicationYear() {
      this.record.sort((music1, music2) => music1.publicationYear - music2.publicationYear);
    },
  },
}).mount("#app");