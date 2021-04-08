var app = new Vue({
  el: '#app',
  data: {
    albums: [],
    genres: [],
    selectGenre: '',
  },
  mounted: function(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((risposta) =>{
      //console.log(risposta.data.response);
      this.albums = risposta.data.response;
      // bonus 1 inserisco i generi in array da inserire nella select
      this.albums.forEach((item) => {
        if(!this.genres.includes(item.genre)){
          this.genres.push(item.genre);
        }
      });
      // console.log(this.genres);
      // bonus 2 ordino gli album in base all'anno di uscita
      this.albums.sort((old, recent) =>{
        return old.year - recent.year;
      });

    });
  },

});
