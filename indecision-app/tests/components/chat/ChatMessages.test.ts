import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { mount } from "@vue/test-utils";
import { describe,test,expect,vi } from "vitest";

const messages: ChatMessage[] = [
    {id:1,message:'hola',itsMine:true},
    {id:2,message:'hola',itsMine:false,image:"https://hola-mundo.jpg"}
]



describe('<ChatMessages',()=>{
    const wrapper = mount(ChatMessages,{
        props:{ messages}
    })
    
    test('renders chat messages correctly',()=>{
        
        //guardamos las instancias del componente chatBubbles
        const chatBubbles = wrapper.findAllComponents({name:'ChatBubble'})

        expect( chatBubbles.length).toBe(messages.length)

    })

    //test('scroll down to the bottom after messages update',async()=>{
        
    //    const scrollToMock = vi.fn();
        //Quiero la referencia a la esa madre, en este caso solo tenemos el chatref
    //    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement
        //esta es la que tiene la funcion 
    //    chatRef.scrollTo = scrollToMock

    //    await wrapper.setProps({
    //        messages: [...messages,{id:3,message:"hola",itsMine:true}]
    //    })

        

    //    await new Promise((r)=> setTimeout(r,250))

        //expect(scrollToMock).toHaveBeenCalledTimes(1);
    //    expect(scrollToMock).toHaveBeenCalledWith({
    //        behavior:"smooth",
    //        top: expect.any(Number)

    //    });
   // })

   
})