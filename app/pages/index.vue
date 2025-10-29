<template>
  <!-- Hero Section -->
  <section id="home" class="pt-[65px] md:h-[100svh] h-max">
    <div class="relative container mx-auto pb-10 md:pb-0 text-center md:text-left px-4 md:px-20 lg:px-10 h-full w-full max-w-[1150px]">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-10 h-full w-full">
        <div class="h-full w-full flex order-2 md:order-1 flex-col justify-center items-center md:items-start gap-4">
                    <p class="text-sm md:text-base text-foreground/90 font-medium">
                        Connect with the best talent
                    </p>
                    <h1 class="text-4xl md:text-5xl font-bold">Find the best talent for your business With Skilink</h1>
                    <p class="text-base md:text-lg text-muted-foreground">
                        Skilink is a platform that helps you find the right talent for your business.
                    </p>
                    <div class="flex gap-2 w-full justify-center md:justify-start">
            <Button class="mt-2 rounded-full" size="lg" @click="scrollToSection('about')">
                        Learn More <ArrowRight class="w-4 h-4" />
                    </Button>
            <Button class="mt-2 rounded-full hover:bg-primary-foreground/5" variant="ghost" size="lg" @click="scrollToSection('contact')">
                        Contact Us
                    </Button>
                    </div>
                 </div>
                <div class="h-full w-full flex order-1 md:order-2 md:pe-10 pe-0 md:justify-end justify-center items-center">
          <img src="/images/home/hero.png" alt="logo" class="object-center md:w-[250px] w-[150px] object-cover">
        </div>
      </div>
      <div class="pb-10 md:flex text-primary-foreground cursor-pointer w-max animate-bounce hidden justify-center items-center absolute bottom-0 left-0 right-0 mx-auto" @click="scrollToSection('about')">
        <ArrowDown />
      </div>
                 </div>
  </section>


  <!-- Services Section -->
  <section id="services" ref="servicesSection" class="h-[calc(100vh)] pt-[75px] p-5">
    <div class="bg-primary-foreground rounded-3xl overflow-hidden h-full w-full">
      <div class="container relative mx-auto pb-10 md:pb-0 text-center md:text-left px-4 md:px-20 lg:px-10 h-full w-full max-w-[1150px]">
                <div ref="servicesSection1" class="absolute h-full w-full top-0 left-0 right-0 bottom-0 flex flex-col gap-4 justify-center items-center">
                    <h1 class="md:text-5xl text-3xl font-bold text-center text-white">Our Services</h1>
          <p class="text-white/80 md:text-lg text-base">
                        Explore the comprehensive services we offer to help you succeed.
                    </p>
                </div>
                <div ref="servicesSection2" class="grid absolute top-0 left-0 right-0 bottom-0 grid-cols-1 md:grid-cols-2 gap-4 p-4 h-full w-full">
                   <ServicesCard 
                       v-for="(service, index) in services.slice(0, 2)" 
                       :key="index"
                       :title="service.title"
                       :description="service.description"
                       :image="service.image"
                   />
                </div>
                <div ref="servicesSection3" class="grid absolute top-0 left-0 right-0 bottom-0 grid-cols-1 md:grid-cols-2 gap-4 p-4 h-full w-full">
                   <ServicesCard 
                       v-for="(service, index) in services.slice(2, 4)" 
                       :key="index + 2"
                       :title="service.title"
                       :description="service.description"
                       :image="service.image"
                   />
                </div>
        <div ref="servicesSection4" class="grid absolute top-0 left-0 right-0 bottom-0 grid-cols-1 gap-4 p-4 h-full w-full">
                   <ServicesCard 
                       v-for="(service, index) in services.slice(4, 5)" 
            :key="index + 4"
                       :title="service.title"
                       :description="service.description"
                       :image="service.image"
                   />
                </div>
            </div>
    </div>
  </section>

 <!-- what does the name means Section -->
 <section id="what-does-the-name-means"  class="h-[calc(100vh)] pt-[75px] ">
    <div class="bg-blue-300 flex items-center justify-centers relative  overflow-hidden h-full w-full">

        <div class="absolute top-10 left-0 right-0 bottom-0 w-[300px] h-[60px] rounded-full bg-red-500">

        </div>

        <div class="absolute top-50 left-0 right-0 bottom-0 w-[300px] h-[60px] rounded-full bg-red-500">

        </div>

        <img src="/images/brand/dark_logo.png" alt="logo" class=" w-[60%] left-0 right-0 absolute  mx-auto object-center object-cover" />
    </div>
  </section>



<section ref="whoWeAreSection" class="bg-primary-foreground">

  <!-- Who We Are Section -->
  <section id="who-we-are" class="py-20 md:py-20 container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10 bg-primary-foreground">
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Number Column -->
        <div class="hidden md:flex items-center justify-center md:justify-center order-2 md:order-1">
          <div class="text-[180px] md:text-[280px] font-bold text-primary leading-none">
            01
          </div>
        </div>
        <!-- Content Column -->
        <div class="order-1 md:order-2">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Who We Are</h2>
          <p class="text-[16px] text-white/80 leading-relaxed">
            At Skilink, we believe that <strong>talent is everywhere</strong> — and what businesses need is a smart connector to bridge them with the right professionals. That's exactly where we come in. We are a company specialized in remote hiring solutions, dedicated to connecting skilled professionals from around the world with modern businesses seeking smart and scalable growth.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            We offer end-to-end services that include recruiting, onboarding, and managing remote teams, all tailored to the specific needs and workflows of each client. With a strong focus on flexibility, reliability, and performance, we empower startups, SMEs, and growing businesses — especially those in high-cost or talent-scarce markets — to expand without the burden of building complex in-house operations.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            <strong>Founded in July 2023</strong>, Skilink has been a trusted partner in building efficient, distributed teams on a global scale.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10">
    <div class="border-t border-gray-200/80 "></div>
  </div>

  <!-- What Makes Us Different Section -->
  <section id="what-makes-us-different" class="py-20 md:py-32 container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10 bg-primary-foreground">
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Content Column -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">What Makes Us Different</h2>
          <p class="text-[16px] text-white/80 leading-relaxed">
            Unlike traditional outsourcing companies or freelance platforms, <strong>Skilink offers a fully managed remote team experience</strong>. We don't just connect you with talent — we become your true operational partner. From recruitment and onboarding to daily performance tracking, payroll management, and infrastructure support, we handle every detail so you don't have to.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            Our approach is designed for companies that want to scale rapidly without the complexity of building in-house HR or operations teams. We focus on long-term collaboration, team stability, and seamless integration with your business processes. Whether you're a startup, a growing SME, or a global enterprise, we ensure your remote teams are aligned, productive, and high-performing from day one.
          </p>
          <p class="text-[16px] text-white font-semibold mt-4">
            With Skilink, remote hiring isn't just easier — it's smarter.
          </p>
        </div>
        <!-- Number Column -->
        <div class="hidden md:flex items-center justify-center md:justify-center">
          <div class="text-[180px] md:text-[280px] font-bold text-primary leading-none">
            02
            </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10">
    <div class="border-t w-full border-gray-200/50"></div>
  </div>

  <!-- Vision Section -->
  <section id="vision-mission" class="py-20 md:py-32 container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10 bg-primary-foreground">
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Number Column -->
        <div class="hidden md:flex items-center justify-center md:justify-center order-2 md:order-1">
          <div class="text-[180px] md:text-[280px] font-bold text-primary leading-none">
            03
          </div>
        </div>
        <!-- Content Column -->
        <div class="order-1 md:order-2">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Vision</h2>
          <p class="text-[16px] text-white/80 leading-relaxed">
            At Skilink, we strive to be the <strong>world's leading provider of remote workforce solutions</strong>, empowering businesses to grow smarter, faster, and beyond geographical and technological boundaries.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            Our vision is to build a future-ready work environment where accessing global talent is seamless, and remote management is highly efficient, unlocking new horizons for expansion and innovation across companies of all sizes and industries.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            We aspire to be the trusted partner clients rely on to achieve sustainable and continuous growth in an ever-evolving work landscape.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="container mx-auto max-w-[1150px] px-4 md:px-20 lg:px-10">
    <div class="border-t border-gray-200/50"></div>
  </div>

  <!-- Mission Section -->
  <section class="py-20 md:py-32 px-4 md:px-20 container mx-auto max-w-[1150px] lg:px-10 bg-primary-foreground">
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Content Column -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Mission</h2>
          <p class="text-[16px] text-white/80 leading-relaxed">
            At Skilink, we are dedicated to supporting the growth and scaling of businesses by delivering <strong>highly efficient, managed remote teams</strong> that are precisely tailored to meet each client's unique needs. We employ smart recruitment methodologies to attract top global talent, combined with seamless operational processes that ensure continuous workflow and maximize productivity.
          </p>
          <p class="text-[16px] text-white/80 leading-relaxed mt-4">
            We believe in the power of continuous support and effective communication with remote teams to help businesses achieve their strategic objectives without the burden of administrative or logistical challenges. At Skilink, we take full responsibility for managing the teams—from recruitment and onboarding to daily management and handling financial and administrative matters—allowing you to focus entirely on growing and developing your business to its fullest potential.
          </p>
        </div>
        <!-- Number Column -->
        <div class="hidden md:flex items-center justify-center md:justify-center">
          <div class="text-[180px] md:text-[280px] font-bold text-primary leading-none">
            04
          </div>
        </div>
      </div>
    </div>
  </section>

    
</section>





  <!-- Founding Team Section -->
  <section id="founding-team" >
    <div class=" h-full w-full">
      <div class="container mx-auto pb-10 md:pb-0 text-center md:text-left px-4 md:px-20 lg:px-10 h-full w-full max-w-[1150px] flex flex-col justify-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Founding Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 founder-glare">
          <GlareCard v-for="(member, index) in foundingTeam" :key="index">
            <div class="h-full w-full p-6 text-center bg-red-500">
              <div class="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-3xl font-bold text-white">{{ member.name.charAt(0) }}</span>
              </div>
              <h3 class="text-2xl font-bold mb-2 text-white">{{ member.name }}</h3>
              <p class="text-white/90 font-semibold mb-4">{{ member.role }}</p>
              <p class="text-white/80 leading-relaxed">{{ member.bio }}</p>
            </div>
          </GlareCard>
        </div>
      </div>
    </div>
  </section>


    
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-vue-next'
import { Vue3Marquee } from 'vue3-marquee'
import GlareCard from '@/components/ui/glare-card/GlareCard.vue'


const helloArray = ['hello', 'こんにちは', 'bonjour']

const whoWeAreSection = ref(null)

const isDark = useState('isDark')


// Calculate how many pixels the element is from the top of the document
const getOffsetTop = (el) => {
  let offset = 0
  while (el) {
    offset += el.offsetTop
    el = el.offsetParent
  }
  return offset
}

// Toggle navbar theme based on scroll position relative to whoWeAreSection
const handleScroll = () => {
  if (!whoWeAreSection.value) return
  const sectionEl = whoWeAreSection.value
  const sectionTop = getOffsetTop(sectionEl)
  const sectionBottom = sectionTop + sectionEl.offsetHeight
  const viewportScrollY = window.scrollY

  const enterThreshold = 120 // when approaching the section top
  const exitThreshold = 120  // when section bottom nears the top

  const topIsNear = viewportScrollY + enterThreshold >= sectionTop
  const bottomNearTop = sectionBottom - viewportScrollY <= exitThreshold

  // Dark when near/inside the section but revert to light when bottom reaches top
  isDark.value = topIsNear && !bottomNearTop
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const services = [
  {
    title: 'Remote Talent Recruitment',
    description: 'We source and hire the best global talent across tech, design, marketing, accounting, and more to build a strong and well-suited team for you.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Team Management',
    description: 'We handle onboarding, daily operations, task oversight, and performance monitoring to ensure efficient workflow.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Training & Development',
    description: 'We deliver tailored training programs for remote teams to ensure full alignment with your business processes and key performance indicators (KPIs).',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Payroll & Admin Services',
    description: 'We manage all aspects of salaries, contracts, and legal compliance, saving you the hassle of HR and legal procedures.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Remote Infrastructure Support',
    description: 'We provide the necessary tools, devices, and systems to keep your remote team productive and well-connected.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const coreValues = [
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty in everything we do, building relationships based on mutual trust with our clients and partners.'
  },
  {
    title: 'Efficiency',
    description: 'We value smart systems and lean operations that deliver the best results with minimal effort.'
  },
  {
    title: 'Reliability',
    description: 'You can count on us to deliver consistently and professionally, with a commitment to deadlines and quality.'
  },
  {
    title: 'Innovation',
    description: 'We continuously optimize remote work practices to make them smarter and easier.'
  },
  {
    title: 'Client Success',
    description: 'Your growth is our ultimate goal—we work as your true partner, not just a service provider.'
  }
]

const foundingTeam = [
  {
    name: 'Ezzaldeen Nobani',
    role: 'Co-founder, CEO, and Director of Operations',
    bio: 'Founder of DotTech, with extensive experience in HR, remote team building, and digital systems.'
  },
  {
    name: 'Suhaib',
    role: 'Co-founder, Financial Strategist',
    bio: 'Background in financial markets, studied in Europe, bringing financial precision and international insight.'
  },
  {
    name: 'Zaid',
    role: 'Co-founder, Business Development & Partnerships',
    bio: 'Coming from a family business in plastics with operations in the U.S., he brings commercial vision and global connectivity.'
  }
]

const servicesSection = ref(null)
const servicesSection1 = ref(null)
const servicesSection2 = ref(null)
const servicesSection3 = ref(null)
const servicesSection4 = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}


onMounted(() => {
    const tl = useGSAP().timeline({
        scrollTrigger: {
            trigger: servicesSection.value,
            start: "top top",
            end: "bottom+=3000 bottom",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
        }
    })

    tl.to(servicesSection1.value, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
    })

    tl.from(servicesSection2.value, {
        x: 1340,
        duration: 0.5,
        ease: "power2.inOut",
    }, '<')

    tl.to(servicesSection2.value, {
        x: -1340,
        duration: 0.5,
        ease: "power2.inOut",
    })

    tl.from(servicesSection3.value, {
        x: 1340,
        duration: 0.5,
        ease: "power2.inOut",
    }, ">-0.5")
    tl.to(servicesSection3.value, {
        x: -1340,
        duration: 0.5,
        ease: "power2.inOut",
  })

    tl.from(servicesSection4.value, {
        x: 1340,
        duration: 0.5,
        ease: "power2.inOut",
    }, ">-0.5")
})

useSeoMeta({
  title: 'Skilink - Your Global Growth Partner',
  description: 'Skilink connects highly skilled professionals with forward-thinking companies across the globe. We simplify remote hiring and build reliable, distributed teams.',
})
</script>

<style scoped>

.founder-glare :deep(.container) {
  width: 100%;
  aspect-ratio: auto;
}

.founder-glare :deep(.background-style) {
  /* Tint the foil/glare with the primary color */
  --rainbow: linear-gradient(0deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%) 0% var(--bg-y) / 200% 700% no-repeat;
  --diagonal: none;
  --pattern: none;
}

</style>