<template>
    <div class="header d-flex">
    <div class="header-left">
        <img class="logoimg" src="assets/img/logo-white.png" alt="logo"/>
        Promotion Ends In
        <CountDownTime :data="data"/>
    </div>
    <div class="header-right">
        <Button label-name="Register"/> 

        <i class="pi pi-user"></i>
        <i class="pi pi-angle-right"></i>
    </div>
    </div>
</template>

<script setup lang="ts">
import CountDownTime from '../text/CountDownTime.vue';

import Button from '../button/button.vue';

let data={
    day:"27",
    hour:"23",
    min:"45",
    sec:"07"
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
  