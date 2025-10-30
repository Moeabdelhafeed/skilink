  <template>
    <div class="flex relative hover:scale-105 bg-white shadow-me  overflow-hidden text-center flex-col p-10 items-center gap-4 group border border-primary-foreground/10 rounded-3xl transition-all duration-300  rounded-3xl w-full h-[400px]">
    
    <div class="rounded-full bg-primary-foreground/5 relative flex items-center justify-center overflow-hidden w-[100px] h-[100px]">
       <div class="w-[30px] h-[30px] -mt-3 bg-primary-foreground/10 rounded-full">

       </div>

       <div class="rounded-t-full -mt-3 w-full h-[100px] bg-primary-foreground/10 absolute left-0 right-0 -bottom-17">

       </div>
    </div>
    <div class="flex flex-col gap-5">
        <span>

        <h3 class="text-2xl font-bold text-primary-foreground ">{{ founder.name }}</h3>
        <p class="text-md  ">{{ founder.role }}</p>
        
        </span>
        <p class="  text-primary-foreground/80 text-sm">{{ founder.bio }}</p>
    </div>

    <div class="  absolute bottom-0 w-full h-5 bg-primary group-hover:h-10 transition-all duration-300">
    
    </div>
   
    </div>
  </template>

<script setup>


defineProps({
  founder: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>