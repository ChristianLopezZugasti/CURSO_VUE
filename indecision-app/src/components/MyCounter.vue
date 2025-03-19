<template>
    <section>
      <h3> Counter: {{ counter }}</h3>
      <h3 data-testid="square-label"> Square: {{ squareCounter }}</h3>
      <h4> {{ texto }}</h4>
    </section>
    <div>
      <button class="btm" @click="addCounter">+1</button>
      <button class="btm" @click="restCounter">-1</button>
    </div>
  </template>
  
  <!-- setup es el mismo meotodo que habiamos
   al momento de instanciar el objeto de app-->
  <script lang="ts" setup>

  import { useCounter } from '../composables/useCounter'

  const {counter, texto, squareCounter,addCounter,restCounter} = useCounter(10);

  //----------SIN COMPOSABLE------------------------
    //import { computed,ref } from "vue";
    
    //las props deben ser definidas antes de  que se usen 
    //const props = defineProps({
    //    value: { type:Number,required:true},
    //    texto: { type:String,required:true},

    //})
    
   
    //con ref la const es reactiva, dentro de setup, no se necesita retornar
   // const counter =ref(props.value);
    //const texto = ref(props.texto)

    //funcion
    //const addCounter = () => counter.value++
    //const restCounter = () => counter.value--

    //const squareCounter = computed(()=> counter.value * counter.value);
      
    
  
    </script>

  