<template>
  <div id="app" class="container-fluid mt-3" >
    <!-- <HelloWorld msg="Log In"/> -->
    <h1>Log In</h1>
    <b-form @submit="onSubmit">
      <div class="align-middle mb-3 mt-3">
        <b-form-group label="Username:" class="d-flex justify-content-center mb-3" label-for="username">
          <b-form-input id="username" style="margin-left:50px;width: 270px;" v-model="form.username" placeholder="Enter username..." required></b-form-input>
          <p v-if="!nameIsValid" class ="error-message">The name field is required!</p>
        </b-form-group>

        <b-form-group label="Password:" class="d-flex justify-content-center" label-for="password">
          <b-form-input id="password" style="margin-left:53px;width: 270px;" v-model="form.password" type="password" placeholder="Enter password..." required></b-form-input>
          <p v-if="!passwordIsValid" class ="error-message">The password field is required!</p>
        </b-form-group>
      </div>
      <b-button :disabled="!formIsValid"  type="submit" style="width: 170px;" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';
  export default {
    name: "Login-view",
    data() {
        return {
            form: {
          
                username: "",
                password: ""
            }
        };
    },  computed:{
nameIsValid(){
 return !!this.form.username;
},

passwordIsValid(){
  return !!this.form.password;
},
formIsValid(){

  return this.nameIsValid && this.passwordIsValid;
}

  },
    methods: {
        ...mapActions([
            "login"
        ]),
        onSubmit(e) {
            e.preventDefault();
            this.login(this.form);
            this.$router.push({ name: "home" });
        }
    }
}
</script>

<style scoped>
    .container-fluid {
        max-width: 1000px;
    }
</style>