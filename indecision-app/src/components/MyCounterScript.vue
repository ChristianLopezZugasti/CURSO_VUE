<template>
    <section>
      <h3> Counter: {{ counter }}</h3>
      <h3> Square: {{ squareCounter }}</h3>
      
    </section>
    <div>
      <button @click="addCounter">+1</button>
      <button @click="restCounter">-1</button>
    </div>
  </template>
  
  <!-- setup es el mismo meotodo que habiamos
   al momento de instanciar el objeto de app-->
  <script lang="ts" >
    import { useCounter } from '../composables/useCounter'
    import{ defineComponent,ref,computed} from 'vue';

    

    export default defineComponent({
      props:{
        value: {type:Number,required:true}
      },
      setup( props ){
        const {counter, texto, squareCounter,addCounter,restCounter} = useCounter(props.value);
    //    const counter = ref(props.value )
    //    const squareCounter = computed(() => counter.value * counter.value) 
        
    //    const addCounter = () => counter.value++
    //    const restCounter = () => counter.value--

        return {
          counter,
          squareCounter,
          addCounter,
          restCounter
        }
      }
    })
    

    //import { computed,ref } from "vue";
    //las props deben ser definidas antes de  que se usen 
    //const props = defineProps({
    //    value: { type:Number,required:true},
    //    texto: { type:String,required:true},

    //})
    
    //console.log("Hola mundo")
    //con ref la const es reactiva, dentro de setup, no se necesita retornar
    //const counter =ref(props.value);
    //const texto = ref(props.texto)

    //funcion
    //const addCounter = () => counter.value++
    //const restCounter = () => counter.value--

    //const squareCounter = computed(()=> counter.value * counter.value);
      
    
  
    </script>