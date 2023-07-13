<template>
   <div class="flex justify-center text-center mt-[370px]">
    <div class="accounts text-gray-700">   
    <div class="title">
    <h2 class="text-3xl font-semibold my-15">Комментарии</h2>
    </div>  
    
    <div class="scroller h-[400px] pr-5">
        <Cards v-for="(comment, key) in comments" :key="key" :info="comment" :id="key" @commentDeleted="fetchComments"/> 
    </div>
    
    </div>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification'
import Cards from './Cards.vue'


export default {
components: {
    Cards,
},
data() {
    return {
        api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
        comments: {},
        toast: useToast(),
    }
},
methods: {
      async fetchComments() {
      const res = await fetch(this.api)
      const data = await res.json()
      this.comments = data
    }
},
mounted() {
    this.fetchComments()
}
}
</script>

<style>
.wrapper {
      padding: 5px 20px;
}

:root {
    --darkblue: #03256c;
    --blue: #2541b2;
    --greenblue: #1768ac;
    --lightblue: #06bee1;
}

.cards {
    border: var(--darkblue) 2px solid;
}

.scroller {
  height: 400px;
  overflow-y: scroll;
  /* scrollbar-color: rebeccapurple green;   */
  /* background: #2541b2 */
}

::-webkit-scrollbar {
    background: #03256c;
    border-radius: 5%;
}

::-webkit-scrollbar-thumb {
    background: #06bee1;
}

::-webkit-scrollbar-button {
    background: #1768ac
}

</style>

