<template>
<ClientOnly>
    <Dialog>
        <DialogTrigger as-child>
            <CardContainer class="cursor-pointer">
                <CardBody
                    class="group/card relative w-full h-max rounded-xl border border-white/[0.1] bg-[#334c648c] md:p-6 p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] flex flex-col"
                >
                    <CardItem
                    :translate-z="50"
                    class="text-xl md:text-2xl font-bold text-white dark:text-white"
                    >
                    {{ title }}
                    </CardItem>
                    <CardItem
                    as="p"
                    translate-z="60"
                    class="mt-3 w-full text-sm md:line-clamp-2 line-clamp-1 md:text-base text-white/70 dark:text-white leading-relaxed"
                    >
                    {{ description }}
                    </CardItem>
                    <CardItem
                    :translate-z="100"
                    class="mt-6 md:h-[400px] h-[150px] w-full "
                    >
                    <img
                        :src="image"
                        class="h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        :alt="title"
                    />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </DialogTrigger>
        
        <DialogContent class="max-w-3xl max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-[#334c648c] border-white/[0.1]">
            <div class="space-y-6">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        {{ title }}
                    </h2>
                    <div class="h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden">
                        <img
                            :src="image"
                            class="h-full w-full object-cover"
                            :alt="title"
                        />
                    </div>
                </div>
                
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-white">Overview</h3>
                    <p class="text-base md:text-lg text-white/70 leading-relaxed">
                        {{ description }}
                    </p>
                    
                    <div v-if="details" class="space-y-3">
                        <h3 class="text-xl font-semibold text-white">More Information</h3>
                        <p class="text-base text-white/70 leading-relaxed whitespace-pre-line">
                            {{ details }}
                        </p>
                    </div>
                </div>
                
                <div class="flex gap-4 pt-4">
                    <DialogClose as-child>
                        <Button class="flex-1 rounded-full " size="lg" >
                            Close
                        </Button>
                    </DialogClose>
                    <Button variant="outline" class="flex-1 rounded-full" size="lg">
                        Contact Us
                    </Button>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</ClientOnly>
</template>

<script setup lang="ts">
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  image?: string;
  details?: string;
}

const props = withDefaults(defineProps<Props>(), {
  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
});
</script>