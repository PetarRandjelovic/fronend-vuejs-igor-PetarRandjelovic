<template>
    <div id="app">
        <Header subtitle="Home"/>
      <img
        src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
        width="200"
        alt="Logo"
      />
      <MovieList />
    </div>
  </template>
  
  <script>
    import { mapActions, mapState, mapMutations } from 'vuex';
    import Header from '@/components/Header.vue'
    import GenreList from '@/components/GenreList.vue'
    import MovieList from '@/components/MovieList.vue'
  import router from '@/router';
  import { computed } from 'vue';
  
    export default {
      name: 'Movie',
      
  
  
  
      components: {
        Header,
        GenreList,
        MovieList,
      },
      methods:{
  
  ...mapActions([
  'fetchGenre',
  'fetchDimension',
  'fetchMovie'
  
  ]),
  /*
  onclick(name){
  this.$router.push({name:name}),
  
  
  }
  */
  ...mapMutations([
          'setGenre',
          'setDimension',
          'setMovie'
        ]),
      },
  computed:{
  ...mapState([
  'genre',
  'dimension',
  'movie'
  
  ])
  
  },
  
  mounted(){
    this.fetchDimension();
    this.fetchGenre();
    this.fetchMovie();
  },
  
  watch:{
  $route(){
    this.fetchGenre();
    this.fetchDimension();
    this.fetchMovie();
  }
  }
    
    }
  </script>
  