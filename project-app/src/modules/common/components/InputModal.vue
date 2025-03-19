<template>

<dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title  }}</h3>
      <p class="py-4" v-if="subtitle"> {{ subtitle }}</p>
      <div class="modal-action">
        <form method="dialog" @submit="submitValue">
            <input type="text"
            ref="inputRef"
            :placeholder="placeholder ?? 'inserte un valor'"
            
            v-model="inputValue"
            class="input input-bordered input-primary w-full flex-1">
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button @click="closeModal" type="button"  class="btn mr-4">Closein</button>
            <button type="submit" class="btn btn-primary"> Aceptar</button> 
          </div>
          
        </form>
      </div>
    </div>
</dialog>

<div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
>

</div>



</template>




<script setup lang="ts">

import {  ref, watch } from 'vue';


interface Props{
    open: boolean;
    placeholder?: string
    title: string
    subtitle?: string

}

const props = defineProps<Props>()

const emits = defineEmits<{
    close: [void]
    value: [text: string]
}>();

const inputValue = ref('')
const inputRef = ref<HTMLInputElement |null>(null)

watch( props,({open})=>{
    if (open ){
      
      inputRef.value?.focus();

    }
})

const closeModal = () => {
    console.log('pedro')
    emits('close')
    
}

const submitValue = () =>{
    
    if( !inputValue.value) {
        inputRef.value?.focus()
        return
    }

emits('value',inputValue.value.trim())
emits('close')

inputValue.value = ''
}



</script>