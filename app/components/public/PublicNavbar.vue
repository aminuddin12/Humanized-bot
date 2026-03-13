<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { usePublicData } from '~/composables/usePublicData'

const { toggleDark, isDark } = usePublicData()

const navLinks = [
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'Integrations', to: '#integrations' },
  { label: 'Docs', to: '/docs' }
]
</script>

<template>
  <BaseBox as="header" position="fixed" class="top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-dark-border">
    <BaseContainer padding="none" class="h-20 flex items-center justify-between">
      <BaseBox as="nav" display="flex" alignItems="center" gap="lg">
        <NuxtLink to="/" class="flex items-center gap-2">
          <BaseBox background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-10 h-10">
            <UIcon name="i-fluent-bot-24-filled" class="text-xl text-emerald-500" />
          </BaseBox>
          <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
        </NuxtLink>

        <BaseBox display="flex" alignItems="center" gap="md" class="hidden md:flex">
          <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.to" class="group">
            <BaseTypography variant="detail" color="muted" class="group-hover:text-alan-dark dark:group-hover:text-white transition-colors">
              {{ link.label }}
            </BaseTypography>
          </NuxtLink>
        </BaseBox>
      </BaseBox>

      <BaseBox display="flex" alignItems="center" gap="sm">
        <BaseButton variant="ghost" size="sm" @click="toggleDark">
          <UIcon :name="isDark ? 'i-fluent-weather-sunny-24-filled' : 'i-fluent-weather-moon-24-filled'" class="text-xl" />
        </BaseButton>
        <BaseButton size="sm" class="hidden sm:flex" to="/demo">
          Try Demo
        </BaseButton>
      </BaseBox>
    </BaseContainer>
  </BaseBox>
</template>
