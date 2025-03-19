import type { Pokemon } from "@/modules/pokemon/interfaces"

describe('pokemonINterface',()=>{

const pokemon: Pokemon = {id:1, name:'bulbasur'}

    test('shoul have and id propery of type number',()=>{
       expect(pokemon.id).toEqual(expect.any(Number))

    })

    test('shoul have and id propery of type number',()=>{
        expect(pokemon.name).toEqual(expect.any(String))
        
     })
})