import { defineStore } from "pinia";
import axios from "axios";

export const useMealStore = defineStore("mealStore", {
  state: () => ({
    mealsData: [],
  }),
  getters: {
    mealsByLetter: (state) => (l) => {
      return state.mealsData.filter((meal) => meal.strMeal.startsWith(l));
    },
  },
  actions: {
    async mealSearchByName(mealName) {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

      const response = await axios.get(url);
      const meals = response.data.meals;
      this.mealsData = meals;
    },
    async search(l) {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${l}`;
      const response = await axios.get(url);
      const data = response.data.meals;
      this.mealsData = data;
    },
  },
});
