<template>
    <div class="input">
                <div class="flex gap-3">
                <v-text-field 
                class="my-5 text-gray-800 bg-white rounded-md"
                v-model="comment"
                label="leave your comment"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>  
                <div class="pt-[10px]">
                <v-btn 
                class=" bg-light-blue-darken-3 text-end my-5 ml-2"
                @click="sendCmment">send</v-btn> 
                </div> 
            </div> 
    </div>
</template>

<script>
import { useToast } from 'vue-toastification'

export default {
data() {
    return {
        api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments.json',
        comment: null,
        // comments: {},
        counter: 0,
        toast: useToast(),
    }
},
methods: {
    async sendCmment() {
        if (!this.comment) {
            this.toast.warning('Please, Fill all filds')
            return
        }
        const res = await fetch(this.api, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(this.comment)
        })
        this.comment = null
        this.toast.success('Your comment has been created!')
    },
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
.input {
      padding: 5px 20px;
}
</style>
