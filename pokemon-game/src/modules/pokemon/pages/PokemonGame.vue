

<template>
    <section v-if="isLoading" class="flex flex-col justify-enter items-center w-screen h-screen">
        <h1 class="text-3xL"> Espere por favor</h1>
        <h3 class="animate-pulse "> Cargando Pokemons  </h3>
    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5"> Quien es este pokemon?</h1>
        <div class="h-20">
            <button
            class="bg-amber-500  p-2 rounded-md hover:bg-amber-100 transition-all" 
            v-if="!(gameStatus === GameStatus.Playing)" @click="getNextRound(4)"> Volver a jugar</button>
        </div>
        
        <!-- Pokemon Picture-->
        <PokemonPicture :pokemon-id="Number(randomPokemon.id)" 
        :show-pokemon="!(gameStatus === GameStatus.Playing)"/>

        <!-- Pokemon Options-->
        <PokemonOptions 
        :options="options" 
        :block-selection="!(gameStatus === GameStatus.Playing)"
        :correct-answer="Number(randomPokemon.id)"
        @selected-option="checkAnswer"/>
    </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';


const { gameStatus,isLoading,randomPokemon,pokemonOptions:options,checkAnswer,getNextRound} = usePokemonGame();




</script>