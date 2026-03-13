<script setup lang="ts">
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { useNavigationData } from '~/composables/useNavigationData'

const { menuItems } = useNavigationData()
</script>

<template>
  <BaseSurface variant="glass" as="header" class="fixed top-0 left-0 right-0 z-50 w-full h-20 border-b">
    <BaseContainer padding="none" class="h-full flex items-center justify-between">
      <BaseBox display="flex" alignItems="center" gap="lg">
        <NuxtLink to="/" class="flex items-center gap-2">
          <BaseBox background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-10 h-10">
            <UIcon name="i-fluent-bot-24-filled" class="text-xl text-emerald-500" />
          </BaseBox>
          <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
        </NuxtLink>

        <BaseBox display="flex" alignItems="center" gap="md">
          <NuxtLink v-for="link in menuItems" :key="link.to" :to="link.to" class="group">
            <BaseTypography variant="detail" color="muted" class="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {{ link.label }}
            </BaseTypography>
          </NuxtLink>
        </BaseBox>
      </BaseBox>

      <BaseBox display="flex" alignItems="center" gap="sm">
        <ThemeToggle />
        <BaseButton size="sm" to="/demo">Try Demo</BaseButton>
      </BaseBox>
    </BaseContainer>
  </BaseSurface>
</template>
