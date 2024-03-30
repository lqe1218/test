<template>
    <div class="guide">
        <div class="title"><p>Trading Guides</p></div>
        <div class="col-md-12 d-flex img-text">
            <div class="col-md-4">
                <TextContainer text="Forex For Begineers">
                    <template #img>
                        <img src="../../assets/img/guides_01.png" alt="img1"/>
                    </template>
                </TextContainer>
            </div>
           
            <div class="col-md-4">
                <TextContainer text="Analysing Made Easy">
                    <template #img>
                        <img src="../../assets/img/guides_02.png" alt="img1"/>
                    </template>
                </TextContainer>
            </div>

            <div class="col-md-4">
                <TextContainer text="CFDs Starter Kit">
                    <template #img>
                        <img src="../../assets/img/guides_03.png" alt="img1"/>
                    </template>
                </TextContainer>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">

import TextContainer from '../../components/container/TextContainer.vue';

</script>

<style>
.guide{
    margin-top:4rem;
}
.title p{
   margin:auto;
   font-size:3rem;
   color:var(--line-arrow-color);
   text-align:center;
}
.img-text{
    margin-top:3rem;
    padding-left:12rem;
    padding-right:12rem;
}
.img-text img{
    height:15rem;
}
</style>