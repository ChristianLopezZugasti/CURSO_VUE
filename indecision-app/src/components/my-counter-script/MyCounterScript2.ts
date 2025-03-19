//con este archivo estamos sepranado la logica 

import{ defineComponent,ref,computed} from 'vue';

    export default defineComponent({
      props:{
        value: {type:Number,required:true}
      },
      setup( props ){

        const counter = ref(props.value )
        const squareCounter = computed(() => counter.value * counter.value) 
        
        const addCounter = () => counter.value++
        const restCounter = () => counter.value--

        return {
          counter,
          squareCounter,
          addCounter,
          restCounter
        } 
      }
    })