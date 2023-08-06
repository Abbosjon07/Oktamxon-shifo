<template>
    <div class="ref">
        <div class="pt-[10px]">
         <v-btn 
        class=" bg-light-blue-darken-3 my-5 mx-aouto"
        ><i class="fa-solid fa-arrows-rotate"></i></v-btn> 
        </div> 
    </div>
</template>

<script>
import { useToast } from 'vue-toastification'

export default {
data() {
    return {
        // api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
        comment: null,
        // comments: {},
        // counter: 0,
        toast: useToast(),
    }
},
methods: {
    // async sendCmment() {
    //     if (!this.comment) {
    //         this.toast.warning('Please, Fill all filds')
    //         return
    //     }
    //     const res = await fetch(this.api, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'aplication/json'
    //         },
    //         body: JSON.stringify(this.comment)
    //     })
    //     this.toast.success('Your comment has been created!')
    // },
    // async fetchComments() {
    //     const res = await fetch(this.api)
    //     const data = await res.json()
    //     this.comments = data
    // }
},
// mounted() {
//     this.fetchComments()
// }
}
</script>

<style>
</style>
