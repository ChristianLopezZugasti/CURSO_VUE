
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue'
import {mount} from '@vue/test-utils'


describe('<PokemonPicure',()=>{
    
    const imageSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    test('should render the hidden image when showPokemon prop is fale',()=>{
        

        const wrapper = mount(PokemonPicture,
            {
                props:{ pokemonId:25,showPokemon:false}
            })

            console.log(wrapper.html())
            const image = wrapper.find('img')
            
            const attributes = image.attributes()

            expect(attributes).toEqual(
                expect.objectContaining({
                    class:'brightness-0 h-[200px]',
                    src:imageSource,
                })
            )
            
            //expect(image.attributes('src')).toBe(imageSource)

     })


     test('should render the hidden image when showPokemon prop is fale',()=>{
        
     })
})


