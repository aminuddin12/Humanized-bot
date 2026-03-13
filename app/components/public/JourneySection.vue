<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const steps = [
  { title: 'Training AI', desc: 'Masukkan basis pengetahuan Anda dan biarkan AI kami mempelajarinya dalam hitungan menit.', icon: 'i-fluent-brain-circuit-24-filled' },
  { title: 'Kustomisasi Bot', desc: 'Sesuaikan kepribadian dan gaya bicara bot agar sesuai dengan brand identity Anda.', icon: 'i-fluent-paint-brush-24-filled' },
  { title: 'Go Live!', desc: 'Integrasikan ke WhatsApp, Telegram, atau Website Anda dengan satu baris kode.', icon: 'i-fluent-rocket-24-filled' }
]
</script>

<template>
  <BaseContainer padding="lg" background="white">
    <BaseBox display="flex" flexDirection="col" alignItems="center" gap="sm" class="mb-16 text-center max-w-2xl mx-auto">
      <BaseTypography variant="h2" align="center">Setup Cepat, Hasil Instan.</BaseTypography>
      <BaseTypography variant="p" align="center">Hanya perlu 3 langkah mudah untuk mengaktifkan bot tercerdas untuk bisnis Anda.</BaseTypography>
    </BaseBox>

    <BaseGrid cols="3" gap="lg" position="relative">
      <!-- Connection Line (Desktop) -->
      <BaseBox position="absolute" class="hidden lg:block top-1/4 left-0 right-0 h-px bg-emerald-100 dark:bg-emerald-900/30 z-0" />
      
      <BaseBox v-for="(step, index) in steps" :key="step.title" display="flex" flexDirection="col" alignItems="center" gap="sm" class="text-center z-10">
        <BaseBox position="relative">
          <BaseIconWrapper :icon="step.icon" color="dark" size="xl" class="mb-4" />
          <BaseBox position="absolute" class="-top-2 -right-2 w-8 h-8 rounded-full bg-alan-accent text-white flex items-center justify-center font-black text-xs shadow-glow">
            {{ index + 1 }}
          </BaseBox>
        </BaseBox>
        
        <BaseTypography variant="h3">{{ step.title }}</BaseTypography>
        <BaseTypography variant="p" class="text-sm max-w-[250px]">{{ step.desc }}</BaseTypography>
      </BaseBox>
    </BaseGrid>

    <BaseBox display="flex" justifyContent="center" class="mt-20">
      <BaseBox background="emerald" rounded="full" class="px-8 py-6 max-w-4xl w-full border border-emerald-100 dark:border-emerald-900/30">
        <BaseGrid cols="2" items="center">
          <BaseBox>
            <BaseTypography variant="h3" color="accent">Siap Meningkatkan Konversi?</BaseTypography>
            <BaseTypography variant="p" class="text-sm">Bergabunglah dengan 1.000+ bisnis yang telah menggunakan SaaS Bot.</BaseTypography>
          </BaseBox>
          <BaseBox display="flex" justifyContent="end">
            <BaseButton size="lg" to="/demo">Mulai Demo Sekarang</BaseButton>
          </BaseBox>
        </BaseGrid>
      </BaseBox>
    </BaseBox>
  </BaseContainer>
</template>
