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
                        <Dialog>
                            <DialogTrigger as-child>
                                <button type="button" :class="navLinkClass">
                                    Contact
                                </button>
                            </DialogTrigger>
                            <DialogContent class="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-[#334c648c] border-white/[0.1]">
                                <div class="space-y-6">
                                    <div>
                                        <div class="space-y-6">
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <MapPin class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Location</p>
                                                    <p class="text-white text-base">Amman, Jordan</p>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Mail class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Email</p>
                                                    <a href="mailto:info@skilink.com" class="text-white hover:text-white transition-colors text-base">
                                                        info@skilink.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Phone class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Phone</p>
                                                    <a href="tel:+962770888911" class="text-white hover:text-white transition-colors text-base">
                                                        +962 7 7088 8911
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Globe class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Website</p>
                                                    <a href="https://www.skilink.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white transition-colors text-base">
                                                        www.skilink.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex gap-4 pt-4">
                                        <DialogClose as-child>
                                            <Button class="flex-1 rounded-full " size="lg" >
                                                Close
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                    <!-- Desktop Contact Button - Hidden on mobile/tablet -->
                    <div class="flex gap-6 items-center h-full justify-end">
                    <!-- Desktop Contact Button -->
                    <div class="hidden md:flex">
                        <Dialog>
                            <DialogTrigger as-child>
                                <Button class="rounded-full">
                                    Contact Us
                                </Button>
                            </DialogTrigger>
                            <DialogContent class="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-[#334c648c] border-white/[0.1]">
                                <div class="space-y-6">
                                    <div>
                                        <div class="space-y-6">
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <MapPin class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Location</p>
                                                    <p class="text-white text-base">Amman, Jordan</p>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Mail class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Email</p>
                                                    <a href="mailto:info@skilink.com" class="text-white hover:text-white transition-colors text-base">
                                                        info@skilink.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Phone class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Phone</p>
                                                    <a href="tel:+962770888911" class="text-white hover:text-white transition-colors text-base">
                                                        +962 7 7088 8911
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Globe class="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p class="font-semibold text-lg text-white">Website</p>
                                                    <a href="https://www.skilink.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white transition-colors text-base">
                                                        www.skilink.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex gap-4 pt-4">
                                        <DialogClose as-child>
                                            <Button class="flex-1 rounded-full " size="lg" >
                                                Close
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
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
                                        <Dialog>
                                            <DialogTrigger as-child>
                                                <Button class="w-full rounded-full">
                                                    Contact Us
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-[#334c648c] border-white/[0.1]">
                                                <div class="space-y-6">
                                                    <div>
                                                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                                                            Contact Us
                                                        </h2>
                                                        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                                                            <!-- Logo and Description -->
                                                            <div class="md:col-span-4">
                                                                <img src="/images/brand/light_logo.png" alt="Skilink Logo" class="w-24 filter invert brightness-0 mb-4 mx-auto md:mx-0">
                                                                <p class="text-white/80 leading-relaxed mb-4 text-center md:text-left">
                                                                    Skilink connects highly skilled professionals with forward-thinking companies across the globe. We simplify remote hiring and build reliable, distributed teams.
                                                                </p>
                                                                <p class="text-white/60 text-sm text-center md:text-left">
                                                                    Founded in July 2023
                                                                </p>
                                                            </div>

                                                            <!-- Quick Links -->
                                                            <div class="md:col-span-3">
                                                                <h3 class="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h3>
                                                                <ul class="space-y-3">
                                                                    <li>
                                                                        <button @click="scrollToSection('about')" class="text-white/80 hover:text-white transition-colors block text-center md:text-left">
                                                                            About Us
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button @click="scrollToSection('who-we-are')" class="text-white/80 hover:text-white transition-colors block text-center md:text-left">
                                                                            Who We Are
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button @click="scrollToSection('services')" class="text-white/80 hover:text-white transition-colors block text-center md:text-left">
                                                                            Services
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button @click="scrollToSection('founding-team')" class="text-white/80 hover:text-white transition-colors block text-center md:text-left">
                                                                            Our Team
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <!-- Contact Information -->
                                                            <div class="md:col-span-5">
                                                                <h3 class="text-lg font-semibold mb-4 text-center md:text-left">Contact Information</h3>
                                                                <div class="space-y-4">
                                                                    <div class="flex items-start gap-3">
                                                                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                            <MapPin class="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <p class="font-medium">Location</p>
                                                                            <p class="text-white/80">Amman, Jordan</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex items-start gap-3">
                                                                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                            <Mail class="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <p class="font-medium">Email</p>
                                                                            <a href="mailto:info@skilink.com" class="text-white/80 hover:text-white transition-colors">
                                                                                info@skilink.com
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex items-start gap-3">
                                                                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                            <Phone class="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <p class="font-medium">Phone</p>
                                                                            <a href="tel:+962770888911" class="text-white/80 hover:text-white transition-colors">
                                                                                +962 7 7088 8911
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex items-start gap-3">
                                                                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                            <Globe class="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <p class="font-medium">Website</p>
                                                                            <a href="https://www.skilink.com" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white transition-colors">
                                                                                www.skilink.com
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Bottom Bar -->
                                                        <div class="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                                                            <p class="text-white/60 text-sm text-center md:text-left">
                                                                © {{ new Date().getFullYear() }} Skilink. All rights reserved.
                                                            </p>
                                                            <div class="flex gap-6 text-sm">
                                                                <a href="#" class="text-white/80 hover:text-white transition-colors">
                                                                    Privacy Policy
                                                                </a>
                                                                <a href="#" class="text-white/80 hover:text-white transition-colors">
                                                                    Terms of Service
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="flex gap-4 pt-4">
                                                        <DialogClose as-child>
                                                            <Button class="flex-1 rounded-full " size="lg" >
                                                                Close
                                                            </Button>
                                                        </DialogClose>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
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
import { Menu, MapPin, Mail, Phone, Globe } from 'lucide-vue-next'
// removed NavigationMenu
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

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
  if (sectionId !== 'contact') {
    scrollToSection(sectionId)
  }
  // Contact is handled by the dialog, so no action needed here
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