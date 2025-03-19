import { describe, test,expect } from 'vitest'
import Mycounter from "@/components/MyCounter.vue"
import {mount} from '@vue/test-utils'


//nos falta montar el componente, para eso usamos test utils 

describe('<Mycounter />',()=> {
    test('should match snapshot',()=>{
        const wrapper = mount(Mycounter,{
            props:{
                value: 5,
            }
        })
        //el snapshot, es una foto de como esta el html 
        //en caso de cambios, detecta lo que habia, y lo qye hay nuevo
        //uno de las cosas es que noe tamos pobnaod el componente como tal
        //solo vemos que sea igual 
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('renders the ounter value correctly',()=>{
        const value = 10
        const wrapper = mount(Mycounter,{
            props:{
                value: value,
            }
        })
        //encuentra y devuelve el primero que ecnutra
        const [ counterLabel, squareLabel] = wrapper.findAll('h3')

        expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`)
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${value* value}`)
        
        expect(counterLabel.text()).toContain(`Counter: ${value}`)
        expect(squareLabel.text()).toContain(`Square: ${value*value}`)
    })

    test('Incremente the counter +1 when button is clicked'), async()=>{
        const value = 10
        const wrapper = mount(Mycounter,{
            props:{
                value: value,
            }
        });
        const [ counterLabel, squareLabel] = wrapper.findAll('h3')
        
        const btnIcrement = wrapper.find('button');
        //esperamos el evento del click, se recomeinda que sea una promesa
        await btnIcrement.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value+1}`)
        expect(squareLabel.text()).toContain(`Square: ${(value+1)*(value+1)}`)

    }

    test('Decrements the counter +1 when button is clicked'), async()=>{
        const value = 5
        const wrapper = mount(Mycounter,{
            props:{
                value: value,
            }
        });
        const [ counterLabel, squareLabel] = wrapper.findAll('h3')
        
        const [,btnDecremnt] = wrapper.findAll('button');
        //esperamos el evento del click, se recomeinda que sea una promesa
        await btnDecremnt.trigger('click');
        //simlamos 2 clicks
        await btnDecremnt.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value-2}`)
        expect(squareLabel.text()).toContain(`Square: ${(value-2)*(value-2)}`)

    }
})

