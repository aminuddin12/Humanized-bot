<script setup lang="ts">
import GlobalHeader from '~/components/global/GlobalHeader.vue'
import GlobalFooter from '~/components/global/GlobalFooter.vue'

const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

provide('toggleSearch', toggleSearch)
</script>

<template>
  <div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative min-h-screen">
    <GlobalHeader />

    <!-- Main Content -->
    <main class="min-h-screen">
      <slot />
    </main>

    <GlobalFooter />
    
    <CookieConsent v-if="false" /> <!-- Placeholder for now -->
    <SearchPopup :is-open="isSearchOpen" @close="isSearchOpen = false" />
  </div>
</template>
