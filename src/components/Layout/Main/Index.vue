<template>
    <div>
       <main-header/>
        <main-navigator/>
        <slot/>
        <main-footer/> 
    </div>
</template>

<script>
import MainHeader from '@/components/Layout/Main/Header.vue';
import MainFooter from '@/components/Layout/Main/Footer.vue';
import MainNavigator from '@/components/Layout/Main/Navigator.vue';

export default ({
    components: {
        MainHeader, MainFooter, MainNavigator
    }
})
</script>
