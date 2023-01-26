<template>
  <div>

<div class="broadcast">
 
  
  <ul>
    <li>ID: {{ this.broadcast.id }}</li>
    <li>Movie: {{ this.broadcast.movie.name }}</li>
    <li>Cinema: {{ this.broadcast.cinema.name }}</li>
    <li>Dimension: {{ this.broadcast.dimension.name }}</li>
   
  </ul>
</div>

</div>
  </template>
  
  <script>
  
    import { mapActions, mapState } from 'vuex';
    export default {
  
      name: 'SingleBroadcastList',
  props:{
    broadcast:Object,
    
    
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
          'broadcast'
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