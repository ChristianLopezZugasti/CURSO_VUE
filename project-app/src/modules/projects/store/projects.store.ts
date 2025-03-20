import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Project,Task } from "../interfaces/project.interface";
import {v4 as uuidv4} from 'uuid'
import { useLocalStorage } from "@vueuse/core";



export const useProjectStore = defineStore('projects',()=>{
                                                                   //initialLoad()                        
    const projects = ref(useLocalStorage<Project[]>('projects', []))
    

    const addProject = (name:string) =>{
        if(name.length === 0 ) {
            return;}

        projects.value.push({
            id: uuidv4(),
            name: name,
            tasks: []
        })
    }

    const addTaskToPoject = (name:string,Projectid:string) => {
        const project = projects.value.find(p => p.id === Projectid);
      

        if(project){
            console.log('prueba1')
            if(name.length === 0){return;}
            //no se pone project.value
            project.tasks.push({
                id: uuidv4(),
                name: name,
                    
            })

            console.log(project.tasks)
        }

    }

    const toggleTask = (projectId: string,taskId: string) =>{
        const project = projects.value.find(p=>p.id === projectId)
        if(!project) return

        const task = project.tasks.find(t=> t.id === taskId)
        if(!task) return

        task.completedAt = task.completedAt ? undefined : new Date()
    }

    return { 
        //Properties
        projects,

        //Getters/ computed
        projectList: computed(()=> [... projects.value]),
        noProjects: computed(()=> projects.value.length === 0),
        projectsWithCompletion: computed(()=>{
           //Queremos regresar un arreglo 
            // const project = projects.value.map((project)=> ({ 
           //     id: project.id,
           //     name: project.name,
            //    task: project.tasks}))
             

            return projects.value.map ((project)=>{
                const total = project.tasks.length
                
                let taskCompleted = 0
                     project.tasks.forEach((t)=>{
                        if (t.completedAt){
                            taskCompleted++        
                        }
                    })

                const promedio = total > 0 ? (taskCompleted / total) * 100 : 0;

                    
                


                return {
                    id: project.id,
                    name: project.name,
                    taskCount: total,
                    completion: Math.round(promedio)//cuantas tareas estan completadas

                }
            })
        }),
        //Actions // metodos normalitos
        addProject,
        addTaskToPoject,
        toggleTask
    }
})