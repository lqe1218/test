<template>
    <div class="header d-flex">
        <div class="header-left">
            <img class="logoimg" src="assets/img/logo-white.png" alt="logo"/>
            Promotion Ends In
            <CountDownTime v-if="data" :data="data"/>
        </div>
        <div class="header-right">
            <Button @click="register" label-name="Register"/> 
            <span @click="loginDialog">
            <i class="pi pi-user"></i>
            <i class="pi pi-angle-right"></i>
            </span>
        </div>
        <Dialog class="dialog" v-model:visible="visibleLogin" >
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
import { onMounted } from 'vue';


const targetDate = new Date('2024-02-29');
// const currentDate = ref(new Date());


const formStore = userStore();
const loginData = ref({ 
    email:'',
    password:''
})

// let data={
//     day:"27",
//     hour:"23",
//     min:"45",
//     sec:"07"
// }
const data =ref();
const updateDateTime = () => {
    let currentDate=new Date();
    const difference = targetDate.getTime() -currentDate.getTime();
    data.value = {
        day:Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((difference % (1000 * 60)) / 1000)
    }
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
onMounted(()=>{
    setInterval(updateDateTime, 1000);
})
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
  