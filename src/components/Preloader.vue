<template>
  <div class="preloader" v-if="!isLoaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isLoaded: false
    }  
  },
  mounted() {
      document.onreadystatechange = () => {
          if ( document.readyState == "complete") {
              this.isLoaded = true
          }
      }
  }
}
</script>

<style scoped>
:root {
    --darkblue: #8cc271;
    --blue: #69beeb;
    --greenblue: #f5aa39;
    --lightblue: #e9643b;
}

.preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    z-index: 999;
}

.cube {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-color: blue; 
    animation: left 0.7s infinite;
    animation: right 0.7s infinite;
}

@keyframes left {
    40% {
        transform: translateX(-70px);
    }
    50% {
        transform: translateX(o)
    }
}
@keyframes right {
    40% {
        transform: translateX(70px);
    }
    50% {
        transform: translateX(o)
    }
}
</style>
