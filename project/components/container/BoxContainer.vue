<template>
    <div class="box-container">
        <p>{{ props.cardTitle }}</p>
        <div class="col-md-6 img" :class="props.position">
            <slot name="img"></slot>
            
        </div>
        <div class="col-md-6">
            <slot name="context"></slot>
        </div>
        
        <div class="button-field">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import button from '../button/button.vue';
const props = defineProps<{cardTitle:string,position:string}>();

</script>

<style>
.box-container .left img{
    float:inline-start;
    margin-top:-2rem;
}
.box-container .right img{
    float:inline-end;
    margin-top:-2rem;
}
.img{
    display:inline
}
.box-container{
    border:1px solid var(--line-arrow-color);
    height:20rem;
    margin-left:15rem;
    margin-right:15rem;
    margin-top:5rem;
    padding:1rem;
}
.button-field{
    display:flex;
    align-content: space-between;
}
.box-container p{
   font-size:2rem;
}
</style>