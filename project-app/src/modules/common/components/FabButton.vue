<template>
    <button @click="$emit('click')" :class="['btn btn-circle btn-secondary fixed',props.position]">
    <!-- Lo que sea que le mandemos en slot, se va  a mostrar -->
    <slot /> 
  </button>
</template>


<script lang="ts" setup>
interface Props{
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const props = withDefaults(defineProps<Props>(),{
    position: 'bottom-right'
})  

defineEmits(['click'])

</script>




<style scoped > 
 @reference "../../../assets/main.css"

    .top-left{
        @apply top-10 left-10;
}
    .top-right{
        @apply top-10 right-10;

    }
    .bottom-left{
        @apply bottom-10 left-10

    }
    .bottom-right{
        @apply bottom-10 right-10


    }
</style>

