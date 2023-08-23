<template>
    <div> 
      <MealByLetter :letter="letter" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import MealByLetter from '../components/MealByLetter.vue';
  
  const route = useRoute();
  const letter = route.params.letter;
  </script>
  