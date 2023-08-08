<template>
<div>
    <Hero/>
    <CardsInfo/>
    <CommentList :key="counter"/>
    <div class="flex">
    <CommentInput class="w-[1900px]"/>
    <CommentBtn @click="counter++" class="mt-1 pr-2"/>
    </div>
    <Info/>
    <Map/>
</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import CardsInfo from '../components/CardsInfo.vue'
import CommentList from '../components/CommentList.vue'
import CommentInput from '../components/CommentInput.vue'
import CommentBtn from '../components/CommentBtn.vue'
import Info from '../components/Info.vue'
import Map from '../components/map.vue'
// import ThePopup from '../components/ThePopup.vue'

export default {
    components: {
    Hero,
    CardsInfo,
    CommentList,
    CommentInput,
    CommentBtn,
    Info,
    Map,
    // ThePopup
    },
    data() {
    return {
      api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
      counter: 0,
    }
    },
    methods: {

  }
}
</script>

<style>

</style>  
