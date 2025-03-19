<template>
    <IndecisionApp/>
  
</template>

<!-- setup es el mismo meotodo que usamos
 al momento de instanciar el objeto de app-->
<script lang="ts" setup>

import IndecisionApp from './views/indecisionView.vue'

</script>

<!-- Recoradrotio de como llamar a un compoennete
 se esta utilizando v-bind  y props, para pasar nuestro valor del 
 padre al hijo 
<Mycounter :value="10" texto="Hola mundo" />
-->
