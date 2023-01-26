<template>
    <div>
  

  <b-list-group>
  <b-container class="Reservation">

<b-row> <!--ovde staviti href=shops/:id i ime --> 
<b-col v-for="dep in reservation" :key="dep.id" > <b-list-group-item  :to="`/reservation/${dep.id}`">
 {{dep.user.name}}{{" Broj rezervacije "}}  {{dep.id}}  {{"Sediste-"}} {{dep.seat.id}}  </b-list-group-item></b-col> <!--src ce biti u bazi-->
</b-row>
</b-container>
</b-list-group>



  </div>
    </template>
    
    <script>
    
      import { mapActions, mapState } from 'vuex';
      export default {
    
        name: 'ReservationList',
    props:{
        reservation:Object,
      
      
    },
        data() {
          return {
              
            fields: ['id'],
            items: [],
            currentPage: 1,
            perPage: 10
          }
        },
    
        computed: {
    
          ...mapState([
            'reservation'
          ])
        },
    
    
        mounted() {
            console.log("gfdgfdgfdgf");
          console.log(this.reservation);
        
       
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