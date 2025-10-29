<template>
    <div class=" w-full h-16  ">
        <div class="container mx-auto px-4 md:px-20 lg:px-10 h-full w-full  max-w-[1150px]">
            <div class="flex justify-between items-center h-full w-full">

                <div class="flex  gap-6 items-center h-full justify-start"> 
                    <div>
                        <NuxtLink to="/">
                            <img src="/images/brand/dark_logo.png" alt="logo" class="w-20 object-center object-cover">
                        </NuxtLink>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NuxtLink v-slot="{ isActive, href, navigate }" to="/about" custom>
                                    <NavigationMenuLink :active="isActive" :href="href" :class="navigationMenuTriggerStyle()" @click="navigate">
                                        About Us
                                    </NavigationMenuLink>
                                </NuxtLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NuxtLink v-slot="{ isActive, href, navigate }" to="/why-skilink" custom>
                                    <NavigationMenuLink :active="isActive" :href="href" :class="navigationMenuTriggerStyle()" @click="navigate">
                                        Why Skilink
                                    </NavigationMenuLink>
                                </NuxtLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NuxtLink v-slot="{ isActive, href, navigate }" to="/services" custom>
                                    <NavigationMenuLink :active="isActive" :href="href" :class="navigationMenuTriggerStyle()" @click="navigate">
                                        Services
                                    </NavigationMenuLink>
                                </NuxtLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                </NavigationMenu>
                </div>
                <div class="flex gap-6 items-center h-full justify-end">
                    <Button as-child>
                        <NuxtLink to="https://google.com" external>Contact Us</NuxtLink>
                    </Button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
</script>

<style scoped>

</style>