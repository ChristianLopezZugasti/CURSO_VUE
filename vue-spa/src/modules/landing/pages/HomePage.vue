<template>
    
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
          Bienvenido a nuestro sitio web
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p> {{ counter }}</p>
        <button @click="counter++"> +1 </button>
      </div>
    </main>
</template>

<script  setup lang="ts" >
import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTriggered, onUnmounted, onUpdated, ref } from "vue";



        const counter = ref(0)
        
        onMounted(()=> {
            console.log('onMounted')
        })
        onUpdated(()=>{
            console.log('onUpdated')
        })
        onUnmounted(()=>{
          console.log('onUNMOUNTED')
        })
        onBeforeMount(()=>{
          console.log('onBeforeMount')
        })
        onBeforeUnmount(()=>{
          console.log('onBeforeUnMount')
        })
        onBeforeUpdate(()=>{
          console.log('onBeforeUpdated')
        })
        onErrorCaptured(()=>{
          console.log('onErrorCaptured')
        })
        onRenderTriggered(()=>{
          console.log('OnRennderTriggered')
        })
        onActivated(()=>{
          console.log('onActivided')
        })
        onDeactivated(()=>{
          console.log('onDeactivided')
        })

       

</script>