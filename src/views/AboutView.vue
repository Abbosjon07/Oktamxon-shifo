<template>
    <div class="flex justify-center text-center text-gray-700">
        <div class="section mb-16">
            <div class="title text-3xl font-semibold mb-12 mt-12">
                <h2>Почему вам стоит доверять <span class="text-pink-400">НАМ</span>?</h2>
                <h2>Узнайте о нас</h2>
            </div>
    <div class="flex gap-12">
            <div class="cards w-[250px] border shadow-2xl rounded-xl bg-white">
                <img src="../assets/images/portrait-muslim-female-doctor-stethoscope-isolated-white-background-portrait-muslim-female-doctor-stethoscope-199987759.jpg" alt="..." class="rounded-[50%] w-[65px] h-[65px] shadow-xl mt-5 mb-10 mx-auto border">
                <h3 class="text-xl font-semibold mb-5 mx-3">Наши специолисты</h3>
                <p class="mb-5 mx-5">В нашей клинике работает лучший кардиолог, который поможет вам решить все ваши проблемы!!!</p>
                <router-link :to="{ name: 'doctors' }">
                <v-btn class="bg-pink-accent-1 py-2 px-2 mb-10 rounded-xl">Узнать о ней</v-btn>
                </router-link>
            </div>
            <div class="cards w-[250px] border shadow-2xl rounded-xl bg-white">
                <img src="../assets/images/4047.png" alt="..." class="rounded-[50%] w-[65px] h-[65px] shadow-xl mt-5 mb-10 mx-auto border">
                <h3 class="text-xl font-semibold mb-5 mx-3">Частный и безопасный</h3>
                <p class="mb-5 mx-5">Мы сохраним ваши данные о ваших заболеваниях и не будем передавать их другим людям!!! </p>
                <v-btn class="bg-pink-accent-1 py-2 px-2 mb-10 rounded-xl">Узнать об этом</v-btn>
            </div>
            <div class="cards w-[250px] border shadow-2xl rounded-xl bg-white">
                <img src="https://img.freepik.com/premium-vector/old-man-walking-with-walking-stick_115990-208.jpg" alt="..." class="rounded-[50%] w-[65px] h-[65px] shadow-xl mt-5 mb-10 mx-auto border">
                <h3 class="text-xl font-semibold mb-5 mx-3">Наши поциенты</h3>
                <p class="mb-5 mx-5">Наша клиника стала очень популярной в Ташкенте и пациенты очень довольны нашей обслугой!!!</p>
                <v-btn class="bg-pink-accent-1 py-2 px-2 mb-10 rounded-xl">Узнать об этом</v-btn>
            </div>
    </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
:root {
    --darkblue: #03256c;
    --blue: #2541b2;
    --greenblue: #1768ac;
    --lightblue: #06bee1;
}
 

.section {
    padding: 5px 20px;
}
</style>
