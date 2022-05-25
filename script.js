var app = new Vue({
    el: '#app',
    data: {
      dischi: [],
      genres: [],
      apiPath:'./server.php',
    },
    methods: {

    },
    mounted() {
        axios.get(this.apiPath).then((res) => {
            this.dischi = res.data;
            this.dischi.forEach((genr) => {
              if(!this.genres.includes(genr.genre)) {
                this.genres.push(genr.genre);
              }
            });
        })
    }
  })