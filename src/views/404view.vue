<template>
    <div class="error text-center">
        <router-link :to="{ name: 'home' }">
        <v-btn class="mt-5 bg-blue-darken-3 font-semibold">
        <i class="fa-solid fa-arrow-left"></i>    
        Назад</v-btn>
        </router-link>
        <img class="h-[700px] w-full object-cover" src="https://cdn.dribbble.com/users/1169343/screenshots/7044451/404.png" alt="404">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.error {
    background: #fff;
}
</style>
