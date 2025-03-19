import { sleep } from "@/helpers/sleep";
import type { ChatMesage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";

import { ref } from "vue";

export const useChat = () => {

    //es un arreglo de chatMessage, donde vamos a almacenar esas cosas
    const messages = ref<ChatMesage[]>([ ]);
  
    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api')
        const data = (await resp.json()) as YesNoResponse;

        return data;
    }


  const onMessage = async(text: string) =>{
    if(text.length ===  0 ) return ;
    
    messages.value.push({
      id: new Date().getTime(),
      itsMine:true,
      message: text,
    })

    //evaluar si termina con ?
    if ( !text.endsWith('?'))   return ;

    await sleep(1.5); 

    const {answer,image } = await getHerResponse();

    messages.value.push({
        id: new Date().getTime(),
        itsMine:false,
        message: answer,
        image: image

      })
  }
  
//aqui va lo qu vamos a exponer 
    return {
        //properties
        messages,

        //methods
        onMessage,

    }
}