<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Klinik+` : 'Klinik+ | Layanan Kesehatan Bertenaga AI Masa Depan'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Konsultasi medis tanpa batas waktu. Mulai dari pengecekan gejala awal berbasis AI hingga panggilan video dengan dokter spesialis.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
