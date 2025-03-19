import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import IndecisionView from "@/views/indecisionView.vue";
import { mount } from "@vue/test-utils";
import  { test,describe, expect } from "vitest";

const mockChatMessages = {
    template:'<div data-testid="mock-messages>Mock ChatMessages</div>'
}


describe('<IndecisionView />',()=>{
    test("renders chat messages an messageBox corectly",()=>{
        const wrapper = mount(IndecisionView)

        expect(wrapper.html()).toMatchSnapshot();
        //es mejor comprobar que existe, a que sea igual al sanphot como arriba
        expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
        expect(wrapper.findComponent(MessageBox).exists()).toBe(true)
    })

    test("Calls onMessage when sending a message",async()=>{
        const wrapper = mount(IndecisionView,{
            global:{
                stubs:{
                    ChatMessages:mockChatMessages
                }
            }
        })
        //simular el evento personalizado
        const messageBoxComponent = wrapper.findComponent(MessageBox) 

        messageBoxComponent.vm.$emit('sendMessage','Hola mund')

        await new Promise(r => setTimeout(r,150))
    })


})