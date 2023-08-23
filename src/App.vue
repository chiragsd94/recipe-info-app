<template>
  <div class="flex justify-between mt-3 pb-2 pt-2 mb-5">
  <div>
  <router-link class="bg-yellow-500 m-2 p-2 rounded rounded-xl hover:bg-red-500" :to="{name:'home'}">Home</router-link>
  <router-link class="bg-yellow-500 m-2 p-2 rounded rounded-xl hover:bg-red-500" :to="{name:'about'}">About</router-link>
</div>
<div>
  <router-link class="text-orange-500 text-xl hover:bg-red-500 " :to="{name:'home'}">Meals</router-link>
</div>
<div>
  <router-link class="bg-yellow-500 m-2 p-2 rounded rounded-xl hover:bg-red-500" :to="{name:'SearchMealByName'}">search</router-link>
</div>
</div>
  <RouterView/>
</template>
