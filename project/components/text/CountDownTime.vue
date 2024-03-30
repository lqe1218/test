<template>
    <div class="d-flex count-time">
        <div>
            {{ props.data.day }}
            <br>
            Days
        </div>
        :
        <div>
            {{ props.data.hour }}
            <br>
            Hours
        </div>
        :
        <div>

            {{ props.data.min }}
            <br>
            Minutes
        </div>
        :
        <div>
            {{ props.data.sec }}
            <br>
            Seconds
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{data:any}>();
</script>

<style>
.count-time{
    text-align:center;
}
.count-time div{
    padding-left:1rem;
    padding-right:1rem;
}
</style>