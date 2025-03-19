import { onMounted, ref,computed } from "vue"
import { GameStatus, type Pokemon, type PokemonLIstResponse } from "../interfaces"
import { pokemonApi } from "../api/pokemonApi"
import PokemonOptions from "../components/PokemonOptions.vue"
import confetti from 'canvas-confetti'

export const usePokemonGame = () => {

    const gameStatus = ref<GameStatus>(GameStatus.Playing)
    const pokemons = ref<Pokemon[]>([])
    const pokemonOptions = ref<Pokemon[]>([])


    const randomPokemon = computed(()=> pokemonOptions.value[ Math.floor(Math.random()*pokemonOptions.value.length)])
    const isLoading = computed(()=> pokemons.value.length === 0
    )


    const getPokemons = async() :Promise<Pokemon[]> => {
        const response = await pokemonApi.get<PokemonLIstResponse>('/?limit=151')
        
        const pokemonArray  = response.data.results.map( pokemon => {
            //el id, esta hasta el ultimo
            const urlParts = pokemon.url.split('/')
            const id = urlParts[urlParts.length - 2] ?? 0
            return {
                name: pokemon.name,
                id: +id
            }
        })

        console.log(pokemonArray);

        return pokemonArray.sort(()=> Math.random()- 0.5 );
    }

    const getNextRound = (howMany: number = 4) => {
        gameStatus.value = GameStatus.Playing
        pokemonOptions.value = pokemons.value.slice(0,howMany)
        pokemons.value = pokemons.value.slice(howMany)

    }

    const checkAnswer = (id:number)=> {
        const hasWon = randomPokemon.value.id === id

        if (hasWon) {
            gameStatus.value = GameStatus.Won
            confetti({
                particleCount: 300,
                spread: 150,
                origin: {y:0.6}
            })
            return
        }
       
        gameStatus.value = GameStatus.Lost
    }

    onMounted(async()=>{
        
        pokemons.value = await getPokemons()
        getNextRound()
        
    })


    return {
        gameStatus,
        isLoading,
        pokemonOptions,

        //methods
        getNextRound,
        randomPokemon,
        checkAnswer
    }
}