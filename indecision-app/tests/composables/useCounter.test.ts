
import { test,describe, expect } from "vitest";
import { useCounter } from '@/composables/useCounter'

describe('useCounter',()=>{
    test('inizializes counter with providede initial value',()=>{
    const initalValue = 10
    const { counter,squareCounter } = useCounter(initalValue)
    
    expect(counter.value).toBe(initalValue)
    expect(squareCounter.value).toBe(initalValue*initalValue)
    })


    test('inizializes counter with providede default value',()=>{
        const initalValue = 10
        const { counter,squareCounter } = useCounter()
        //el 5 se definio en ela rchivo composable 
        expect(counter.value).toBe(5)
        expect(squareCounter.value).toBe(25)
        })

    test('incrementes counter correctly', () => {

        const { counter,squareCounter } = useCounter()
        counter.value++;

        expect(counter.value).toBe(6);
        expect(squareCounter.value).toBe(36);
        

    })
})