<template>
    <div>
        <main-header/>
        <main-navigator/>
        <slot/>
        <main-footer/> 
    </div>
</template>

<script>
import  MainHeader  from '@/components/Layout/Sub/Header.vue';
import  MainFooter  from '@/components/Layout/Sub/Footer.vue';
import  MainNavigator  from '@/components/Layout/Sub/Navigator.vue';


export default ({
    components: {
        MainHeader,
        MainFooter,
        MainNavigator
    }
})
</script>

<style scoped>

.header {
    display: block;
}

</style>
