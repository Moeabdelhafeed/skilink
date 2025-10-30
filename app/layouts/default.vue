<template>
    <Html class="selection:bg-primary-foreground/20 selection:text-primary-foreground scrollbar-thin scrollbar-thumb-primary-foreground scrollbar-track-transparent overflow-x-hidden">

    <Loading />
    <div class="selection:bg-primary-foreground/20 selection:text-primary-foreground scrollbar-thin scrollbar-thumb-primary-foreground/20 scrollbar-track-transparent overflow-x-hidden">
        <NavBarComponent />
        <NuxtPage />
        <FooterComponent />
    </div>
    </Html>
</template>

<script setup>

const loading = ref(true)


</script>

<style  scoped>

</style>