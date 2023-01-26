<template>
    <div id="app">
        <h1>Reservation</h1>
      <img
        src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
        width="200"
        alt="Logo"
      />
      <ReservationList :singleBroadcast="this.singleBroadcast" />
    </div>
  </template>
  
  <script>
    import { mapActions, mapState, mapMutations } from 'vuex';
    import Header from '@/components/Header.vue'
    import GenreList from '@/components/GenreList.vue'
    import MovieList from '@/components/MovieList.vue'
    import CinemaList from '@/components/CinemaList.vue'
    import BroadcastList from '@/components/BroadcastList.vue'
    import SingleBroadcastList from '@/components/SingleBroadcastList.vue'
    import ReservationList from '@/components/ReservationList.vue'
  import router from '@/router';
  import { computed } from 'vue';
  
    export default {
      name: 'Broadcast',
      
  
  
  
      components: {
        Header,
        GenreList,
        MovieList,
        CinemaList,
        BroadcastList,
        SingleBroadcastList,
        ReservationList,

      },
      methods:{
  
  ...mapActions([
  'fetchGenre',
  'fetchDimension',
  'fetchMovie',
  'fetchCinema',
  'fetchBroadcast',
  'fetchSingleBroadcast',
  'fetchReservation'
  
  ]),

  ...mapMutations([
          'setGenre',
          'setDimension',
          'setMovie',
          'setCinema',
          'setBroadcast',
          'setSingleBroadcast',
          'setReservation'
        ]),
      },
  computed:{
  ...mapState([
  'genre',
  'dimension',
  'movie',
  'cinema',
  'broadcast',
  'singleBroadcast',
  'reservation',
  ])
  
  },
  
  mounted(){
    console.log(this.$route.params);
    this.fetchBroadcast();
    this.fetchSingleBroadcast(this.$route.params.id);
    this.fetchReservation();
  },
  
  watch:{
  $route(){
        console.log(this.$route);
        this.fetchReservation();
    this.fetchBroadcast();
    this.fetchSingleBroadcast(this.$route.params.id);
    this.fetchReservation();
  }
  }
    
    }
  </script>
  