import { useChat } from "@/composables/useChat";
import { describe,expect,test, vi } from "vitest";

describe('useChat',()=>{

    test('add message correctly when onMessage is called',async()=>{

        const text = 'Hola mundo'
        const { messages,onMessage } = useChat();

        await onMessage(text);

        expect(messages.value.length).toBe(1)
        expect(messages.value[0].itsMine).toBe(true)
        expect(messages.value[0].message).toBe(text)
        expect(messages.value[0]).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: text,
        })
        

    })

    test('add nothin correctly when onMessage is called',async()=>{

        const text = ''
        const { messages,onMessage } = useChat();

        await onMessage(text);

        expect(messages.value.length).toBe(0)
         

    })

    test('get her response correctly when message enst with ?',async()=>{
        const text = 'hola?'
        const { messages,onMessage} = useChat();

        await onMessage(text)

        await new Promise((r)=> setTimeout(r,2000))

        const [ myMessage,herMessage ] = messages.value

        expect(messages.value.length).toBe(2)
        expect(herMessage.itsMine).toBe(false)
        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: expect.any(String),
            message: expect.any(String),
            itsMine:false,
        })

        expect(myMessage).toEqual({
            id: expect.any(Number),
            message: expect.any(String),
            itsMine:true,

        })

    })

    test("mock response - feych api",async()=>{

       // const { messages,onMessage} = useChat()
        //const text = 'Quieres?'

       // const mockResponse = { answer:'yes', image:'example.gif'}

       // (window as any).fetch = vi.fn(async() => ({
       //     json:async() => mockResponse,
      //  }) );

        
        

      //  await onMessage(text)

       // await new Promise((r) => setTimeout(r,1600));

    })
})