<template>
    <div v-if="loading" ref="loading" class="fixed inset-0  z-[999] grid grid-cols-3 md:grid-cols-5 ">
        
        <div ref="loading1" class="col-span-1 bg-foreground  "></div>
        <div ref="loading2" class="col-span-1 bg-foreground ">
            <ImageLoading class="md:hidden block" />
        </div>
        <div ref="loading3" class="col-span-1 flex justify-center items-center bg-foreground">
            <ImageLoading class="hidden md:block" />
            </div>
        <div ref="loading4" class="col-span-1 bg-foreground hidden md:block "></div>
        <div ref="loading5" class="col-span-1 bg-foreground hidden md:block "></div>
    </div>
</template>

<script setup>

const loading = ref(true)
const loading1 = ref(null)
const loading2 = ref(null)
const loading3 = ref(null)


const loading4 = ref(null)

const loading5 = ref(null)

onMounted(async () => {
  await nextTick()

  const tl = useGSAP().timeline()

  tl.delay(1)

  tl.to(loading5.value, {
    y: -1000,
    duration: 1,
    
    ease: "power2.inOut",
  })
  tl.to(loading4.value, {
    y: -1000,
    duration: 1,
    ease: "power2.inOut",
  },"<0.1")
  tl.to(loading3.value, {
    y: -1000,
    duration: 1,
    ease: "power2.inOut",

  },"<0.2")
  tl.to(loading2.value, {
    y: -1000,
    duration: 1,
    ease: "power2.inOut",
  },"<0.3")
  tl.to(loading1.value, {
    y: -1000,
    duration: 1,
    ease: "power2.inOut",
  },"<0.4")

  tl.call(() => {
    loading.value = false
  })
})




</script>

<style  scoped>

.loading-pulse {
  animation: pulseOpacity 1.5s ease-in-out infinite;
}

@keyframes pulseOpacity {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

</style>