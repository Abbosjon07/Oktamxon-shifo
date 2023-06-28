<template>
            <div class="cards flex rounded-xl mt-5 items-center px-3 py-3">
                <img src="https://res.cloudinary.com/holidayfox/w_900,h_900,c_limit,q_auto:eco,f_auto,dpr_1.5/v1608578151/mgviyz8fkaobzkr1btlg.png" alt="..." class="rounded-[50%] w-[55px] h-[55px] ">
                <p class="my-3 mx-2 ">{{ info }}</p> 
                <button 
                class="h-25 rounded-xl px-3"
                @click="popupOpen" >
                <i class="fa-sharp fa-solid fa-trash text-2xl text-red-500 hover:text-red-400 transition-all"
                >
                </i>
                <div v-if="isOpen" class="layer fixed left-0 top-0 w-full h-full flex justify-center items-center">
                    <div class="modal p-5 rounded-md bg-white w-[400px] text-xl font-semibold">
                        <h2 class="text-gray-700">Вы действительно хотите удалить коммент?</h2>  
                        <div class="mt-4">
                        <v-btn @click="popupOpen = false" class="mr-2 bg-yellow-darken-3 text-white">отмена</v-btn>
                        <v-btn @click="deletComment" class="ml-2 bg-red-accent-4">удалить</v-btn>         
                        </div>
                    </div>
                 </div>
                </button>  
    </div>
</template>

 <script>
import { useToast } from 'vue-toastification'


export default {
    components: {
},
    
    props: {
        info: {
            type: Object,
            default: {}
        },
        id: {
            type: String,
        }
    },
    data() {
      return {
        api: 'https://o-ktamxon-shifo-default-rtdb.firebaseio.com/comments/',
        toast: useToast(),
        isOpen: false,
      }  
    },
    methods: {
        popupOpen() {
            this.isOpen = true
        },
        
        async deletComment() {
            await fetch(this.api + this.id + '.json', { method: 'DELETE' })
            this.$emit('commentDeleted')
            this.toast.success('Comment has been deleted!')
        },
    }
}
</script>

<style>
:root {
    --darkblue: #03256c;
    --blue: #2541b2;
    --greenblue: #1768ac;
    --lightblue: #06bee1;
}

.accounts {
    padding: 5px 20px;
}

.cards {
    border: var(--darkblue) 2px solid;
}

.layer {
    background: rgba(0, 0, 0, 0.8);
}
</style>
