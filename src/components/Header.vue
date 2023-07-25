<template>
<div class="">

<!-- Header -->
<div class="header flex justify-between text-xl px-5 py-2 items-center">   
    <div class="img flex gap-3 items-center">
    <img class="max-h-[70px]" src="../assets/images/Снимок экрана 2023-06-21 232333.png" alt="">
    </div>
    <div class="flex gap-10 font-semibold text-gray-200">
        <ul>
            <li>
        <router-link :to="{ name: 'home' }" class="pages hover:text-[#06bee1]">Главная</router-link> 
            </li>
        </ul>
        <ul>
            <li>
        <router-link :to="{ name: 'about' }" class="pages hover:text-[#06bee1]">О нас</router-link>
            </li>
        </ul>
        <ul>
            <li>
        <router-link :to="{ name: 'services' }" class="pages hover:text-[#06bee1]">Сервисы</router-link>
            </li>
        </ul>
        <ul>
            <li>
        <router-link :to="{ name: 'doctors' }" class="pages hover:text-[#06bee1]">Докторы</router-link>
            </li>
        </ul>
        <ul>
            <li>
        <router-link :to="{ name: 'location' }" class="pages hover:text-[#06bee1]">Локация</router-link>
            </li>
        </ul>
    </div>
</div>

</div>
</template>

<script>
export default {
    data() {
        return {
        //   greenBlue: "#2541b2"
        }
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

.top {
    padding: 5px 20px;
}

.header {
    background-color: #03256c;
}

.pages {
    transition: 400ms;
}
</style>
