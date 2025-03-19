import ChatBubble from "@/components/chat/chatBubble.vue"
import { describe,expect, test } from "vitest"
import { mount } from "@vue/test-utils"

describe('<ChatBubble />',() => {
    test('renders own message correctly',()=>{
        const message = 'Hola mundo'
        const wrapper = mount(ChatBubble,{
            props:{ message,itsMine: true},
        })
     //el mesnaje es mio 
        expect( wrapper.find(".bg-blue-200").exists()).toBe(true)
        expect( wrapper.find(".bg-blue-200").exists()).toBeTruthy()
        expect( wrapper.find(".bg-blue-200").text()).toContain(message)
        //esperamos que le msaneje no engo el color de cuanod no es mio
        expect( wrapper.find(".bg-blue-300").exists()).toBeFalsy()    
    })
    
    test('renders received message correctly',() =>{
        const message = 'Hola mundo'
        const wrapper = mount(ChatBubble,{
            props:{ message,itsMine: false},
        })
        //el mesnaje es mio 
        expect( wrapper.find(".bg-gray-300").exists()).toBe(true)
        expect( wrapper.find(".bg-blue-200").exists()).toBe(false)

        expect( wrapper.find(".bg-gray-300").text()).toContain(message)

        expect( wrapper.find("img").exists()).toBe(false)
        
        

    })

    test('renders received message correctly',() =>{
        const message = 'Hola mundo'
        const image = "http://example.jpg"
        const wrapper = mount(ChatBubble,{
            props:{ message,itsMine: false,image: image},
        })
        //el mesnaje es mio 
        expect( wrapper.find(".bg-gray-300").exists()).toBe(true)
        expect( wrapper.find(".bg-blue-200").exists()).toBe(false)

        expect( wrapper.find(".bg-gray-300").text()).toContain(message)
        expect( wrapper.find("img").exists()).toBe(true)
        expect(wrapper.find("img").attributes("src")).toContain(image)
        
        

    })

})