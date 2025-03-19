//se puede retornar lo que quiera 
import { ref,computed } from 'vue';

export const useCounter = (initalValue: number=5) => {
    


    const counter =ref(initalValue);
    const texto = ref("pedro")

    //funcion
    const addCounter = () => counter.value++
    const restCounter = () => counter.value--

    const squareCounter = computed(()=> counter.value * counter.value);
      

    return{
        counter,
        texto,
        addCounter,
        restCounter,
        squareCounter
        

    }
}