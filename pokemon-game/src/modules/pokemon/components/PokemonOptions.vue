


<template>
    <head>
        <link href="/src/styles.css" rel="stylesheet">
        
    </head>
    
    <section  class="mt-5 flex flex-col" >
        <button v-for="{name,id} in options" 
        :key="Number(id)"
        @click="$emit('selectedOption',Number(id))"
        :class="[
            'capitalize disabled:shadow-none disabled:bg-gray-100',
        {
            correct:id === correctAnswer && blockSelection,
            incorrect: !(id === correctAnswer && blockSelection)

        },
        ]"
        :disabled="blockSelection">
    
            {{ name }}
        </button>
    </section>
</template>


<script setup lang="ts">
import type { Pokemon  } from '../interfaces';
import tailwindcss from '@tailwindcss/vite'


interface Props {
        options: Pokemon[],
        blockSelection: boolean,
        correctAnswer: number
}

const props = defineProps<Props>()

defineEmits<{
    selectedOption : [id:number ]
}>()


</script>

<style scoped >
@import "tailwindcss";

button{
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-50;
}

.correct{
    @apply bg-blue-500 text-white
}

.incorrect{
    @apply bg-red-100 opacity-70
}

</style>