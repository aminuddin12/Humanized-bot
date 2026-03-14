<script setup lang="ts">
const route = useRoute()
const slug = (route.params.slug as string[])?.join('/') || 'home'

interface CmsPage {
  title: string
  content: string
}

const { data: page, error } = await useFetch<CmsPage>(`/api/v1/cms/pages/${slug}`)

useHead({
  title: page.value?.title || 'Page'
})
</script>

<template>
  <NuxtLayout name="default">
    <div v-if="page" class="py-20 min-h-screen bg-white dark:bg-slate-950">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-12 tracking-tight border-b border-slate-100 dark:border-slate-800 pb-8">{{ page.title }}</h1>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="prose prose-slate dark:prose-invert max-w-none" v-html="page.content" />
        </div>
      </UContainer>
    </div>
    
    <div v-else-if="error" class="py-40 min-h-screen bg-white dark:bg-slate-950">
      <UContainer>
        <div class="text-center flex flex-col items-center gap-6">
          <h1 class="text-8xl font-black text-emerald-500/20 mb-4">404</h1>
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Page Not Found</h2>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-md">The page you are looking for does not exist or has been moved.</p>
          <UButton to="/" size="xl" color="primary" class="mt-4 px-10">Go back home</UButton>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
