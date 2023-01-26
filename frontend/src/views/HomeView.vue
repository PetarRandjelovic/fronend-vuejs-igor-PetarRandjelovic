<template>
  <div id="app">
    <Header subtitle="Home"/>
    <b-nav-item to="/cinema">Cinema</b-nav-item>
    <b-nav-item to="/broadcast">Broadcast</b-nav-item>
    <img
      src="https://www.flixicam.com/img/blog/copy-netflix-download.jpg"
      width="200"
      alt="Logo"
    />
    
    <GenreList />
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  import Header from '@/components/Header.vue'
  import GenreList from '@/components/GenreList.vue'
  
import router from '@/router';
import { computed } from 'vue';

  export default {
    name: 'Home',
    



    components: {
      Header,
    
    },
    methods:{

...mapActions([
'fetchGenre',
'fetchDimension',

]),
/*
onclick(name){
this.$router.push({name:name}),


}
*/
...mapMutations([
        'setGenre',
        'setDimension'
      ]),
    },
computed:{
...mapState([
'genre',
'dimension'

])

},

mounted(){
  this.fetchDimension();
  this.fetchGenre();
},

watch:{
$route(){
  this.fetchGenre();
  this.fetchDimension();
}
}
  
  }
</script>
