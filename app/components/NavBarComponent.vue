<template>
    <div :class="navClasses">
        <div class="container mx-auto px-4 md:px-20 lg:px-10 h-full w-full  max-w-[1150px]">
            <div class="flex justify-between items-center h-full w-full">

                <div class="flex  gap-6 items-center h-full justify-start"> 
                    <div>
                        <NuxtLink to="/">
                            <img src="/images/brand/dark_logo.png" alt="logo" :class="{'invert brightness-0': isDark}" class="w-20 object-center object-cover">
                        </NuxtLink>
                    </div>
                    <!-- Desktop Navigation - Custom buttons, hidden on mobile -->
                    <div class="hidden md:flex items-center gap-2">
                        <button type="button" :class="navLinkClass" @click.prevent="scrollToSection('about')">
                            About Us
                        </button>
                        <button type="button" :class="navLinkClass" @click.prevent="scrollToSection('services')">
                            Services
                        </button>
                        <button type="button" :class="navLinkClass" @click.prevent="scrollToSection('contact')">
                            Contact
                        </button>
                    </div>
                </div>
                    <!-- Desktop Contact Button - Hidden on mobile/tablet -->
                    <div class="flex gap-6 items-center h-full justify-end">
                    <!-- Desktop Contact Button -->
                    <div class="hidden md:flex">
                        <Button class="rounded-full" @click="scrollToSection('contact')">
                            Contact Us
                        </Button>
                    </div>
                    <!-- Mobile Navigation Drawer -->
                    <Sheet>
                        <SheetTrigger as-child>
                            <Button variant="ghost" size="icon" class="md:hidden">
                                <Menu :class="['h-6 w-6', isDark ? 'text-white' : 'text-foreground']" />
                                <span class="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        
                        <SheetContent side="left" :class="['w-[300px] sm:w-[350px]', 'border-none', isDark ? 'bg-primary-foreground text-white' : 'bg-white text-foreground']">
                            <div class="flex flex-col px-5 gap-6 mt-8">
                                <div class="pb-4 border-b ">
                                    <SheetClose as-child>
                                        <NuxtLink to="/">
                            <img src="/images/brand/dark_logo.png" alt="logo" :class="{'invert brightness-0': isDark}" class="w-30 object-center object-cover">
                        </NuxtLink>
                                    </SheetClose>
                                </div>
                                <SheetClose as-child v-for="item in navItems" :key="item.id">
                                    <button 
                                        type="button"
                                        :class="[navLinkClass, 'w-full text-left']"
                                        @click.prevent="handleMobileNavClick(item.id)"
                                    >
                                        {{ item.label }}
                                    </button>
                                </SheetClose>
                                <div class="pt-4 border-t">
                                    <SheetClose as-child>
                                        <Button class="w-full rounded-full" @click="handleMobileNavClick('contact')">
                                            Contact Us
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
const navClasses = computed(() => {
  const base = 'w-full h-[65px] fixed top-0 left-0 right-0 z-50 transition-all duration-300';
  const bg = isDark.value ? 'bg-primary-foreground' : 'bg-white';
  const border = y.value > 10 ? (isDark.value ? 'border-b border-white/10' : 'border-b border-black/10') : '';
  return [base, bg, border].join(' ');
})
import { Menu } from 'lucide-vue-next'
// removed NavigationMenu
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

const isDark = useState('isDark', () => true)

const {y} = useWindowScroll()

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId)
}

const navLinkClass = computed(() => {
  return [
    'px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-0',
    isDark.value ? 'text-white hover:text-white/90' : 'text-foreground hover:text-foreground/80'
  ].join(' ')
})
</script>

<style scoped>

</style>