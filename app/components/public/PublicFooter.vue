<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  logoLabel: {
    type: String,
    default: 'Klinik'
  },
  tagline: {
    type: String,
    required: true
  },
  services: {
    type: Array,
    required: true
  },
  companyLinks: {
    type: Array,
    required: true
  },
  socialLinks: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <footer class="bg-white dark:bg-[#070f0c] border-t border-gray-200 dark:border-dark-border pt-16 pb-8 px-6 md:px-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <div class="md:col-span-1">
        <NuxtLink to="/" class="flex items-center gap-2 font-black text-2xl tracking-tighter text-alan-dark dark:text-white mb-4">
          <UIcon name="i-fluent-leaf-two-24-filled" class="text-alan-accent" /> {{ logoLabel }}<span class="text-alan-accent">.</span>
        </NuxtLink>
        <p class="text-xs text-gray-500 leading-relaxed mb-6">{{ tagline }}</p>
        <div class="flex gap-4 text-gray-400">
          <NuxtLink v-for="social in socialLinks" :key="social.icon" :to="social.to" class="hover:text-alan-dark dark:hover:text-white transition-colors">
            <UIcon :name="'i-mdi-' + social.icon" class="text-xl" />
          </NuxtLink>
        </div>
      </div>
      
      <div>
        <h4 class="font-black text-sm text-alan-dark dark:text-white uppercase tracking-widest mb-4">Layanan</h4>
        <ul class="space-y-3 text-xs font-medium text-gray-500">
          <li v-for="service in services" :key="service.label">
            <NuxtLink :to="service.to" class="hover:text-alan-accent transition-colors">{{ service.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-black text-sm text-alan-dark dark:text-white uppercase tracking-widest mb-4">Perusahaan</h4>
        <ul class="space-y-3 text-xs font-medium text-gray-500">
          <li v-for="link in companyLinks" :key="link.label">
            <NuxtLink :to="link.to" class="hover:text-alan-accent transition-colors">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-black text-sm text-alan-dark dark:text-white uppercase tracking-widest mb-4">Dapatkan Aplikasi</h4>
        <p class="text-xs text-gray-500 mb-4">Konsultasi lebih mudah lewat genggaman tangan.</p>
        <div class="space-y-3">
          <BaseButton variant="dark" class="w-full">
            <UIcon name="i-mdi-apple" class="text-lg" /> App Store
          </BaseButton>
          <BaseButton variant="gray" class="w-full">
            <UIcon name="i-mdi-google-play" class="text-lg" /> Google Play
          </BaseButton>
        </div>
      </div>
    </div>
    
    <div class="pt-8 border-t border-gray-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400">
      <p>&copy; 2026 Klinik Plus Technology. Hak Cipta Dilindungi.</p>
      <div class="flex gap-4">
        <NuxtLink to="/privacy" class="hover:text-alan-dark dark:hover:text-white">Kebijakan Privasi</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-alan-dark dark:hover:text-white">Syarat & Ketentuan</NuxtLink>
      </div>
    </div>
  </footer>
</template>
