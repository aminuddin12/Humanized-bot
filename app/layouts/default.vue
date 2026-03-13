<script setup lang="ts">
import GlobalHeader from '~/components/global/GlobalHeader.vue'
import GlobalFooter from '~/components/global/GlobalFooter.vue'
import BottomFooter from '~/components/global/BottomFooter.vue'
import CookieConsent from '~/components/global/CookieConsent.vue'
import SearchPopup from '~/components/global/SearchPopup.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import { useViewport } from '~/composables/useViewport'

const { isDesktop, isTablet, isMobile } = useViewport()
const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

provide('toggleSearch', toggleSearch)
</script>

<template>
  <BaseBox as="div" class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 relative min-h-screen">
    
    <GlobalHeader />

    <!-- Main Content -->
    <BaseBox 
      as="main" 
      class="min-h-screen transition-all duration-300 pt-24"
    >
      <slot />
    </BaseBox>

    <GlobalFooter />
    <BottomFooter />
    
    <CookieConsent />
    <SearchPopup :is-open="isSearchOpen" @close="isSearchOpen = false" />

  </BaseBox>
</template>
