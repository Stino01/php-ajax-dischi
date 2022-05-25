var app = new Vue({
    el: '#app',
    data: {
      dischi: [],
      genres: [],
      selectGenre: '',
      apiPath:'./server.php',
    },
    methods: {
      search() {
        this.getData(this.selectGenre);
      },
      getData(genere=null) {
        let path;
        if(genere) {
          path = this.apiPath + '?genre=' + genere;
        } else {
          path = this.apiPath;
        }
        axios.get(path).then((res) => {
          this.dischi = res.data;
          if(this.genres.length < 1) {
            this.dischi.forEach((genr) => {
              if(!this.genres.includes(genr.genre)) {
                this.genres.push(genr.genre);
              }
            });
          }
        })
      },
    },
    mounted() {
        this.getData(this.selectGenre);
    }
  })