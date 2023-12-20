<template>
    <div class="mt-[50px] my-[100px]">
        <div class="ml-5">
     <router-link :to="{ name: 'home' }">
        <v-btn class="mt-5 bg-blue-darken-3 font-semibold">
        <i class="fa-solid fa-arrow-left"></i>    
        Назад</v-btn>
        </router-link>
        </div>
        <h1 class="flex justify-center my-10 text-5xl text-black">Регистрация</h1>
<div class="max-w-[600px] mx-auto bg-blue-400 rounded-md my-10">
    <v-text-field
      label="ИМЯ"
      :rules="rules"
       hide-details="auto"
      class=""
    ></v-text-field>
    <v-text-field label="ЭЛЕКТРОННАЯ ПОЧТА" hide-details="auto"></v-text-field>
    <v-text-field label="НОМЕР ТЕЛЕФОНА" hide-details="auto"></v-text-field>
    <v-text-field label="ПРИДУИАЙТЕ ПОРОЛЬ" hide-details="auto"></v-text-field>
</div>
<div class="flex justify-center">
      <v-btn
        color="primary" 
        class=" bg-light-blue-darken-3  w-[150px]"
        >
        <router-link :to="{ name: 'register' }">вход</router-link>
        <i class="fa-solid fa-arrow-right-to-bracket ml-2"></i>
    </v-btn> 
</div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>

