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
    }
  },
  sortById() {
    this.record.sort((music1, music2) => music1.id - music2.id)
  },
  sortByTitle() {
    this.record.sort((music1, music2) => music1.title(music2.title))
  },
  sortByArtist() {
    this.record.sort((music1, music2) => music1.artist(music2.artist))
  },
  sortByDuration() {
    this.record.sort((music1, music2) => music1.duration - music2.duration)
  },
  sortByPublicationYear() {
    this.record.sort((music1, music2) => music1.publicationYear - music2.publicationYear)
  },
  filterByTitle(title) {
    console.log("Title:" + title + ":")
    console.log("All records " + this.record)
    this.record = this.record.filter(b => b.title.includes(title))
    console.log("filtered records: " + this.record)
    }
}).mount("#app")