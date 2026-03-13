<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import DocSidebar from '~/components/global/DocSidebar.vue'

const route = useRoute()
const { data: page } = await useAsyncData(`content-${route.path}`, () => queryContent(route.path).findOne())

useHead({
  title: page.value?.title ? `${page.value.title} | SaaS Bot Docs` : 'Documentation'
})
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer padding="lg">
      <BaseBox display="flex" gap="xl">
        <DocSidebar />
        
        <BaseBox class="flex-grow max-w-4xl">
          <BaseBox v-if="page" display="flex" flexDirection="col" gap="lg">
            <BaseBox class="mb-8 border-b pb-8">
              <BaseTypography variant="h1" class="mb-4">{{ page.title }}</BaseTypography>
              <BaseTypography variant="p" color="muted">{{ page.description }}</BaseTypography>
            </BaseBox>

            <!-- Nuxt Content Renderer -->
            <BaseBox class="prose dark:prose-invert max-w-none">
              <ContentRenderer :value="page" />
            </BaseBox>
          </BaseBox>
          
          <BaseBox v-else class="text-center py-20">
            <BaseTypography variant="h2">Select a topic to start reading.</BaseTypography>
            <BaseTypography variant="p" class="mt-4">Our documentation covers everything from setup to advanced API usage.</BaseTypography>
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>

<style>
/* Custom prose styling to match our theme without raw HTML */
.prose h2 { @apply text-gray-900 dark:text-white font-black text-3xl tracking-tight mt-12 mb-6; }
.prose h3 { @apply text-gray-900 dark:text-white font-bold text-xl tracking-tight mt-8 mb-4; }
.prose p { @apply text-gray-600 dark:text-gray-400 leading-relaxed mb-6; }
.prose ul { @apply list-disc list-inside mb-6 space-y-2 text-gray-600 dark:text-gray-400; }
.prose code { @apply bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400 font-mono text-sm; }
.prose pre { @apply bg-gray-900 dark:bg-black p-6 rounded-2xl overflow-auto mb-8 border border-gray-800 shadow-xl; }
.prose pre code { @apply bg-transparent p-0 text-gray-300; }
</style>
