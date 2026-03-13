<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import type { IntegrationApp, ApiResponse } from '~/types'

const { data: response } = await useFetch<ApiResponse<{ title: string, description: string, list: IntegrationApp[] }>>('/api/v1/public/integrations')

const integrations = computed(() => response.value?.data.list || [])
const title = computed(() => response.value?.data.title || 'Terhubung dengan Ekosistem Anda.')
const description = computed(() => response.value?.data.description || 'SaaS Bot terintegrasi mulus dengan berbagai layanan produktivitas populer.')

useHead({
  title: 'Integrasi | SaaS Humanized-Bot'
})
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer padding="lg">
      <BaseBox display="flex" flexDirection="col" gap="sm" class="mb-20">
        <BaseTypography variant="h1">
          {{ title }}
        </BaseTypography>
        <BaseTypography variant="p">
          {{ description }}
        </BaseTypography>
      </BaseBox>

      <!-- Adaptive Grid: 1 on Mobile, 2 on Tablet, 3 on Desktop -->
      <BaseGrid cols="3" gap="lg">
        <BaseCard 
          v-for="app in integrations" 
          :key="app.id" 
          padding="xl" 
          radius="3xl" 
          class="group hover:border-alan-accent transition-all duration-500 flex flex-col items-center text-center h-full"
        >
          <!-- Visual Sample: Featured Icon Box from Template -->
          <BaseBox 
            background="dark" 
            rounded="2xl" 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            class="w-20 h-20 mb-8 shadow-glow group-hover:scale-110 transition-transform bg-gray-900 dark:bg-black"
          >
            <UIcon :name="app.logo" class="text-4xl text-emerald-500" />
          </BaseBox>
          
          <BaseBadge size="sm" color="blue" class="mb-4">
            {{ app.category }}
          </BaseBadge>
          
          <BaseTypography variant="h3" class="mb-3">
            {{ app.name }}
          </BaseTypography>
          
          <BaseTypography variant="p" color="muted" class="text-sm flex-grow">
            {{ app.description }}
          </BaseTypography>
          
          <BaseButton variant="ghost" size="sm" class="mt-6 group-hover:text-emerald-500">
            Pelajari Integrasi
            <UIcon name="i-fluent-arrow-right-20-regular" class="ml-2" />
          </BaseButton>
        </BaseCard>
      </BaseGrid>

      <!-- Visual Sample: CTA Bottom from Template -->
      <BaseBox class="mt-32 pt-20 border-t border-gray-100 dark:border-gray-800 text-center">
        <BaseTypography variant="h2" align="center" class="mb-6">
          Ingin Integrasi Kustom?
        </BaseTypography>
        <BaseTypography variant="p" align="center" class="mb-12 max-w-2xl mx-auto">
          Kami menyediakan API terbuka dan SDK SDK yang komprehensif untuk menghubungkan SaaS Bot dengan sistem internal atau CRM kustom Anda.
        </BaseTypography>
        <BaseBox display="flex" justifyContent="center" gap="md">
          <BaseButton size="lg" variant="primary">Hubungi Tim Developer</BaseButton>
          <BaseButton size="lg" variant="outline">Baca Dokumentasi API</BaseButton>
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>
