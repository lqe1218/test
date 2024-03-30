<template>
    <button :class="btnclass">{{ props.labelName }} </button>
</template>

<script setup lang="ts">

// import Button from 'primevue/button';
const props = defineProps<{labelName:string, color?:string}>();
let btnclass="btn-orange";
if(props.color && props.color!=''){
    btnclass="btn-"+props.color
}
</script>

<style>
button{
    color: #ffffff;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    margin-right:0.5rem;

}
.btn-orange{
    background: var(--line-arrow-color);
    border: 1px solid var(--line-arrow-color);
}
.btn-grey{

    background: #808080;
    border: 1px solid #808080;
}
.btn-blue{

    background: #1877F2;
    border: 1px solid #1877F2;
}
.btn-red{

    background: #FF4500;
    border: 1px solid #FF4500;
}

</style>