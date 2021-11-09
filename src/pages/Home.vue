<template>
    <main-layout>
        <list-table>123</list-table>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/Layout/Main/Index.vue';
import ListTable from '@/components/Lists/List.vue';

export default({
    name: 'Home',
    components: {
        MainLayout,
        ListTable
    }
})
</script>
