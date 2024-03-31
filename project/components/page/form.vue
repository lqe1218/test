<template>
    <div class="form">
            <div class="title"><p>Register Now</p></div>
            <div class="form-field">
                <div class="form-group">
                    <label for="fname">First Name</label>
                    <input type="text" v-model="data.firstName" class="form-control" id="fname" aria-describedby="fnameHelp" placeholder="First Name">
                    <span v-if="!validateSubmit && v.firstName.$invalid" class="error-message">First name is required</span>
                </div>
                <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" v-model="data.lastName" class="form-control" id="lname" aria-describedby="lnameHelp" placeholder="Last Name">
                    <span v-if="!validateSubmit && v.lastName.$invalid" class="error-message">Last name is required</span>
                
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="data.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
                    <span v-if="!validateSubmit && v.email.$invalid" class="error-message">Email is required</span>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"  v-model="data.password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Password">
                    <span v-if="!validateSubmit && v.password.$invalid" class="error-message">Password is required</span>   
                </div>
                <div class="form-group">
                    <label for="passwordConf">Password Confirmation</label>
                    <input type="password"  v-model="data.passwordConf" class="form-control" id="passwordConf" aria-describedby="passwordconfhelp" placeholder="Password Confirmation">
                    <span v-if="!validateSubmit && v.passwordConf.required.$invalid" class="error-message">Password confirmation is required. </span>
                    <span v-if="!validateSubmit && !v.passwordConf.required.$invalid && !samePw" class="error-message">Passwords do not match</span>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox"  v-model="data.check1" id="check1" aria-describedby="check1Help">
                    <label for="check1">I confirm that I am at least 18 years old.</label>
                    <span v-if="!validateSubmit && !chk1" class="error-message">This is required</span>
                
                </div>
            
                <div class="form-group checkbox-group">
                    <input type="checkbox"  v-model="data.check2" id="check2" aria-describedby="check2Help">
                    <label for="check2">By joining and participating in the Competition, I acknowledge and confirm that I have read, understood and agreed to be bounded by the Terms and Conditions of the Competition.</label>
                    <span v-if="!validateSubmit && !chk2" class="error-message">This is required</span>
                    
                </div>

                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                <Button @click="submitForm" class="col-md-12" color="grey" label-name="Register Now"></Button>
                <div class="col-md-12 btn-group">
                    <Button color="blue" label-name="Sign up by Facebook"></Button>
                    <Button color="red" label-name="Sign up by Google"></Button>
                </div>
            </div>
      
    </div>

    <Dialog class="popup-dialog" v-model:visible="visibleDialog">
        Registered Successfully!
    </Dialog>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import userStore from '../../store/userStore';
import Button from '../button/button.vue';
import Dialog from 'primevue/dialog';

const formStore = userStore();
const visibleDialog =ref(false);
const validateSubmit = ref(true);
const samePw=ref(true);
const chk1=ref(true);
const chk2=ref(true);

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


const rules = {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    password: { required },
    passwordConf: { required
        ,sameAs: sameAs(data.value.password) 
    }
};

const v = useVuelidate(rules, data);

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

const validateSamePw=()=>{
    if(data.value.password == data.value.passwordConf){
       samePw.value=true;
    }
    else{
        samePw.value=false;
    }
}

const validateCheckBox = () => {
    console.log(data.value.check1);
    if(!data.value.check1){
        chk1.value=false;
    }
    else{
        chk1.value=true;
    }
    if(!data.value.check2){
        chk2.value=false;
    }
    else{
        chk2.value=true;
    }
}
const submitForm = () => {
    //validate same pw
    validateSamePw();
    validateCheckBox();
    
    if(!v.value.$invalid && samePw && chk1 && chk2){
     console.log('noinvalid') 
     validateSubmit.value=true;
     register();
     visibleDialog.value=true;  
    }else{
        validateSubmit.value=false;
        console.log('invalid')
    }
    // validate data 
    // if no error then register function & pop successful msg
    // else pop error msg
}

watch(visibleDialog,(newValue,oldValue)=>{
    if(newValue==true){
        //set timeout auto disappear
        setTimeout(() => {
            visibleDialog.value = false;
        }, 3000);
    }
})

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