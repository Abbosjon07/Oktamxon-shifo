<template>
    <div class="">
     <div class="text-center">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
          class="my-3"
        >
          Языки 👅
        </v-btn>
      </template>

      <v-list>
          <v-list-item-title class="my-2 text-center mx-4 my-4"> 
              <div class="text-xl font-semibold text-gray-500">
              <h2>Я очень ленивый!!!😜😜😜</h2>
              <h2>Сами переводите этот сайт😉😉😉</h2>
              <h2>Мне мало заплотили😢😢😢</h2>
              </div>     
          </v-list-item-title>
      </v-list>
    </v-menu>
  </div>
    </div>
</template>

<script>
export default {
data() {
    return {
     location: 'end',   
    }
}
}
</script>

<style>

</style>
