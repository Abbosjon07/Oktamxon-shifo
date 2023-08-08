<template>
<div class="">

<!-- Header -->
<div class="header flex justify-between text-xl px-5 py-2 items-center">   
    <div class="img flex gap-3 items-center">
    <img class="max-h-[70px]" src="../assets/images/Снимок экрана 2023-06-21 232333.png" alt="">
    </div>
    <!-- 

    </div> -->
    <v-menu class="">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Menu
          <i class="fa-solid fa-bars ml-3"></i>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
    
        >
          <v-list-item-title>
              <div class="font-semibold text-gray-500 text-center">
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
        <div>
        <!-- LANGUAGE -->
        <Languages/>
        <!-- LANGUAGE -->
        </div>
        </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
</div>
    
</div>
</template>

<script>
import Languages from './Languages.vue'

export default {
    components: {
      Languages  
    },
    
    data() {
        return {
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        ],
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
