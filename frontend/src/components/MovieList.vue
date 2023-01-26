<template>
    <div>
      <h1>Movies</h1>
        <b-list-group>
    <b-container class="MovieList">

    <b-row> <!--ovde staviti href=shops/:id i ime --> 
    <b-col v-for="dep in movie" :key="dep.id" > <b-list-group-item  :to="`/movie/${dep.id}`">
      <img alt="Vue logo" width="200px" height="200px" :src="dep.imgUrl" />{{dep.name}} </b-list-group-item></b-col> <!--src ce biti u bazi-->
    </b-row>
    </b-container>
    </b-list-group>

  

    </div>
  </template>
  
  <script>
  
    import { mapActions, mapState } from 'vuex';
    export default {
  
      name: 'MovieList',
  props:{
    movie:[],
    
  },
      data() {
        return {
            
          fields: ['name'],
          items: [],
          currentPage: 1,
          perPage: 10
        }
      },
  
      computed: {
  
        ...mapState([
          'movie'
        ])
      },
  
  
      mounted() {
        console.log(this.movie);
        console.log("gfsdgsdsdgGSDJLHGFDSLDGFSLJHGDSKJGFSDKJ");
     
      },
  
      methods: {
        ...mapActions([
          'getItem'
        ]),
  
        rowClicked(record, index) {
          this.$router.push({ name: 'Single', params: { id: record.objectID } });
        }
      }
    }
  
  </script>
  
  <style scoped>
    .pagination {
      justify-content: center;
    }
  </style>