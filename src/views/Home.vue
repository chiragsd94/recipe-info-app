<template>
<div>
    <div class="flex flex-wrap gap-1">
    <div class="p-2" v-for="letter in letters" :key="letter.letter">
        <div class="bg-cyan-500 m-1 p-2
                    rounded-xl 
                    shadow-lg shadow-cyan-700
                    hover:bg-red-500">
            <router-link
                :to="{name:'SearchMealsByLetter',
                params:{letter:letter}}">
                            {{ letter }}
            </router-link>
        </div>
    </div>
</div>
    <div>
        <MealList/>
    </div>        
</div>
</template>

<script setup>
import MealList from '../components/MealList.vue';
import { computed, ref } from 'vue';
const letters =ref(['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u','v','w',
'x','y','z'])
</script>
