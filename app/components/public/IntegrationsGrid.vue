<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import type { IntegrationApp } from '~/types'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  list: {
    type: Array as () => IntegrationApp[],
    required: true
  }
})
</script>

<template>
  <BaseContainer id="integrations" padding="md">
    <BaseBox display="flex" flexDirection="col" gap="sm" class="mb-12">
      <BaseBox display="flex" flexDirection="col" gap="xs">
        <BaseTypography variant="h2">{{ title }}</BaseTypography>
        <BaseTypography variant="p">{{ description }}</BaseTypography>
      </BaseBox>
      <BaseBox display="flex" justifyContent="end">
        <BaseButton variant="link" size="sm">
          Lihat Semua Integrasi <UIcon name="i-fluent-arrow-right-16-filled" />
        </BaseButton>
      </BaseBox>
    </BaseBox>

    <BaseGrid cols="3" gap="md">
      <BaseSurface
        v-for="app in list"
        :key="app.id"
        background="white"
        rounded="2xl"
        elevation="md"
        as="div"
        class="group p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 transition-all duration-300"
      >
        <BaseBox display="flex" flexDirection="col" gap="md">
          <BaseBox display="flex" alignItems="center" justifyContent="between">
            <BaseSurface background="emerald" rounded="xl" class="p-3">
              <UIcon :name="app.logo" class="text-3xl text-emerald-500" />
            </BaseSurface>
            <BaseBadge color="white">{{ app.category }}</BaseBadge>
          </BaseBox>
          
          <BaseBox display="flex" flexDirection="col" gap="xs">
            <BaseTypography variant="h3">{{ app.name }}</BaseTypography>
            <BaseTypography variant="p" class="text-sm">{{ app.description }}</BaseTypography>
          </BaseBox>

          <BaseButton variant="secondary" size="md" class="mt-4">
            Hubungkan
          </BaseButton>
        </BaseBox>
      </BaseSurface>
    </BaseGrid>
  </BaseContainer>
</template>
