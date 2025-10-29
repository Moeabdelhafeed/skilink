<template>
  <footer id="contact" class="bg-primary-foreground text-white">
    <div class="container mx-auto px-4 md:px-20 lg:px-10 py-12 md:py-16 max-w-[1150px]">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <!-- Logo and Description -->
        <div class="md:col-span-4">
          <NuxtLink to="/" @click.prevent="scrollToSection('home')">
            <img src="/images/brand/light_logo.png" alt="Skilink Logo" class="w-24 filter invert brightness-0 mb-4">
          </NuxtLink>
          <p class="text-white/80 leading-relaxed mb-4">
            Skilink connects highly skilled professionals with forward-thinking companies across the globe. We simplify remote hiring and build reliable, distributed teams.
          </p>
          <p class="text-white/60 text-sm">
            Founded in July 2023
          </p>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-3">
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#about" @click.prevent="scrollToSection('about')" class="text-white/80 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#who-we-are" @click.prevent="scrollToSection('who-we-are')" class="text-white/80 hover:text-white transition-colors">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#services" @click.prevent="scrollToSection('services')" class="text-white/80 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#founding-team" @click.prevent="scrollToSection('founding-team')" class="text-white/80 hover:text-white transition-colors">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div class="md:col-span-5">
          <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
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
  </footer>
</template>

<script setup>
import { MapPin, Mail, Phone, Globe } from 'lucide-vue-next'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Scroll up a bit to account for fixed navbar
    window.scrollBy(0, -65)
  }
}
</script>

<style scoped>
</style>
