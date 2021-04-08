var app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  mounted: function(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((risposta) =>{
      //console.log(risposta.data.response);
      this.albums = risposta.data.response;
    });
  }

});
