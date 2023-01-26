<template>
    <div id="app">
       
      <img
        src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
        width="200"
        alt="Logo"
      />
      <CinemaList :cinemas="this.cinema" />
    </div>
  </template>
  
  <script>
    import { mapActions, mapState, mapMutations } from 'vuex';
    import Header from '@/components/Header.vue'
    import GenreList from '@/components/GenreList.vue'
    import MovieList from '@/components/MovieList.vue'
    import CinemaList from '@/components/CinemaList.vue'
    import BroadcastList from '@/components/BroadcastList.vue'
  import router from '@/router';
  import { computed } from 'vue';
  
    export default {
      name: 'Cinema',
      
  
  
  
      components: {
        Header,
        GenreList,
        MovieList,
        CinemaList,
        BroadcastList,

      },
      methods:{
  
  ...mapActions([
  'fetchGenre',
  'fetchDimension',
  'fetchMovie',
  'fetchCinema',
  'fetchBroadcast',
  
  ]),
  /*
  onclick(name){
  this.$router.push({name:name}),
  
  
  }
  */
  ...mapMutations([
          'setGenre',
          'setDimension',
          'setMovie',
          'setCinema',
          'setBroadcast',
        ]),
      },
  computed:{
  ...mapState([
  'genre',
  'dimension',
  'movie',
  'cinema',
  'broadcast',
  
  ])
  
  },
  
  mounted(){
    this.fetchDimension();
    this.fetchGenre();
    this.fetchMovie();
    this.fetchCinema();
    this.fetchBroadcast();
  },
  
  watch:{
  $route(){
    this.fetchGenre();
    this.fetchDimension();
    this.fetchMovie();
    this.fetchCinema();
    this.fetchBroadcast();
  }
  }
    
    }
  </script>
  