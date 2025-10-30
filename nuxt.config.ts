// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  
  devServer: {
    host: '0.0.0.0',
    port: 3000 // optional, default is 3000
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },


  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-lucide-icons',
    'v-gsap-nuxt',
    '@vueuse/motion/nuxt',
  ],
})