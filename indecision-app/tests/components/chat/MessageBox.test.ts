import MessageBox from "@/components/chat/MessageBox.vue";
import { mount } from "@vue/test-utils";
import { wrap } from "module";
import  { describe,test,expect} from "vitest";

describe('<MessageBox />',()=> {
    const wrapper = mount(MessageBox)

    test('renders input and button elemnts correcty',() => {
        

        expect(wrapper.html()).toMatchSnapshot();
        //esto de buscar el texto, es por medio de css
        expect( wrapper.find("input[type=text]").exists()).toBe(true);
        expect( wrapper.find("button").exists()).toBe(true);
        expect( wrapper.find("button svg").exists()).toBe(true);


    })
    //probamos los emits
    test("emits sendMessage evente when button is clicked with message value",async()=>{
        const message = "Hola Mundo" 

        await wrapper.find('input[type=text]').setValue(message)
        await wrapper.find('button').trigger('click');
        //este metodo regresa todo lo que se ha emitido
        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
        
        expect((wrapper.vm as any).message ).toBe('')
 
    })

    test("emits sendMessage evente when keypress.enter is triggered with message value",async()=>{
        const wrapper = mount(MessageBox)
     
        const input = wrapper.find('input')
        await input.trigger('keypress.enter')
        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted('sendMessage')).toBeFalsy();
        
       
    })


})


