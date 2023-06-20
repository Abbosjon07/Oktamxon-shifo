<template>
<div>
    <Header/> 
  <RouterView />
   <Footer/>
</div>
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
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
 