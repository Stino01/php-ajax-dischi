var app = new Vue({
    el: '#app',
    data: {
      dischi: [],
      apiPath:'./server.php',
    },
    methods: {

    },
    mounted() {
        axios.get(this.apiPath).then((res) => {
            this.dischi = res.data;
        })
    }
  })