<script setup>
import BaseButton from '~/components/ui/BaseButton.vue'

defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout name="full">
    <div class="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div class="mb-8">
        <UIcon name="i-fluent-warning-24-filled" class="text-8xl text-alan-accent opacity-20" />
      </div>
      
      <h1 class="text-6xl md:text-8xl font-black text-alan-dark dark:text-white tracking-tighter mb-4">
        {{ error.statusCode }}
      </h1>
      
      <p class="text-xl text-alan-text-muted dark:text-gray-400 max-w-md mb-10 leading-relaxed">
        {{ error.statusCode === 404 ? 'Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.' : 'Terjadi kesalahan pada sistem kami. Silakan coba beberapa saat lagi.' }}
      </p>

      <BaseButton variant="secondary" size="lg" @click="handleError">
        Kembali ke Beranda
      </BaseButton>
    </div>
  </NuxtLayout>
</template>
