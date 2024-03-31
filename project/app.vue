<template>
  <div class="main-container">
    <div class="top-section">
      <Header/>
      
      <div class="col-md-12 mid-container d-flex">
        <div class="col-md-4 left">
          <img class="act-logo" src="assets/img/logomark.png" alt="activity img"/>
        </div>
        <div class="col-md-7 title-container">
          <TextTitle>
            <template #title>
              TRADING TANGO
            </template>
            <template #subtitle>
              VALENTINE'S DAY PROMOTION<br>
              1-29 February 2024
            </template>
            <template #text>
              * <a href="">Terms & conditions</a> apply.
            </template>
          </TextTitle>
        </div>
      </div>

      <div class="col-md-row mid-container-2">
        <p class="orange-color reward-text">Collect All Rewards</p>
        <div class="d-flex flex-wrap col-md-8 mid-card">
          <div v-for="title in array" class="col-md-6">
              <CardContainer :title="title"/>
          </div>
        </div>
        
      </div>

      <div>
        <BoxContainer card-title="Free US$600 Credits!" position="right">
          <template #img>
            <img src="assets/img/Promo 1B.png" style="height:15rem" alt="image"/>
          </template>
          <template #context>
            <ul>
              <li><span class="marker">1</span>
                <span class="orange-color">US$200 credits</span>
                <br/>
                <span>when you open an account & deposit US$200</span>
              </li>
              <li><span class="marker">2</span>
                <span class="orange-color">US$20 credits</span>
                <br/>
                <span>for every lot you trade, up to 20 lots</span>
              </li>
            </ul>
          </template>
          <template #button>
            <Button label-name="Create Live Account"/>
            <Button label-name="Download MT4 Platform"/>
          </template>
        </BoxContainer>
      </div>

      <div>
        <BoxContainer card-title="Free INR$20,000 Gift Cards!" position="left">
          <template #img>
            <img src="assets/img/Promo 2B.png" style="height:15rem" alt="image"/>
          </template>
          <template #context>
            <ul>
              
              <li><span class="marker">3</span>
                <span class="orange-color">INR$2,000 Flipkart gift card</span>
                <br/>
                <span>when you refer someone to enjoy <span class="marker">1</span></span>
              </li>
              
              <li><span class="marker">4</span>
                <span class="orange-color">INR$2,000 Flipkart gift card</span>
                <br/>
                <span>when you refer someone to enjoy <span class="marker">1</span><span class="marker">2</span><span class="marker">3</span></span>
              </li>
            </ul>
          </template>
          <template #button>
            <Button label-name="Create Live Account"/>
            <Button label-name="Download MT4 Platform"/>
          </template>
        </BoxContainer>
      </div>
      <Step/>
      <Form/>
      <Guide/>
      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/page/header.vue';
  import TextTitle from './components/text/TextTitle.vue';
  import CardContainer from './components/container/CardContainer.vue';
  import BoxContainer from './components/container/BoxContainer.vue';
  import Step from './components/page/step.vue';
  import Form from './components/page/form.vue';
  import Guide from './components/page/guide.vue';
  import Footer from './components/page/footer.vue';

  import Button from './components/button/button.vue';

  let array=[
    "US$200 credits",
    "INR$2000 gift card",
    "US$400 credits",
    "INR$20,000 gift card"
  ]
</script>

<style>
.act-logo{
  width:12rem;
  height:12rem;
}
.mid-container,.mid-container-2{
  margin-top:4rem;
}

.mid-container .left{
  text-align:right;
  align-self: center;
} 

.title-container,.mid-container-2{
  text-align:center;
  align-self: center;
}

.mid-card{
  margin:auto
}
.top-section{
  background-image:url('assets/img/Trading\ Tango\ header.png');
  background-repeat: no-repeat;
  background-size:100vw 120vh;
}
.reward-text{
  font-size:1.5rem;
}
.mid-card .col-md-6{
  margin-top:1rem;
}
</style>