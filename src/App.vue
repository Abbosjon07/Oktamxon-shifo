<template>
<div>
  <Preloader />
    <Top/>
    <Header/> 
  <div class="flex">
    <!-- <Sadebar/> -->
  </div>
   <router-view v-slot="{ Component }">
    <transition name="scale-effect" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
   <Footer/>
</div>
</template>


<script>
import Top from './components/Top.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'
// import Sadebar from './components/Sadebar.vue'


export default {
  components: {
    Header,
    Footer,
    Preloader,
    Top,
    // Sadebar
    },
  data() {
    return {
      api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
      // isOpen: false
    }
  },
}
</script>

<style>
body {
  background: #84cdeb;
}

.scale-effect-enter-active,
.scale-effect-leave-active {
  transition: all 0.5s ease;
}

.scale-effect-enter-from,
.scale-effect-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
 