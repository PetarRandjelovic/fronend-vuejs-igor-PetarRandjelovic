<template>
    <div id="app">
      <Header subtitle="Create account"/>
  
      <b-form @submit="onSubmit">
        <b-form @submit="submitForm">
        <b-form-group label="Email address:" label-for="email">
          <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
          <p v-if="!emailIsValid" class ="error-message">The email field is required!</p>
        </b-form-group>
  
        <b-form-group label="User Name:" label-for="name">
          <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
          <p v-if="!nameIsValid" class ="error-message">The name field is empty or to few characters!!</p>
        </b-form-group>
  
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
          <p v-if="!passwordIsValid" class ="error-message">The password field is empty or to few characters!!</p>
        </b-form-group>
  
        <b-form-checkbox id="admin" v-model="form.admin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
        
        <br>
        <b-button :disabled="!formIsValid" type="submit" variant="primary" >Submit</b-button>
      </b-form>
    </b-form>
    </div>
  </template>
  
  <script>

//import Joi from ('joi-browser');
    import Header from '@/components/Header.vue';
    import { mapActions } from 'vuex';
  
    export default {
      name: 'Register',
      
      components: {
        Header
      },
  
      data() {
        return {
          form: {
            email: '',
            name: '',
            password: '',
            admin: false
          }
        }
      },
  computed:{
nameIsValid(){
  return !!this.form.name && this.form.name.length>3;
},

emailIsValid(){
  return !!this.form.email;
},
passwordIsValid(){
  return !!this.form.password && this.form.password.length>3;
},
formIsValid(){

  return this.nameIsValid && this.passwordIsValid && this.emailIsValid;
}

  },
      methods: {

        submitForm(){
const nameIsValid=!!this.form.name===this.form.len;
const emailIsValid=!!this.form.email;
const passwordIsValid=!!this.form.password;
const formIsValid=nameIsValid && emailIsValid;
if(formIsValid){
console.log("greska 1");
} else {
  console.log("greska 2");

}


        },
        ...mapActions([
          'register'
        ]),
  
        onSubmit(e) {
          e.preventDefault();
  
          this.register(this.form);
          this.$router.push({ name: 'Home' });
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  