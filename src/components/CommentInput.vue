<template>
    <div class="input">
                <div class="flex mx-auto gap-3 max-w-[100%]">
                <v-text-field 
                class="my-5 text-gray-800 bg-white rounded-md"
                v-model="comment"
                label="leave your comment"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>  
                <div class="pt-[10px]">
                <v-btn 
                class=" bg-light-blue-darken-3 my-5 ml-2"
                @click="sendCmment">отправить</v-btn> 
                </div> 
            </div> 
    </div>
</template>

<script>
import { useToast } from 'vue-toastification'

export default {
data() {
    return {
        api: 'https://o-ktamxon-shifo-29e3a-default-rtdb.firebaseio.com/comments.json',
        comment: null,
        // comments: {},
        counter: 0,
        toast: useToast(),
    }
},
methods: {
    async sendCmment() {
        if (!this.comment) {
            this.toast.warning('Пожалуйста, заполните все поля')
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
        this.toast.success('Ваш комментарий создан!')
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
