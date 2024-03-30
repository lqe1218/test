<template>
    <div class="box">
       <div class="text">{{ props.title }}</div>
        <img src="../../assets/img/logo_side.png" alt="Side Logo"/>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{title:any}>();
</script>

<style>
.box{
    border-radius:6px;
    outline-color:white;
    background-color: rgba(0,0,0,0.2);
    width: 95%;
    /* border-color:white; */
    border:0.1px solid white;
    height:5rem;
}
.box .text{
    margin-block-start: 0em!important;
    margin-block-end: 0em!important;
    color:var(--line-arrow-color)!important;
    display:inline;
    padding-top: 2rem;
    margin-top: 2rem;
    display: inline-block;
}
.box img{
    float:right;
    height:4rem;
    margin-top:0.8rem;
}
</style>