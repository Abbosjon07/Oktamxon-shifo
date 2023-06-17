<template>
<div>
  <div class="main">
    <Header/>
    <Hero/>
    <Section/>
    <AccountList :key="counter"/>
    <div class="flex">
    <AccountInput class="w-[1900px]"/>
    <AccountBtn @click="counter++" class="mt-1 pr-2"/>
    </div>
    <Info/>
    <Map/>
    <Footer/>
  </div>
  <RouterView />
</div>
</template>


<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Section from './components/Section.vue'
import AccountList from './components/AccountList.vue'
import AccountInput from './components/AccountInput.vue'
import AccountBtn from './components/AccountBtn.vue'
import Info from './components/Info.vue'
import Map from './components/map.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    Section,
    AccountList,
    AccountInput,
    AccountBtn,
    Info,
    Map,
    Footer
    },
  data() {
    return {
      api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
      counter: 0,
    }
  },
  // methods: {
  //   if (click) {
      
  //   }
  // }
}
</script>

<style>
body {
  background: #84cdeb;
}


</style>
 