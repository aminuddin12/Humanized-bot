<script setup>
import PublicNavbar from '@/components/public/PublicNavbar.vue'
import PublicFooter from '@/components/public/PublicFooter.vue'

const menuItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Cek Gejala AI', to: '#triage' },
  { label: 'Dokter Spesialis', to: '#doctors' },
  { label: 'Edukasi', to: '#articles' }
]
</script>

<template>
  <div class="bg-alan-bg text-alan-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-500 relative min-h-screen">
    <PublicNavbar :menu-items="menuItems" />
    <slot />
    <PublicFooter />
  </div>
</template>
