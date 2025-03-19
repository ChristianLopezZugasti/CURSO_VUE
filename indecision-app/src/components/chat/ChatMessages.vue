

<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->
          <ChatBubble
          v-for="message in messages"
          :key="message.id"
          v-bind="message"
          />
          <!--
          ES LO MISMO QUE LO DE ARRIBA;
          automatitacmente se llenan todas las variables
            :its-mine="message.itsMine" 
          :message="message.message"
          :image="message.image"

          -->
          
            
        </div>
      </div>

</template>


<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './chatBubble.vue';

interface Props{
    messages: ChatMessage[]
}
//esto lo defino asi porque se definio la interfaza
//pero si eres normal, pues dentro de esta funcion, viene un objeto 
//con las props 
//const  { messages } = defineProps<Props>()

//NO PODEMOS PASAR EL PROPS DIRECTAMENTE,desestructurado
//como esta arriba, lo que pasamos es la referencia completa
//y al final hacemos referencia al atributos messages

const messagesComplete = defineProps<Props>();
     
const chatRef = ref<HTMLDivElement | null>(null);
      
     watch(messagesComplete.messages, () => {
       setTimeout(() => {
         chatRef.value?.scrollTo({
           top: chatRef.value.scrollHeight,
           behavior: 'smooth',
         });
       }, 100);
     }); 




</script>