<template>
    <div class="w-full"> 
        <section>
            <BreadCrumbs :name="project?.name ?? 'No name '"/>

        </section>
        <section class="m-2">
            <div class="overflow-x-auto">
            <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th class="w-14"> Completada</th>
                <th>Tarea</th>
                <th>Compleata en </th>
            </tr>
            </thead>
            <tbody>
            <!-- rows -->
            <tr class="hover:bg-base-300" v-for="task in project?.tasks" :key="task.id">
                <th>
                    <input
                    type="checkbox"
                    :checked="!!task.completedAt"
                    class="checkbox checkbox-primary"
                    @change="projectStore.toggleTask(project?.id ?? '',task.id)"/>
                </th>
                <!--:checked="!!task.completedAt" 
                La property completedAt, es un string, fecha, y lo que necesitamos 
                es un valor booleano, por lo que con la primera negacion probamos si no existe,
                //y si tiene un valor, que sea true, por eso es la otra negacion 
                -->
                <td>{{ task.name }}</td>
                <td>{{ task.completedAt }}</td>
                
            </tr>

            <tr class=" hover:bg-fuchsia-200 ">
                <th></th>
                <td colspan="4">
                   <input type="text"
                   class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100 "
                   placeholder="Nueva Tarea"
                   v-model="newTask"
                   @keyup.enter="addTask"
                   
                    
                   >
                    <!-- ASI LO HICEYO 
                   @keydown.enter="projectStore.addTaskToPoject(newTask ?? '',props.id)" -->
                    
                </td>
            </tr>
            
                </tbody>
            </table>
            </div> 
        </section>

    </div>
    
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';


//forma de obtemner el url. 
//const route = useRoute()
//console.log(route.params.id)

//Vamos a usar interfaces

interface Props {
    id: string
}

const router = useRouter()

const props = defineProps<Props>()
const projectStore = useProjectStore()
//find regresa un elemento de un arreglo que cumpla con una condicion, recibe como parametro una 
//funcion,con un parametro para cada elemento del arreglo.  y retorna untrue o false

const project = ref<Project| null>()
const newTask = ref('')

const addTask = () =>{
    if(!project.value) return;

    projectStore.addTaskToPoject(project.value.id,newTask.value)
    newTask.value = ''
}



//const project = projectStore.projectList.find(project => project.id === props.id)
//el wacth esta pendinete del props.id, y despues de la coma, va la "funcion", que queremos
//ejecutar cuando se vea un cambio en esta property
watch(
    ()=> props.id, 
    ()=>{
    project.value = projectStore.projectList.find(project => project.id === props.id)
    if(!project.value){
        router.replace('/')
    }
},
{
    immediate: true //en cuanto se cargue el compomente ejecuta el watxh 
} 
)

</script>