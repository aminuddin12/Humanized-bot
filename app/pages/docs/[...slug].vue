<script setup lang="ts">
const route = useRoute()

// Nuxt Content v3 uses queryCollection
const { data: page } = await useAsyncData(`content-${route.path}`, () => {
  return queryCollection('content').path(route.path).first()
})

useHead({
  title: page.value?.title ? `${page.value.title} | SaaS Bot Docs` : 'Documentation'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <UContainer>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Sidebar -->
          <aside class="w-full lg:w-64 shrink-0">
            <DocSidebar />
          </aside>
          
          <!-- Content -->
          <main class="flex-grow max-w-4xl">
            <div v-if="page" class="flex flex-col gap-12">
              <div class="mb-8 border-b border-slate-200 dark:border-slate-800 pb-12">
                <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{{ page.title }}</h1>
                <p class="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{{ page.description }}</p>
              </div>

              <!-- Nuxt Content Renderer -->
              <div class="prose prose-slate dark:prose-invert max-w-none">
                <ContentRenderer :value="page" />
              </div>
            </div>
            
            <div v-else class="text-center py-20 flex flex-col items-center gap-6">
              <div class="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-4">
                <UIcon name="i-fluent-book-search-24-filled" class="text-4xl text-emerald-500" />
              </div>
              <h2 class="text-3xl font-black text-slate-900 dark:text-white">Select a topic to start reading.</h2>
              <p class="text-lg text-slate-500 dark:text-slate-400 max-w-md">Our documentation covers everything from setup to advanced API usage.</p>
            </div>
          </main>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>

<style scoped>
@reference "tailwindcss";
/* Custom prose styling to match our theme */
.prose h2 { @apply text-slate-900 dark:text-white font-black text-3xl tracking-tight mt-12 mb-6; }
.prose h3 { @apply text-slate-900 dark:text-white font-bold text-xl tracking-tight mt-8 mb-4; }
.prose p { @apply text-slate-600 dark:text-slate-400 leading-relaxed mb-6; }
.prose ul { @apply list-disc list-inside mb-6 space-y-2 text-slate-600 dark:text-slate-400; }
.prose code { @apply bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400 font-mono text-sm; }
.prose pre { @apply bg-slate-900 dark:bg-black p-6 rounded-2xl overflow-auto mb-8 border border-slate-800 shadow-xl; }
.prose pre code { @apply bg-transparent p-0 text-slate-300; }
</style>
