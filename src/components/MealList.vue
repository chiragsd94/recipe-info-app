<template>
  <div>
    <div v-if="isLoading" class="text-center p-4">
      <p class="text-gray-500">Loading...</p>
    </div>
    <div v-else>
      <div class="flex flex-wrap">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          v-for="meal in meals"
          :key="meal.idMeal"
        >
          <!-- Card container -->
          <div
            class="h-96 flex flex-col gap-2 shadow-xl shadow-cyan-700 rounded-xl p-2 m-2"
          >
            <h1 class="text-lg text-slate-500">{{ meal.strMeal }}</h1>
            <img
              :src="meal.strMealThumb"
              class="h-40 w-full object-cover rounded"
            />
            <a
              class="bg-cyan-500 m-0.5 p-0.5 rounded-xl shadow-lg shadow-cyan-700 hover:bg-red-500 text-center"
              :href="meal.strYoutube"
            >
              Youtube
            </a>

    

            
            <!-- Ingredients -->
            <ul class="overflow-y-auto flex-1">
              <li class="text-xl text-slate-500 m-2">Ingredients</li>
              <li v-for="i in 20" :key="i" class="m-1 text-sm text-slate-500">
                {{ meal['strIngredient' + i] }} {{ meal['strMeasure' + i] }}
              </li>
            </ul>
            <!-- Instructions -->
            <h1 class="text-lg text-slate-500">Instructions</h1>
            <p class="text-sm text-slate-500 overflow-y-auto">
              {{ meal.strInstructions }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const meals = ref([]);
const isLoading = ref(true);

const onLoadData = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
  const data = await axios.get(url);
  meals.value = data.data.meals;
};

onMounted(async () => {
  await onLoadData();
  isLoading.value = false;
});
</script>
