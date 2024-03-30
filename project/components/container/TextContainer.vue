<template>
    <slot name="img"></slot>
    <div class="textbox">
        <p>{{   props.text  }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{text:string}>();
</script>

<style>
.textbox{
    background-color:var(--line-arrow-color-transparent);
    height:3rem;
    width:95%;
    margin-top:-3rem
}
.textbox p{
    text-align:center;
    color:white;
    padding-top:0.6rem;
}

</style>