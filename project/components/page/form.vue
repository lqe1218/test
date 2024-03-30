<template>
    <div class="form">
        <!-- <form> -->
            <div class="title"><p>Register Now</p></div>
            <div class="form-field">
                <div class="form-group">
                    <label for="fname">First Name</label>
                    <input type="text" v-model="data.firstName" class="form-control" id="fname" aria-describedby="fnameHelp" placeholder="First Name">
                </div>
                <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" v-model="data.lastName" class="form-control" id="lname" aria-describedby="lnameHelp" placeholder="Last Name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="data.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"  v-model="data.password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="passwordConf">Password Confirmation</label>
                    <input type="password"  v-model="data.passwordConf" class="form-control" id="passwordConf" aria-describedby="passwordconfhelp" placeholder="Password Confirmation">
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox"  v-model="data.check1" id="check1" aria-describedby="check1Help">
                    <label for="check1">I confirm that I am at least 18 years old.</label>
                    
                </div>
            
                <div class="form-group checkbox-group">
                    <input type="checkbox"  v-model="data.check2" id="check2" aria-describedby="check2Help">
                    <label for="check2">By joining and participating in the Competition, I acknowledge and confirm that I have read, understood and agreed to be bounded by the Terms and Conditions of the Competition.</label>
                </div>

                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <Button @click="register" class="col-md-12" color="grey" label-name="Register Now"></Button>
                <div class="col-md-12 btn-group">
                    <Button color="blue" label-name="Sign up by Facebook"></Button>
                    <Button color="red" label-name="Sign up by Google"></Button>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import userStore from '../../store/userStore';
import Button from '../button/button.vue';

const formStore = userStore();

const data = ref({
    firstName:'',
    lastName:'', 
    email:'', 
    countryCode:'', 
    phoneNum:'',
    password:'',
    passwordConf:'',
    check1:false,
    check2:false
});

const register = () =>{
    formStore.addData(
        data.value.firstName,
        data.value.lastName,
        data.value.email,
        data.value.countryCode,
        data.value.phoneNum,
        data.value.password,
        data.value.passwordConf,
        data.value.check1,
        data.value.check2
    )
    resetData();
}

const resetData = () => {
    data.value = {
        firstName: '',
        lastName: '', 
        email: '', 
        countryCode: '', 
        phoneNum: '',
        password: '',
        passwordConf: '',
        check1: false,
        check2: false
      };
}
</script>

<style>
.form{
    margin-top:4rem;
    margin-left:10rem;
    margin-right:10rem;
}
.title p{
   margin:auto;
   font-size:3rem;
   color:var(--line-arrow-color);
   text-align:center;
}
.form-field{
    margin-left:5rem;
    margin-right:5rem;
}
.form-group{
    margin-bottom:1rem;
}
.btn-group button{
    width:100%;
}
.btn-group{
    margin-top:1rem;
}
.checkbox-group{
    display:flex;
}
</style>