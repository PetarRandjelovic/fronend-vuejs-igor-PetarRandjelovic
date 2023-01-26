<template>
    <div id="app">
           <h1>This is an about page</h1>
      <img
        src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
        width="200"
        alt="Logo"
      />
      <SingleMovieList :singleMovie="this.singleMovie" />
      <Comments v-if="image" :image="image" />
     
    </div>
  </template>
  
  <script>
    import { mapActions, mapState, mapMutations } from 'vuex';

    import MovieList from '@/components/MovieList.vue'
    import SingleMovieList from '@/components/SingleMovieList.vue'
    import Comments from '@/components/Comments.vue';
  import router from '@/router';
  import { computed } from 'vue';
  
    export default {
      name: 'Movie',
      
  
  
  
      components: {
        Comments,
        MovieList,
  
        SingleMovieList,

      },  data() {
      return {
        image: null,
       
      }
    },
      methods:{
  
  ...mapActions([



  'fetchSingleMovie',
  'getItem'
  ]),

  ...mapMutations([
   
  
          'setSingleMovie',
        ]),
      },
  computed:{
  ...mapState([



  'singleMovie',
  ])
  
  },
  
  mounted(){
    this.getItem(this.$route.params.id).then( res => {
        this.image = res;
        console.log(this.image);
        console.log(Comments);
      });
  
   
 
   
    //this.fetchMovie();
    this.fetchSingleMovie(this.$route.params.id);
  },
  
  watch:{
  $route(){

        console.log(this.$route);
  
  // this.fetchMovie();
    this.fetchSingleMovie(this.$route.params.id);
  }
  }
    
    }
  </script>
  