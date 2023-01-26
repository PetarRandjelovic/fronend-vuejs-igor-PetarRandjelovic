<template>
    <div>
      <h1>LHLDSG</h1>
        <b-list-group>
    <b-container class="CinemaList">

    <b-row> <!--ovde staviti href=shops/:id i ime --> 
    <b-col v-for="dep in cinema" :key="dep.id" > <b-list-group-item  :to="`/broadcast`">
      <img alt="Vue logo" width="200px" height="200px" :src="dep.imgUrl" />{{dep.name}} </b-list-group-item></b-col> <!--src ce biti u bazi-->
    </b-row>
    </b-container>
    </b-list-group>

  

    </div>
  </template>
  
  <script>
  
    import { mapActions, mapState } from 'vuex';
    export default {
  
      name: 'CinemaList',
  props:{
    cinemas:[],
    
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
          'cinema'
        ])
      },
  
  
      mounted() {
        console.log(this.cinemas);
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