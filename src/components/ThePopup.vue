<template>
<div class="layer fixed left-0 top-0 w-full h-full flex justify-center items-center" 
        @click="$emit('close')"
    >
        <div class="modal p-5 rounded-md bg-white w-[400px] text-xl font-semibold" 
        @click.stop
        >
            <h2 class="text-gray-700">Вы действительно хотите удалить коммент?</h2>  
            <div class="mt-4">
            <v-btn @click="$emit('close')" class="mr-2 bg-yellow-darken-3 text-white">отмена</v-btn>
            <v-btn @click="$emit('delet')" class="ml-2 bg-red-accent-4">удалить</v-btn>         
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.layer {
    background: rgba(0, 0, 0, 0.8);
}
</style>
