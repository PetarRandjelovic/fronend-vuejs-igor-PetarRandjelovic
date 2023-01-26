<template>
    <div>
  
  <div class="movie">
   
    
    <ul>

      <li>Movie: {{ this.movie.name }}</li>
     
    </ul>
  </div>
  
  </div>
    </template>
    
    <script>
    
      import { mapActions, mapState } from 'vuex';
      export default {
    
        name: 'SingleMovieList',
    props:{
      movie:Object,
      
      
    },
        data() {
          return {
              
            fields: ['Movie','Cinema','Dimension'],
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