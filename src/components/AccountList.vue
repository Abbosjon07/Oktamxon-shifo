<template>
   <div class="flex justify-center text-center">
    <div class="accounts text-gray-700">   
    <div class="title">
    <h2 class="text-3xl font-semibold my-15">Comments</h2>
    </div>  
        <marquee behavior="" direction="down" height="500" scrollamount="5">
        <Cards v-for="(comment, key) in comments" :key="key" :info="comment" :id="key" @commentDeleted="fetchComments"/>
        </marquee>
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
</style>

