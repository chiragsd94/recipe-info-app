<template>
    <div>
        <div v-if="isLoading" class="text-center p-4">
      <p class="text-gray-500">Loading...</p>
    </div>
        <div v-else>
    <div class="flex flex-wrap"> 
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" 
        v-for="meal in mealsData" :key="meal.idMeal">
             {{ meal.strMeal }}
            <img :src="meal.strMealThumb" />
            <a class="bg-cyan-500 
                    m-0.5 p-0.5
                    rounded-xl 
                    shadow-lg 
                    shadow-cyan-700
                    hover:bg-red-500"
        :href="meal.strYoutube">Youtube</a>
        <ul>
            <li class="text-xl text-slate-500 m-2 p-2">Ingredients</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient1 }} {{ meal.strMeasure1 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient2 }} {{ meal.strMeasure2 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient3 }} {{ meal.strMeasure3 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient4 }} {{ meal.strMeasure4 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient5 }} {{ meal.strMeasure5 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient6 }} {{ meal.strMeasure6 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient7 }} {{ meal.strMeasure7 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient8 }} {{ meal.strMeasure8 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient9 }} {{ meal.strMeasure9 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient10 }} {{ meal.strMeasure10 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient11 }} {{ meal.strMeasure11 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient12 }} {{ meal.strMeasure12 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient13 }} {{ meal.strMeasure13 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient14 }} {{ meal.strMeasure14 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient15 }} {{ meal.strMeasure15 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient16 }} {{ meal.strMeasure16 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient17 }} {{ meal.strMeasure17 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient18 }} {{ meal.strMeasure18 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient19 }} {{ meal.strMeasure19 }}</li>
            <li class="m-1 text-sm text-slate-500">{{ meal.strIngredient20 }} {{ meal.strMeasure20 }}</li>
        </ul>
        <h1 class="text-lg mb-2 m-2 p-2 text-slate-500">Instructions</h1>
        <p class="text-sm text-slate-500 mt-2 mb-2 pt-2 pb-2">{{ meal.strInstructions }}</p>
        </div> 
        </div>
    </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMealStore } from '../stores/MealStore';

const props = defineProps(['letter']);
const store = useMealStore();
const mealsData=store.mealsData;
const l = props.letter
const isLoading = ref(true)

onMounted(async ()=>{
    await store.search(l);
    isLoading.value=false
})

</script>
