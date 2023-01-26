<template>
    <div id="app">
       
      <img
        src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
        width="200"
        alt="Logo"
      />
      <BroadcastList :broadcast="this.broadcast" />
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
      name: 'Broadcast',
      
  
  
  
      components: {
    
        BroadcastList,
      },
      methods:{
  
  ...mapActions([
  
  'fetchBroadcast',
  ]),
  /*
  onclick(name){
  this.$router.push({name:name}),
  
  
  }
  */
  ...mapMutations([
         
          'setBroadcast'
        ]),
      },
  computed:{
  ...mapState([

  'broadcast',
  
  ])
  
  },
  
  mounted(){
 
    this.fetchBroadcast();
  },
  
  watch:{
  $route(){

    this.fetchBroadcast();
  }
  }
    
    }
  </script>
  