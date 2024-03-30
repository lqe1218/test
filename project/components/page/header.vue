<template>
    <div class="header d-flex">
        <div class="header-left">
            <img class="logoimg" src="assets/img/logo-white.png" alt="logo"/>
            Promotion Ends In
            <CountDownTime :data="data"/>
        </div>
        <div class="header-right">
            <Button @click="register" label-name="Register"/> 
            <span @click="loginDialog">
            <i class="pi pi-user"></i>
            <i class="pi pi-angle-right"></i>
            </span>
        </div>
        <Dialog v-model:visible="visibleLogin" >
            <label for="email">Email</label><br/>
            <input type="text" v-model="loginData.email" placeholder="Email"/>
            <br/><br/>
            <label for="password">Password</label><br/>
            <input type="text" v-model="loginData.password" placeholder="Password"/>
            <br/><br/>
            <Button class="btn-login" @click="login" label-name="Login" color="grey"/>
        </Dialog>
        
   </div>
</template>

<script setup lang="ts">
import CountDownTime from '../text/CountDownTime.vue';
import Button from '../button/button.vue';
import userStore from '../../store/userStore';
import Dialog from 'primevue/dialog';


const formStore = userStore();
const loginData = ref({ 
    email:'',
    password:''
})

let data={
    day:"27",
    hour:"23",
    min:"45",
    sec:"07"
}
const visibleLogin=ref(false);

const loginDialog = () => {
    visibleLogin.value=!visibleLogin.value
}
const login = () => {
    let loginValidateData = formStore.getDataByEmail(loginData.value.email,loginData.value.password);
    if(loginValidateData){
        formStore.setCurrentUser(loginValidateData.firstName,loginValidateData.lastName,loginValidateData.email,loginValidateData.countryCode,loginValidateData.phoneNum)
    }
}

const register = () =>{
    window.scrollTo({
        top: 1950,
        left: 0,
        behavior: 'smooth'
    });
}
</script>

<style>
.header{
    padding-top:2rem;

}
.header-left{
    display:flex;
    justify-content: space-around;
    width:60vw;
}
.header-right{
    margin-left:10rem;
}
.logoimg{
    width:8rem;
    height:2rem
}
.pi-user{
    margin-left:2rem;
}
</style>
  