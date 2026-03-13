<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

useHead({
  bodyAttrs: {
    class: 'overflow-hidden'
  }
})
</script>

<template>
  <BaseBox as="div" class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 relative min-h-screen flex items-center justify-center p-6">
    
    <!-- Background Orbs -->
    <BaseBox position="absolute" class="top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    <BaseBox position="absolute" class="bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

    <BaseBox position="fixed" class="top-6 right-6 z-50">
      <ThemeToggle />
    </BaseBox>

    <BaseBox class="w-full max-w-md relative z-10">
      <NuxtLink to="/" class="flex items-center justify-center gap-2 mb-12 group">
        <BaseBox background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-12 h-12">
          <UIcon name="i-fluent-bot-24-filled" class="text-2xl text-emerald-500" />
        </BaseBox>
        <BaseTypography variant="h3" class="text-2xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
      </NuxtLink>

      <BaseSurface variant="default" padding="xl" class="rounded-[2.5rem] shadow-2xl border">
        <slot />
      </BaseSurface>
      
      <BaseBox class="mt-8 text-center">
        <BaseTypography variant="detail" color="muted" class="text-[10px]">
          &copy; {{ new Date().getFullYear() }} SaaS Bot Engine. All Rights Reserved.
        </BaseTypography>
      </BaseBox>
    </BaseBox>

  </BaseBox>
</template>
