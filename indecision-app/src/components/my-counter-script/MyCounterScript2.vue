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
  <script 
    lang="ts"
    src="./MyCounterScript2" >
  
  </script>