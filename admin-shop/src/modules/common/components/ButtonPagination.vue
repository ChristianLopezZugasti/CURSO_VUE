
<template>
    <div class="flex justify-center py-10 bg-gray-100" space-x-3>
        <button 
        :disabled="page===1"
        @click="$router.push({ query: {page: page-1}})"
        class="flex items-center space-x-1.5 rounded-lg px-4 py-5 text-white bg-blue-500 disabled:bg-gray-300 hover:bg-blue-200 transition-all" >
            <ArrowLeftIcon/>
            <span>Anteriores</span>
        </button>

        <button 
        :disabled="hasmoreData"
        @click="$router.push({ query: {page: page+1}})"
        class="flex items-center space-x-1.5 rounded-lg px-4 py-5 text-white bg-blue-500 disabled:bg-gray-300 hover:bg-blue-200 transition-all">
            <span>Siguientes</span>
            <ArrowRightIcon/>
            
        </button>
    </div>


</template>

<script setup lang="ts">
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

interface Props {
    page:number
    hasmoreData: boolean
}

defineProps<Props>()

</script>
