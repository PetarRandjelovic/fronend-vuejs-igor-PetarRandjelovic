<template>
    <div>

   
      <h1>gsdgsdgsdg</h1>
        <b-list-group>
    <b-container class="BroadcastList">

    <b-row> <!--ovde staviti href=shops/:id i ime --> 
    <b-col v-for="dep in broadcast" :key="dep.id" > <b-list-group-item  :to="`/broadcast/${dep.id}`">
      <img alt="Vue logo" width="200px" height="200px" :src="dep.imgUrl" />{{dep.movie.name}}  {{ dep.cinema.name }} </b-list-group-item></b-col> <!--src ce biti u bazi-->
    </b-row>
    </b-container>
    </b-list-group>

  

    </div>
  </template>
  
  <script>
  
    import { mapActions, mapState } from 'vuex';
    export default {
  
      name: 'BroadcastList',
  props:{
    broadcast:[],
    broadcastM:Object,
    
  },
      data() {
        return {
            
          fields: ['name','movieId'],
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
        console.log(this.broadcast);
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