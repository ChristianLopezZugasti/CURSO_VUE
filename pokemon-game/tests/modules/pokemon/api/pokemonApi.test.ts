import {pokemonApi} from '@/modules/pokemon/api/pokemonApi'

describe('pokemonAPI',()=>{
    test('shoul be configurd as expect',()=>{
        const baseURL = "https://pokeapi.co/api/v2/pokemon"

        expect(pokemonApi.defaults.baseURL).toBe(baseURL)

    })
})