<script setup lang="ts">
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { useNavigationData } from '~/composables/useNavigationData'
import { useAuth } from '~/composables/useAuth'

const { menuItems } = useNavigationData()
const { isAuthenticated } = useAuth()
const toggleSearch = inject('toggleSearch') as () => void

const megaMenuOpen = ref(false)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const services = [
  { title: 'AI Automation', desc: 'Scale your business with smart bots.', icon: 'i-fluent-bot-24-filled' },
  { title: 'Natural Language', desc: 'Understand human context deeply.', icon: 'i-fluent-brain-circuit-24-filled' },
  { title: 'Omnichannel', desc: 'One dashboard for all channels.', icon: 'i-fluent-chat-multiple-24-filled' },
  { title: 'Analytics', desc: 'Insightful reports for growth.', icon: 'i-fluent-data-usage-24-filled' }
]
</script>

<template>
  <BaseSurface 
    as="header" 
    :variant="isScrolled || mobileMenuOpen ? 'glass' : 'default'" 
    :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500', isScrolled ? 'h-16 shadow-sm' : 'h-24']"
  >
    <BaseContainer padding="none" class="h-full flex items-center justify-between">
      <BaseBox display="flex" alignItems="center" gap="xl">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <BaseBox background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-10 h-10 group-hover:bg-emerald-500 transition-colors">
            <UIcon name="i-fluent-bot-24-filled" class="text-xl text-emerald-500 group-hover:text-white" />
          </BaseBox>
          <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
        </NuxtLink>

        <!-- Desktop Menu -->
        <BaseBox display="flex" alignItems="center" gap="md" class="hidden lg:flex">
          <BaseBox 
            display="flex" 
            alignItems="center" 
            class="relative h-full"
            @mouseenter="megaMenuOpen = true"
            @mouseleave="megaMenuOpen = false"
          >
            <BaseButton variant="ghost" size="sm" class="flex items-center gap-1">
              Solutions
              <UIcon name="i-fluent-chevron-down-20-regular" :class="['transition-transform duration-300', megaMenuOpen ? 'rotate-180' : '']" />
            </BaseButton>

            <!-- Mega Menu -->
            <transition 
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <BaseBox 
                v-if="megaMenuOpen" 
                position="absolute" 
                class="top-full -left-20 w-[500px] mt-2 pt-2"
              >
                <BaseSurface variant="default" padding="md" class="rounded-[2rem] shadow-2xl border">
                  <BaseBox display="grid" class="grid-cols-2 gap-4">
                    <NuxtLink 
                      v-for="service in services" 
                      :key="service.title"
                      to="/features"
                      class="flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors group"
                    >
                      <BaseBox background="dark" rounded="lg" class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-emerald-500">
                        <UIcon :name="service.icon" class="text-xl text-gray-600 dark:text-gray-400 group-hover:text-white" />
                      </BaseBox>
                      <BaseBox>
                        <BaseTypography variant="detail" class="text-sm">{{ service.title }}</BaseTypography>
                        <BaseTypography variant="p" color="muted" class="text-xs">{{ service.desc }}</BaseTypography>
                      </BaseBox>
                    </NuxtLink>
                  </BaseBox>
                </BaseSurface>
              </BaseBox>
            </transition>
          </BaseBox>

          <NuxtLink v-for="link in menuItems" :key="link.to" :to="link.to" class="group">
            <BaseTypography variant="detail" color="muted" class="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {{ link.label }}
            </BaseTypography>
          </NuxtLink>
        </BaseBox>
      </BaseBox>

      <!-- Actions -->
      <BaseBox display="flex" alignItems="center" gap="sm">
        <BaseButton variant="ghost" size="sm" class="hidden md:flex" @click="toggleSearch">
          <UIcon name="i-fluent-search-24-regular" class="text-xl" />
        </BaseButton>
        <ThemeToggle class="hidden sm:flex" />
        
        <template v-if="isAuthenticated">
          <BaseButton size="sm" to="/u/dashboard">Dashboard</BaseButton>
        </template>
        <template v-else>
          <BaseButton variant="ghost" size="sm" class="hidden sm:flex" to="/login">Sign in</BaseButton>
          <BaseButton size="sm" class="hidden sm:flex" to="/register">Get Started</BaseButton>
        </template>

        <!-- Mobile Toggle -->
        <BaseButton variant="ghost" size="sm" class="lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <UIcon :name="mobileMenuOpen ? 'i-fluent-dismiss-24-regular' : 'i-fluent-navigation-24-regular'" class="text-2xl" />
        </BaseButton>
      </BaseBox>
    </BaseContainer>

    <!-- Mobile Menu Overlay -->
    <transition 
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <BaseBox v-if="mobileMenuOpen" position="fixed" class="inset-0 top-16 bg-white dark:bg-dark-bg z-40 lg:hidden">
        <BaseContainer padding="lg" display="flex" flexDirection="col" gap="lg">
          <BaseBox display="flex" flexDirection="col" gap="md">
            <BaseTypography variant="detail" color="muted">Navigation</BaseTypography>
            <NuxtLink 
              v-for="link in menuItems" 
              :key="link.to" 
              :to="link.to" 
              class="text-2xl font-black"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </BaseBox>
          
          <BaseBox display="flex" flexDirection="col" gap="md" class="mt-8">
            <BaseTypography variant="detail" color="muted">Quick Actions</BaseTypography>
            <BaseButton size="lg" class="w-full" to="/login" @click="mobileMenuOpen = false">Get Started</BaseButton>
            <BaseButton variant="outline" size="lg" class="w-full" @click="toggleSearch(); mobileMenuOpen = false">Search Platform</BaseButton>
          </BaseBox>
        </BaseContainer>
      </BaseBox>
    </transition>
  </BaseSurface>
</template>
