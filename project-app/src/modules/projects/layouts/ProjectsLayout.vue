

<template>
    <div class="flex flex-col">
    <!-- Top Menu-->
     <TopMenu> </TopMenu>
    </div>

    <main class="flex flex-row">
        <!-- Side menu-->
         <SideMenu/>
        <RouterView/>     
    
    </main>
    
</template>


<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';

</script>