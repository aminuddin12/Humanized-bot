<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
</script>

<template>
  <BaseSurface background="glass" class="py-20 md:py-32 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
    <BaseBox display="flex" flexDirection="col" alignItems="center" gap="xs" class="text-center mb-16">
      <BaseTypography variant="h2">Alur Kerja Cerdas</BaseTypography>
      <BaseTypography variant="p">Hanya butuh 3 langkah untuk memulai otomasi WhatsApp Anda.</BaseTypography>
    </BaseBox>

    <BaseContainer width="narrow">
      <BaseBox display="flex" flexDirection="col" gap="xl" class="md:flex-row md:justify-between items-center relative">
        <!-- Step 1 -->
        <BaseSurface background="white" rounded="2xl" elevation="md" class="w-full md:w-64 p-8 flex flex-col items-center text-center">
          <BaseSurface background="blue" rounded="xl" class="p-4 mb-4">
            <BaseIconWrapper icon="i-fluent-qr-code-24-filled" color="blue" size="lg" />
          </BaseSurface>
          <BaseTypography variant="h3" class="text-lg">1. Hubungkan</BaseTypography>
          <BaseTypography variant="p" class="text-xs">Scan QR code untuk menghubungkan WhatsApp Anda ke dashboard kami.</BaseTypography>
        </BaseSurface>

        <!-- Step 2 -->
        <BaseSurface background="white" rounded="2xl" elevation="floating" class="w-full md:w-64 p-8 flex flex-col items-center text-center border-2 border-emerald-500/20">
          <BaseSurface background="emerald" rounded="xl" class="p-4 mb-4 shadow-glow">
            <BaseIconWrapper icon="i-fluent-settings-suggest-24-filled" color="emerald" size="lg" />
          </BaseSurface>
          <BaseTypography variant="h3" class="text-lg">2. Atur AI</BaseTypography>
          <BaseTypography variant="p" class="text-xs">Tentukan rules dan biarkan AI kami belajar dari cara Anda menjawab.</BaseTypography>
        </BaseSurface>

        <!-- Step 3 -->
        <BaseSurface background="white" rounded="2xl" elevation="md" class="w-full md:w-64 p-8 flex flex-col items-center text-center">
          <BaseSurface background="dark" rounded="xl" class="p-4 mb-4">
            <BaseIconWrapper icon="i-fluent-flash-24-filled" color="white" size="lg" />
          </BaseSurface>
          <BaseTypography variant="h3" class="text-lg">3. Otomatisasi</BaseTypography>
          <BaseTypography variant="p" class="text-xs">Bot mulai menjawab pelanggan secara otomatis 24/7 dengan gaya Anda.</BaseTypography>
        </BaseSurface>
      </BaseBox>
    </BaseContainer>
  </BaseSurface>
</template>
