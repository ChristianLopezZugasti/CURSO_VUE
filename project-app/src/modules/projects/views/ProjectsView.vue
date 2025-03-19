<template>
    <div class="overflow-x-auto w-full">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Proyecto</th>
        <th>Tareas</th>
        <th>Avance</th>
      </tr>
    </thead>
    <tbody>
      
      <tr v-for="(project,index) in projectStore.projectList" :key="project.id" class="hover:bg-base-300">
        <th>{{  index +1 }}</th>
        <td>{{ project.name }}</td>
        <td>{{ project.tasks.length }}</td>
        <td>
          <progress class="progress progress-primary w-56" value="70" max="100"></progress>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
  <!--close es el emit, es el evento que emite
  cuando se emita close, se hace una madre,en este caso se pone el valor 
  de  -->
  <InputModal 
  :open="modalOpen" 
  @close="modalOpen = false" 
  @value="projectStore.addProject"
  placeholder="Ingrese el nombre del proyecto"
  title="Nuevo proyecto"
  subtitle="Dale un nombre unico a tu proyecto W"/> 

  <CustomModal :open="customModalOpen ">
    <template #header>
      <h1> Titulo del modal</h1>
    </template>

    <template #body>
      <p> Body texto</p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button   class="btn mr-4">Closein</button>
        <button class="btn btn-primary"> Aceptar</button> 
      </div>
    </template>
  </CustomModal>

  <FabButton @click="modalOpen = true" position="top-right"> 
    <AddCircle/>
  </FabButton>

  <FabButton @click="customModalOpen = true" position="bottom-left"> 
    <ModalIcon/> 
  </FabButton> 
</template>


<script lang="ts" setup>
import {  ref } from 'vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle  from '@/modules/common/icons/AddCircle.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { useProjectStore } from '../store/projects.store';


const modalOpen = ref(false)
const customModalOpen = ref(false)

const projectStore = useProjectStore()




</script>